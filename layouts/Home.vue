<template>
  <div class="c-Home">
    <div class="c-Home-bd">
      <MasterTitle
        :text="$site.title"
        class="u-textC"
      />

      <div class="c-MasterNav">
        <div
          v-for="nav in $page.$mergedThemeConfig.nav"
          :key="nav.link"
          class="c-MasterNav-item"
        >
          <RouterLink :to="nav.link">
            {{ nav.text }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * * Home
 * * 首页
 */

import MasterTitle from '@theme/components/MasterTitle'

export default {
  name: 'Home',
  components: {
    MasterTitle
  },
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
  methods: {}
}
</script>

<style lang="stylus" scoped>
.c-Home {
  &-bd {
  }
}

.c-Title {
  font-size: 24px;
  margin: 0;
}
</style>
