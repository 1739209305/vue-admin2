<template>
  <div class="ImageBase64">
    <el-alert title="图片转为base64格式" :closable="false" type="info">
    </el-alert>
    <el-button
      type="primary"
      size="small"
      @click="upload"
      style="margin: 1rem 0.5rem"
      >上传</el-button
    >
    <el-button type="primary" size="small" @click="copy" style="margin: 1rem 0"
      >复制</el-button
    >
    <input
      type="file"
      ref="img_upload"
      @change="readFile"
      style="display: none"
    />
    <br />
    <el-input
      v-model="base64Data"
      ref="textarea"
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 4 }"
    ></el-input>
    <p ref="img_area" v-if="base64Data">
      <img :src="base64Data" />
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      base64Data: ''
    }
  },
  methods: {
    readFile(event) {
      const file = event.target.files[0]
      if (!file.type.includes('image')) {
        this.$message({
          message: '文件格式不符合',
          type: 'warning'
        })
        return
      }
      const render = new FileReader()
      render.readAsDataURL(file)
      render.onload = (e) => {
        this.base64Data = e.target.result
      }
    },
    upload() {
      this.$refs.img_upload.click()
    },
    copy() {
      if (!this.base64Data) {
        return
      }
      this.$refs.textarea.select()
      document.execCommand('Copy')
      this.$message({
        message: '复制成功',
        type: 'success'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.ImageBase64 {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

  img {
    max-width: 100%;
  }
}
</style>
