<template>
  <div>
    <div v-html="tocHtml" class="toc list">{{tocHtml}}</div>
    <VueMarkdown class="markdown-body" :toc="true" :toc-first-level="1" :toc-last-level="4" :source="mdString" @toc-rendered="getTocHtml"/>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';

export default {
  layout: 'default',
  data() {
    return {
      mdString: 'loading',
      tocHtml: null,
    };
  },
  mounted() {
    this.$axios
      .$get('/markdown/javascript.md')
      .then((res) => {
        this.mdString = res;
      })
      .catch((err) => (this.mdString = `# Can't Find This .md File!!`));
  },
  components: {
    AppLogo,
  },
  methods: {
    getTocHtml(val) {
      this.tocHtml = val;
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  background: linear-gradient(#e66465, #9198e5);
}

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
</style>
