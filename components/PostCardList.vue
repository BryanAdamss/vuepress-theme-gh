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
            <div class="c-Info">
              <span class="c-Info-text">{{ page._dateText }}</span>
              <span class="c-Info-text">{{ page._charCountText }}</span>
              <span class="c-Info-text">{{ page._readTimeText }}</span>
            </div>
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
          _readTimeText: `大约${Math.max(1, Math.round(page.readingTime / 1000 / 60))}分钟`,
          _charCountText: `约${page.charCount}字`
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

.c-Info {
  font-size: 14px;
  color: $subTextColor;
}
</style>
