<template>
    <Menu mode="horizontal" theme="light" active-name="guides" class="menu" @on-select="emitItem">
          <div class="layout-logo">
            <img src="/icon_120x120.png" alt="icon">
            Starlux Console
          </div>
          <div class="layout-nav">
            <i-menuItem name="guides">
                <Icon type="md-book" />
                Guides
            </i-menuItem>
            <i-menuItem name="apis">
                <Icon type="md-cog" />
                API Websites
            </i-menuItem>
            <i-menuItem name="gitlab" to="http://gitlab.starlux-airlines.com/" target="_blank">
              <Icon type="md-git-network" />
              Git Lab
            </i-menuItem>
          </div>
    </Menu>
</template>
<script>
import { MenuItem } from 'iview';
export default {
  components: {
    'i-menuItem': MenuItem,
  },
  data() {
    return {};
  },
  methods: {
    emitItem(itemName) {
      this.$emit('emitMenuItemName', itemName);
    },
  },
};
</script>
<style lang="less" scoped>
.layout-logo {
  float: left;
  position: relative;
  top: 0px;
  left: 20px;
  font-size: 1.3rem;
  font-weight: bold;
  color: #41b883;
}
.layout-nav {
  float: right;
  margin-right: 20px;
}

img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-bottom: 3px;
}
</style>

