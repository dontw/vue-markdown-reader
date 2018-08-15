<template>
  <Menu active-name="1" theme="light" width="auto" @on-select="emitItem">
      <div>{{navStatus}}</div>
      <i-menuItem v-for="(val, key) in items.data" :key="key" :name="val">
        <span>{{val | capitalize}}</span>
      </i-menuItem>
  </Menu>
</template>
<script>
import { MenuItem } from 'iview';
export default {
  props: {
    items: {
      type: Object,
    },

    navStatus: {
      type: String,
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
      this.$emit('emitItemName', name);
    },
  },
};
</script>

