<template>
  <BasePaginationPage class="c-SingleTagList">
    <template>
      <RouterLink
        v-for="page in $pagination.pages"
        :key="page.title"
        :to="page.path"
        tag="div"
      >
        {{ page.title }}
      </RouterLink>
    </template>
  </BasePaginationPage>
</template>

<script>
/**
 * * SingleTagList
 * * 单个标签对应的文章列表页
 */

export default {
  name: 'SingleTagList',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() { },
  mounted() {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
.c-SingleTagList {
}
</style>
