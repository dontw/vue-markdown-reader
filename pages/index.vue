<template>
  <div>
    <Layout :style="{minHeight: '100vh'}">
      <Layout>
          <AppNav @emitMenuItemName="getSiderItems"></AppNav>
          <Layout>
            <Sider breakpoint="md" :collapsed-width="78">
              <AppMenu :items="siderItems" @emitItemName="getContent"></AppMenu>
            </Sider>
            <Content :style="{padding: '12px', 'display':'flex','align-items':'center','justify-content':'center'}">
                <Card shadow :style="{minHeight:'90.5vh', width:'100%', padding:'5px'}">
                    <div v-if="contentList && toclistStatus" class="toc-btn--menu" @click="toggleToc" style="line-height:30px;">🗙</div>
                    <div v-if="contentList&& !toclistStatus" class="toc-btn--menu" @click="toggleToc" style="font-size:25px;">≡</div>
                    <div class="toc-btn--go-top" @click="goToTop">🡱</div>
                    <div v-if="contentList" v-html="contentList" class="toc list" :class="{'list--close':!toclistStatus}"></div>
                    <VueMarkdown
                      ref="markdown"
                      v-if="cardContent && navStatus ==='guides'"
                      class="markdown-body"
                      lang-prefix="language-"
                      :toc="true"
                      :toc-first-level="1"
                      :toc-last-level="4"
                      :source="cardContent"
                      @toc-rendered="getTocHtml"
                    />
                    <iframe class="iframe" v-if="cardContent && navStatus ==='apis'" :src="cardContent" frameborder="0"></iframe>
                </Card>
            </Content>
          </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import AppNav from '~/components/AppNav';
import AppMenu from '~/components/AppMenu';
import Prism from 'prismjs';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-scss.min';
import 'prismjs/components/prism-css.min';
import 'prismjs/components/prism-bash.min';

export default {
  components: {
    AppNav,
    AppMenu,
  },

  data() {
    return {
      tocHtml: null,
      toclistStatus: true,
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.getSiderItems('guides');
      if (!this.isObjectEmpty(this.$route.query)) {
        this.$store.commit('setSiderItems', this.$route.query);
        this.$store.dispatch('getContent', this.$route.query.name);
      }
    });
  },

  updated() {
    this.$nextTick(() => {
      if (this.$refs.markdown) {
        Prism.highlightAll();
      }
    });
  },

  computed: {
    siderItems() {
      return this.$store.getters.getSiderItems;
    },

    cardContent() {
      return this.$store.state.cardContent;
    },

    contentList() {
      return this.$store.state.tableContent;
    },

    navStatus() {
      return this.$store.state.navStatus;
    },
  },
  methods: {
    isObjectEmpty(obj) {
      return Object.keys(obj).length === 0 && obj.constructor === Object;
    },

    toggleToc() {
      this.toclistStatus = !this.toclistStatus;
    },

    getSiderItems(name) {
      this.$store.dispatch('getSiderItems', name);
    },

    getContent(name) {
      if (this.navStatus === 'apis') {
        this.$store.dispatch('getContent', name[0].link);
        return;
      }
      window.location.href = `/?name=${name}&type=md`;
      // this.$store.dispatch('getContent', name);
    },

    getTocHtml(val) {
      this.$store.commit('setTableContent', val);
    },

    goToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
};
</script>
<style lang="less">
@import '../assets/style/_var.less';
.list {
  width: 300px;
  position: fixed;
  right: 30px;
  background: #fff;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  border: 1px solid #ccc;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  padding: 15px;
  max-height: 80%;
  overflow-y: scroll;

  &--close {
    right: -330px;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
}

.toc-btn {
  position: fixed;
  background-color: @primary-color;
  text-align: center;
  cursor: pointer;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  z-index: 1;
  line-height: 32px;

  &--menu {
    &:extend(.toc-btn);
    top: 60px;
    right: 30px;
  }

  &--go-top {
    &:extend(.toc-btn);
    bottom: 15px;
    right: 30px;
    background-color: @primary-color;
  }
}

.iframe {
  width: 100%;
  height: 84vh;
}
</style>
