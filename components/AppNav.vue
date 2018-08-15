<template>
    <Menu mode="horizontal" theme="light" active-name="home" class="menu" @on-select="emitItem">
          <div class="layout-logo">
            <Icon type="md-code" size="32" style="padding-bottom:5px;"/>
            Starlux Console
          </div>
          <div class="layout-nav">
            <i-menuItem name="home">
                <Icon type="md-home" />
                Home
            </i-menuItem>
            <i-menuItem name="guides">
                <Icon type="md-book" />
                Style Guides
            </i-menuItem>
            <i-menuItem name="apis">
                <Icon type="md-cog" />
                APIs
            </i-menuItem>
            <i-menuItem name="gitlab" to="http://git.starlux-airlines.com/" target="_blank">
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
  color: #3b8070;
}
.layout-nav {
  float: right;
  margin-right: 20px;
}
</style>

