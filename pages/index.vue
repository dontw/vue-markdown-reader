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
                    <div v-if="contentList" v-html="contentList" class="toc list"></div>
                    <VueMarkdown
                      v-if="cardContent && navStatus ==='guides'"
                      class="markdown-body"
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
export default {
  components: {
    AppNav,
    AppMenu,
  },

  data() {
    return {
      tocHtml: null,
    };
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
    getSiderItems(name) {
      this.$store.dispatch('getSiderItems', name);
    },

    getContent(name) {
      if (this.navStatus === 'apis') {
        this.$store.dispatch('getContent', name[0].link);
        return;
      }
      this.$store.dispatch('getContent', name);
    },

    getTocHtml(val) {
      this.$store.commit('setTableContent', val);
    },
  },
};
</script>
<style lang="less" scoped>
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
}

.iframe {
  width: 100%;
  height: 84vh;
}
</style>
