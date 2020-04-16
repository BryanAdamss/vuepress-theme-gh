<template>
  <Container>
    <div class="c-Tags">
      <div class="c-Tags-bd">
        <template v-for="tag in tagList">
          <RouterLink
            :key="tag.name"
            :to="tag.path"
          >
            {{ tag.name }}
          </RouterLink>
        </template>
      </div>
    </div>
  </Container>
</template>

<script>
/**
 * * Tags
 * * 标签列表
 */

export default {
  name: 'Tags',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
    }
  },
  computed: {
    tagList() {
      return this.$frontmatterKey.list
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
.c-Tags {
}
</style>
