<template>
  <section class="container">
    <div>
      <app-logo/>
      <div class="wrap">
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="text">Text</Button>
          <br><br>
          <Button type="info">Info</Button>
          <Button type="success">Success</Button>
          <Button type="warning">Warning</Button>
          <Button type="error">Error</Button>
      </div>

    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';

export default {
  components: {
    AppLogo,
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.title {
  background: linear-gradient(#e66465, #9198e5);
}
</style>


