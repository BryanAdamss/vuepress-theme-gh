<template>
  <div class="c-PostCardList">
    <div
      v-for="page in formatedPages"
      :key="page.path"
      class="c-PostCardList-item"
    >
      <slot v-bind="page">
        <PostCard
          :title="page.title"
          :summary="page.summary"
          @click.native="$emit('cardClick',page.path)"
        >
          <template #ft>
            <span>{{ page._dateText }}</span>
            <span>{{ page._readTimeText }}</span>
          </template>
        </PostCard>
      </slot>
    </div>
  </div>
</template>

<script>
/**
 * * PostCardList
 * * 文章卡片列表
 */

import PostCard from '@theme/components/PostCard'

export default {
  name: 'PostCardList',
  components: {
    PostCard
  },
  mixins: [],
  props: {
    pages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    formatedPages() {
      return this.pages.map(page => {
        return {
          ...page,
          _dateText: new Date(page.frontmatter.date).toLocaleDateString(),
          _readTimeText: `大约${page.readingTime}分钟`
        }
      })
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
.c-PostCardList {
}
</style>
