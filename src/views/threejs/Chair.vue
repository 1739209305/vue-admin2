<template>
  <div class="chair">
    <el-alert :closable="false" title="threejs" type="info"> </el-alert>
    <el-alert
      :closable="false"
      title="拥有轨道控制器，鼠标可进行操作"
      type="info"
    >
    </el-alert>
    <el-alert
      :closable="false"
      title="http://localhost:3333/(目前的ip在3333端口还可以多查看几个案例)"
      type="info"
    >
    </el-alert>
    <iframe :src="url" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: ''
    }
  },
  mounted() {
    this.url =
      window.location.protocol +
      '//' +
      window.location.hostname +
      ':3333' +
      '/#/chair'
  }
}
</script>

<style lang="scss" scoped>
.chair {
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: calc(100% - 5rem);
  }
}
</style>
