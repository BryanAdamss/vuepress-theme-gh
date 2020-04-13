<template>
  <div class="c-DebugPage">
    <div class="c-DebugPage-bd">
      <Container>
        <template>
          <LinkList />
        </template>
      </Container>
    </div>
  </div>
</template>

<script>
/**
 * * DebugPage
 * * 调试页
 */

import LinkList from '@theme/components/LinkList'

export default {
  name: 'DebugPage',
  components: {
    LinkList
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
.c-DebugPage {
}
</style>
