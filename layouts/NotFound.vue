<template>
  <div class="c-NotFound">
    <h1>404</h1>

    <blockquote>{{ getMsg() }}</blockquote>

    <RouterLink to="/">
      带我回首页
    </RouterLink>
  </div>
</template>

<script>
/**
 * * NotFound
 * * 4040
 */
const msgs = [
  '恭喜你发现新大陆(滑稽.jpg)',
  '你是怎么发现这的???',
  '这是404',
  '貌似你访问了一个错误链接:)'
]
export default {
  name: 'NotFound',
  components: {},
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
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style lang="scss" scoped>
.c-NotFound {
}
</style>
