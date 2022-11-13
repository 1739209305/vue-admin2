<template>
  <div>
    <el-alert
      style="margin-bottom: 1rem"
      title="https://github.com/surmon-china/vue-quill-editor"
      :closable="false"
      type="info"
    ></el-alert>
    <quillEditor
      v-model="content"
      @change="onEditorChange($event)"
    ></quillEditor>
  </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      content: `<h1>Welcome to vue-quill-editor!</h1><p>You can edit it randomly</p> Welcome to vue-quill-editor!
You can edit it randomly`
    }
  },
  methods: {
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    }
  }
}
</script>
