<template>
  <Menu active-name="1" theme="light" width="auto" @on-select="emitItem">
      <i-menuItem v-if="items.type === 'md'" v-for="(val, key) in items.data" :key="key" :name="val">
        <span>{{val | capitalize}}</span>
      </i-menuItem>
      <Tree v-if="items.type === 'tree'" :data="items.data" @on-select-change="emitItem"></Tree>
  </Menu>
</template>
<script>
import { MenuItem } from 'iview';
export default {
  props: {
    items: {
      type: Object,
    },
  },

  filters: {
    capitalize: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },

  components: {
    'i-menuItem': MenuItem,
  },

  methods: {
    emitItem(name) {
      if (name.length === 0) {
        return;
      }
      this.$emit('emitItemName', name);
    },
  },
};
</script>

