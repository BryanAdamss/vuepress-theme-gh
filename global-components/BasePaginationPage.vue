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
      return !!this.$pagination && !!this.$pagination.pages && !!this.$pagination.pages.length
    }
  },
  watch: {},
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.c-BasePaginationPage {
}
</style>
