<template>
  <div class="c-Container">
    <div class="c-Container-bd">
      <slot />
    </div>
  </div>
</template>

<script>
/**
 * * Container
 */

export default {
  name: 'Container',
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
  methods: {}
}
</script>

<style lang="stylus" scoped>
.c-Container {
  max-width: 950px;
  margin: 0 auto;
  padding: 10px 40px;
}
</style>
