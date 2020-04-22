<template>
  <ul
    v-if="showSideNav"
    class="c-SideNav"
  >
    <li
      v-for="(link,index) in links"
      :key="index"
      class="c-SideNav-item"
      :class="{'is-active':link.slug === curHash}"
      @click="handleSideNavClick(link)"
    >
      <span
        class="c-SideNav-text"
        :title="link.title"
        v-text="link.title"
      />
    </li>
  </ul>
</template>

<script>
/**
 * * SideNav
 * * 侧边导航
 */

// TODO:滚动激活

export default {
  name: 'SideNav',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {
    showSideNav() {
      return this.$frontmatter.layout === 'PostPage'
    },
    links() {
      return this.$page.headers.filter(hd => hd.level === 2)
    },
    curHash() {
      return decodeURIComponent(this.$route.hash).slice(1)
    }
  },
  watch: {},
  beforeCreate() {},
  created() {},

  methods: {
    handleSideNavClick(link) {
      this.$router.push({ path: `#${link.slug}` })
    }
  }
}
</script>

<style lang="stylus" scoped>
.c-SideNav {
  position: fixed;
  top: 100px;
  left: calc(50vw + (950px / 2));
  z-index: 9;
  margin: 0;
  padding: 0;
  height: calc(100vh - 80px - 200px);
  min-height: 200px;
  list-style: none;

  &-item {
    cursor: pointer;

    &.is-active, &:hover {
      color: $accentColor;

      .c-SideNav-text {
        color: $accentColor;
      }
    }

    &::before {
      content: '•';
      margin-right: 0.5em;
    }
  }

  &-text {
    margin: 0;
    font-size: 14px;
    color: $textColor;
    word-break: break-all;
    word-wrap: break-word;
  }
}
</style>
