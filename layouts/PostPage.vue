<template>
  <div class="c-PostPage">
    <div class="c-PostPage-main">
      <Container>
        <template>
          <Post />
        </template>
      </Container>
    </div>
  </div>
</template>

<script>
/**
 * * PostPage
 * * 文章页
 */

import Post from '@theme/components/Post'

export default {
  name: 'PostPage',
  components: {
    Post
  },
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {

  },
  watch: {},
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
.c-PostPage {
}
</style>
