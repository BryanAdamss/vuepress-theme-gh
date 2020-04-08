<template>
  <BasePaginationPage class="c-PostPageList">
    <template>
      <PostCardList
        v-if="pages && pages.length > 0"
        :pages="pages"
        @cardClick="handleCardClick"
      />
    </template>
  </BasePaginationPage>
</template>

<script>
/**
 * * PostPageList
 * * 文章列表页
 */
import PostCardList from '@theme/components/PostCardList'

export default {
  name: 'PostPageList',
  components: {
    PostCardList
  },
  filters: {
    date(val) {
      return new Date(val).toLocaleDateString()
    },
    chnTimeText(val) {
      return `大约${Math.round(val)}分钟`
    }
  },
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {
    pages() {
      return this.$pagination.pages
    }
  },
  watch: {},
  beforeCreate() {},
  created() { },
  mounted() {},
  methods: {
    handleCardClick(path) {
      this.$router.push({ path })
    }
  }
}
</script>

<style lang="scss" scoped>
.c-PostPageList {
}
</style>
