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
          type: 'CSDN博文(日常写的小博文哈哈哈！！！技术分享了！！！)',
          list: [
            {
              url: 'https://blog.csdn.net/weixin_45044818?type=blog'
            }
          ]
        },
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
          type: '图标库',
          list: [
            {
              url: 'https://www.iconfont.cn/plus'
            }
          ]
        },
        {
          type: '图片压缩',
          list: [
            {
              url: 'https://caesium.app/'
            }
          ]
        },
        {
          type: '在线工具',
          list: [
            {
              url: 'https://tool.lu/'
            }
          ]
        },
        {
          type: 'UI库',
          list: [
            {
              description: 'Element UI',
              url: 'https://element.eleme.io/'
            },
            {
              description: 'NG-ZORRO',
              url: 'https://ng-zorro.gitee.io/components/overview/zh'
            }
          ]
        },
        {
          type: 'Threejs',
          list: [
            {
              description: 'Threejs官网',
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
