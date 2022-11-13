<template>
  <div class="guide">
    <el-alert
      title="官网: https://github.com/kamranahmedse/driver.js"
      :closable="false"
      type="info"
    >
    </el-alert>
    <el-alert title="用于给用户指导" :closable="false" type="info"> </el-alert>

    <el-button
      style="margin-top: 1rem"
      icon="el-icon-question"
      type="primary"
      @click.prevent.stop="guide"
      size="mini"
    >
      开始指导
    </el-button>
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'
export default {
  name: 'Guide',
  data() {
    return {}
  },
  mounted() {
    this.driver = new Driver()
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>

<style scoped lang="scss"></style>
