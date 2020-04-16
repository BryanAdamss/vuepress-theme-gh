<template>
  <div class="c-TheHeader">
    <div class="c-TheHeader-bd">
      <slot>
        <Header />
      </slot>
    </div>
  </div>
</template>

<script>
/**
 * * TheHeader
 * * 头部
 */

import Header from '@theme/components/Header'

export default {
  name: 'TheHeader',
  components: {
    Header
  },
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
.c-TheHeader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
  width: 100vw;
}
</style>
