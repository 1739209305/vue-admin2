<template>
  <div class="screenfull">
    <img
      src="../../assets/fullscreen.svg"
      v-if="!isFullscreen"
      alt="fullscreen"
      @click="click"
    />
    <img
      src="../../assets/exit-fullscreen.svg"
      v-else
      alt="exit-fullscreen"
      @click="click"
    />
  </div>
</template>

<script>
// import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    click() {
      if (!screenfull.enabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.screenfull {
  display: flex;
  align-content: center;
  justify-content: center;
  img {
    display: inline-block;
    cursor: pointer;
    fill: #5a5e66;
    width: 20px;
    height: 20px;
    vertical-align: 10px;
  }
}
</style>
