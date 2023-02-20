<template>
  <div>
    <el-alert
      style="margin-bottom: 1rem"
      title="https://github.com/hinesboy/mavonEditor"
      type="info"
    ></el-alert>
    <mavon-editor v-model="context" :toolbars="markdownOption" />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      context: `# 问题：
vue项目中使用threejs无语法提示问题

# 解决方案
安装three.js的typescript语法(.d.ts)的依赖

> npm install --save-dev @types/three

再次重新引入即可`, //输入的数据
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        mark: true, // 标记
        superscript: true, // 上角标
        quote: true, // 引用
        ol: true, // 有序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        help: true, // 帮助
        code: true, // code
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        undo: true, // 上一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        navigation: true // 导航目录
      }
    }
  },
  methods: {
    getHtml() {
      console.log(this.context)
    }
  }
}
</script>

<style lang="scss">
::v-deep .markdown-body * {
  font-size: 10px;
}
</style>
