<template>
  <div>
    <el-alert
      v-for="(w, index) in websiteList"
      :key="index"
      :title="w.type"
      type="info"
      :closable="false"
    >
      <span v-for="(l, index2) in w.list" :key="index2"
        ><p>{{ l.description }}</p>
        <a target="_blank" :href="l.url">{{ l.url }}</a></span
      >
      <el-divider></el-divider>
    </el-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      websiteList: [
        {
          type: 'CDN库',
          list: [
            {
              description: 'BootCDN',
              url: 'https://www.bootcdn.cn/'
            }
          ]
        },
        {
          type: 'UI库',
          list: [
            {
              description: 'Element UI',
              url: 'https://element.eleme.io/'
            }
          ]
        },
        {
          type: 'threejs',
          list: [
            {
              description: 'threejs官网',
              url: 'https://threejs.org/'
            },
            {
              description: '3D模型',
              url: 'https://polyhaven.com/'
            },
            {
              description: '3D模型',
              url: 'https://www.poliigon.com/'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #909399;
}
</style>
