<template>
  <div class="c-PaginationCustom">
    <!-- <Pagination /> -->

    <component
      :is="paginationComponent"
      v-if=" paginationComponent"
    />
  </div>
</template>

<script>
/**
 * * PaginationCustom
 * * 自定义分页器
 */

import Vue from 'vue'
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'

export default {
  name: 'PaginationCustom',
  components: {
    Pagination
  },
  mixins: [],
  props: {},
  data() {
    return {
      paginationComponent: null
    }
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {
    this.paginationComponent = this.getPaginationComponent()
  },
  mounted() {},
  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }

      return Vue.component(n) || Pagination
    }

  }
}
</script>

<style lang="stylus" scoped>
.c-PaginationCustom {
  text-align: center;

  /deep/ .pagination {
    a {
      border: none;
      background: none;
      color: $subTextColor;
    }

    .page-item.active {
      a {
        color: $accentColor;
      }
    }

    .disabled {
      a {
        display: none;
      }
    }

    .page-item.disabled {
      a {
        display: block;
      }
    }
  }
}
</style>
