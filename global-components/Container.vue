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

<style lang="scss" scoped>
.c-Container {
  max-width: 740px;
  margin: 0 auto;
  padding: 32px 40px;
}
</style>
