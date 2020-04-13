
<script>
/**
 * * MasterTitle
 * * 主标题
 */

export default {
  name: 'MasterTitle',
  functional: true,
  components: {},
  mixins: [],
  props: {
    text: {
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
  methods: {},
  render(h, { data, props }) {
    const dataObj = {
      ...data,
      class: ['c-MasterTitle']
    }

    return h('h1', dataObj, props.text)
  }
}
</script>

<style lang="stylus" scoped>
.c-MasterTitle {
  font-size: 24px;
  color: #232323;
}
</style>
