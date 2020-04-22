<template>
  <header class="c-Header">
    <div class="c-Header-sub">
      <div class="c-Logo">
        <RouterLink
          :to="{path:'/'}"
          tag="h1"
          class="c-Logo-text"
        >
          VuePress
        </RouterLink>
      </div>
    </div>
    <div class="c-Header-main">
      <div class="c-Nav">
        <div class="c-Nav-main">
          <ul class="c-NavLinks">
            <li
              v-for="nav in navs"
              :key="nav.text"
              class="c-NavLinks-item"
            >
              <RouterLink
                :to="{path:nav.link}"
                exact
                class="c-NavLinks-link"
              >
                {{ nav.text }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="c-Nav-sub">
          <SearchBox />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
/**
 * * Header
 */

import SearchBox from '@SearchBox'

export default {
  name: 'Header',
  components: {
    SearchBox
  },
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {
    navs() {
      return this.$themeConfig.nav
    }
  },
  watch: {

  },
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
.c-Header {
  display: flex;
  align-items: center;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  line-height: 80px;

  &-main {
    flex: 1 1 auto;
  }

  &-sub {
    flex: 0 0 auto;
  }
}

.c-Nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &-main {
    + .c-Nav-sub {
      margin-left: 10px;
    }
  }
}

.c-NavLinks {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  &-item {
    margin-left: 10px;
    margin-right: 10px;
  }

  &-link {
    color: $textColor;
    font-size: 14px;
  }
}

.c-Logo {
  &-text {
    margin: 0;
  }
}
</style>
