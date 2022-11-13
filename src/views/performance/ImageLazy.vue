<template>
  <div class="imageLazy">
    <el-alert
      title="https://github.com/hilongjw/vue-lazyload"
      :closable="false"
      type="info"
    >
    </el-alert>
    <div v-lazy-container="{ selector: 'img' }">
      <img
        style="display: block"
        :data-src="item"
        v-for="(item, index) in data"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png'),
        require('@/assets/avater.png')
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.imageLazy {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
