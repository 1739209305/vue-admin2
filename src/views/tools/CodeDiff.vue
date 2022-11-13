<template>
  <div>
    <el-alert
      style="margin-bottom: 1rem"
      title="https://github.com/surmon-china/vue-quill-editor"
      :closable="false"
      type="info"
    ></el-alert>
    <div class="border b-radius-4" style="padding: 6px">
      <el-form>
        <el-row v-if="showConfig" :gutter="10" style="margin-bottom: 2px">
          <el-col :span="12">
            <el-form-item>
              <el-input
                v-model="oldStr"
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 4 }"
                placeholder="请输入旧数据"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item>
              <el-input
                v-model="newStr"
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 4 }"
                placeholder="请输入新数据"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row
          :gutter="10"
          class="border b-radius-4"
          style="padding: 0 6px; margin: 0 2px"
        >
          <el-col :span="8">
            <el-form-item label="展示效果：">
              <el-switch
                v-model="fotmat"
                active-text="line-by-line"
                inactive-text="side-by-side"
              ></el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item>
              <el-button
                size="mini"
                type="text"
                @click="handleClearLocalStorage"
                style="margin-left: 10px"
                >清除</el-button
              >
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item>
              <el-button
                size="mini"
                type="text"
                @click="showConfig = !showConfig"
                style="margin-left: 10px"
                >隐藏上面输入框</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <code-diff
      :old-string="formatOldStr"
      :new-string="formatNewStr"
      :context="context"
      :output-format="outputFormat"
      :drawFileList="drawFileList"
      :renderNothingWhenEmpty="renderNothingWhenEmpty"
      :diffStyle="diffStyle"
      :isShowNoChange="isShowNoChange"
    />
  </div>
</template>

<script>
import CodeDiff from 'vue-code-diff'

export default {
  name: 'App',
  components: {
    CodeDiff
  },
  data() {
    return {
      showConfig: true,
      oldStr: `export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach((v) => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

export function dataToTree(parents, children) {
  parents.map((p) => {
    children.map((c, index) => {
      if (c.pid === p.id) {
        let _c = JSON.parse(JSON.stringify(children))
        _c.slice(index, 1)

        dataToTree([c], _c)

        if (p.children) {
          p.children.push(c)
        } else {
          p.children = [c]
        }
      }
    })
  })
  return parents
}
`,
      newStr: `export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split(',')
  searchArr.forEach((v) => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

export function dataToTree2(parents, children) {
  parents.map((p) => {
    children.map((c, index) => {
      if (c.pid === p.id) {
        let _c = JSON.parse(JSON.stringify(children))
        _c.slice(index, 1)

        dataToTree([c], _c)

        if (p.children) {
          p.children.push(c)
        } else {
          p.children = [c]
        }
      }
    })
  })
  return parents
}
`,
      fotmat: false,
      context: 10000,
      diffStyle: 'word',
      isShowNoChange: true,
      drawFileList: false,
      renderNothingWhenEmpty: false,
      changeLineChar: '且'
    }
  },
  computed: {
    outputFormat() {
      return this.fotmat ? 'line-by-line' : 'side-by-side'
    },
    formatOldStr() {
      let newValue = ''
      if (this.changeLineChar !== null && this.changeLineChar !== '') {
        for (let cellChar of this.oldStr) {
          newValue = newValue + cellChar
          if (cellChar === this.changeLineChar) {
            newValue = newValue + '\n'
          }
        }
        return newValue
      } else {
        return this.oldStr
      }
    },
    formatNewStr() {
      let newValue = ''
      if (this.changeLineChar !== null && this.changeLineChar !== '') {
        for (let cellChar of this.newStr) {
          newValue = newValue + cellChar
          if (cellChar === this.changeLineChar) {
            newValue = newValue + '\n'
          }
        }
        return newValue
      } else {
        return this.newStr
      }
    }
  },
  watch: {
    oldStr(v) {
      localStorage.setItem('oldStr', v)
    },
    newStr(v) {
      localStorage.setItem('newStr', v)
    }
  },
  methods: {
    handleClearLocalStorage(e) {
      e.stopPropagation()
      this.newStr = ''
      this.oldStr = ''
      localStorage.setItem('newStr', '')
      localStorage.setItem('oldStr', '')
    },
    descInput() {}
  }
}
</script>
<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 2px !important;
}

.title {
  padding: 4px 0 4px 0;
  font-size: 24px;
  font-weight: 700;
  color: cornflowerblue;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  text-align: center;
}
</style>
