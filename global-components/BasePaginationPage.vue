<template>
  <div class="c-BasePaginationPage">
    <div class="c-BasePaginationPage-bd">
      <slot />
    </div>

    <div class="c-BasePaginationPage-ft">
      <slot name="ft">
        <PaginationCustom v-if="showPagination" />
      </slot>
    </div>
  </div>
</template>

<script>
/**
 * * BasePaginationPage
 */

import PaginationCustom from '@theme/components/PaginationCustom'

export default {
  name: 'BasePaginationPage',
  components: {
    PaginationCustom
  },
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {
    showPagination() {
      // 分页数量大于1时,才需要展示分页
      return !!this.$pagination && this.$pagination.length > 1
    }
  },
  watch: {},
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
.c-BasePaginationPage {
}
</style>
