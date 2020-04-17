<template>
  <div class="c-PostCard">
    <div class="c-PostCard-hd">
      <div class="c-PostCard-cover">
        <div
          v-if="fileName"
          class="c-Cover"
          :style="{'background-image':`url(${coverURL})`}"
        >
          <!-- <div
            class="c-Cover-bd"
            :style="{'background-image':`url(${coverURL})`}"
          /> -->
        </div>
      </div>
      <div class="c-PostCard-summary">
        <p class="c-Summary">
          {{ summary }}
        </p>
      </div>
    </div>
    <div class="c-PostCard-bd">
      <h2 class="c-PostCard-title">
        {{ title }}
      </h2>
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
    },
    fileName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    coverURL() {
      return this.$withBase(`/${this.fileName}-cover.png`)
    }
  },
  watch: {},
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: { }
}
</script>

<style lang="stylus" scoped>
.c-PostCard {
  width: 270px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 4px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 3px 5px 10px 0 rgba(0, 0, 0, 0.2);

    .c-Cover {
      transform: scale(1.1);
      filter: blur(3px);
    }

    .c-PostCard-summary {
      opacity: 1;
    }

    .c-Summary {
      transform: translate(0);
    }
  }

  &-hd {
    height: 250px;
    overflow: hidden;
    position: relative;
    border-radius: 4px 4px 0 0;
  }

  &-bd {
    padding: 20px;
  }

  &-ft {
    padding: 20px;
  }

  &-cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: #eee;
  }

  &-summary {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.3s;
    padding: 20px 30px;
  }

  &-title {
    font-size: 20px;
    margin: 0;
  }
}

.c-Cover {
  height: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 0.5s ease;
}

.c-Summary {
  margin: 0;
  color: #fff;
  font-size: 14px;
  transform: translateY(10px);
  transition: transform 0.3s;
  word-wrap: break-word;
  word-break: break-all;
}
</style>
