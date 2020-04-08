<template>
  <div class="c-GlobalLayoutCustom">
    <div
      v-if="showHeader"
      class="c-GlobalLayoutCustom-hd"
    >
      <header>
        <h1>Header</h1>
      </header>
    </div>
    <div class="c-GlobalLayoutCustom-bd">
      <component :is="layout" />
    </div>
    <div
      v-if="showFooter"
      class="c-GlobalLayoutCustom-ft"
    >
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  </div>
</template>

<script>
/**
 * * GlobalLayoutCustom
 * * 自定义GlobalLayout
 * * https://vuepress.vuejs.org/zh/theme/option-api.html#globallayout
 */

import Vue from 'vue'
import { setGlobalInfo } from '@app/util'

import DebugPage from '@theme/layouts/DebugPage'

const NO_HEADER_LAYOUT = ['Home']
const NO_FOOTER_LAYOUT = ['Home']

export default {
  name: 'GlobalLayoutCustom',
  components: {
    DebugPage
  },
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {
    layout () {
      if (this.layoutName === 'DebugPage') return DebugPage

      setGlobalInfo('layout', this.layoutName)
      return Vue.component(this.layoutName)
    },
    layoutName() {
      return this.getLayoutName()
    },
    showHeader() {
      return NO_HEADER_LAYOUT.indexOf(this.layoutName) === -1
    },
    showFooter() {
      return NO_FOOTER_LAYOUT.indexOf(this.layoutName) === -1
    }
  },
  watch: {},
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {
    getLayoutName () {
      if ('debug' in this.$route.query) return 'DebugPage'

      if (!this.$page.path) return 'NotFound'

      return this.$page.frontmatter.layout ? this.$page.frontmatter.layout : 'NotFound'
    }
  }
}
</script>

<style lang="scss" scoped>
.c-GlobalLayoutCustom {
}
</style>
