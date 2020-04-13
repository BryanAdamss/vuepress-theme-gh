<template>
  <div class="c-PostCard">
    <div class="c-PostCard-hd">
      <h2>{{ title }}</h2>
    </div>
    <div class="c-PostCard-bd">
      <p>{{ summary }}</p>
    </div>
    <div class="c-PostCard-ft">
      <slot name="ft" />
    </div>
  </div>
</template>

<script>
/**
 * * PostCard
 * * 文章卡片
 */

export default {
  name: 'PostCard',
  components: {},
  filters: {
    date(val) {
      return new Date(val).toLocaleDateString()
    },
    chnTimeText(val) {
      return `大约${Math.round(val)}分钟`
    }
  },
  mixins: [],
  props: {
    title: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    }
  },
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

<style lang="stylus" scoped>
.c-PostCard {
}
</style>
