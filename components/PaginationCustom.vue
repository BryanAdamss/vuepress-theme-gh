<template>
  <div class="c-PaginationCustom">
    <Pagination />
  </div>
</template>

<script>
/**
 * * PaginationCustom
 * * 自定义分页器
 */

import { Pagination } from '@vuepress/plugin-blog/lib/client/components'

export default {
  name: 'PaginationCustom',
  components: {
    Pagination
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

<style lang="scss" scoped>
.c-PaginationCustom {
}
</style>
