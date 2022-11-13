<template>
  <div class="throttle">
    <el-alert
      title="https://github.com/lodash/lodash"
      :closable="false"
      type="info"
    >
    </el-alert>
    <el-alert
      title="节流：触发高频事件后,n秒内只执行一次."
      :closable="false"
      type="info"
    >
    </el-alert>
    <el-alert title="此案例3s内会进行一次搜索." :closable="false" type="info">
    </el-alert>
    <div style="display: flex; align-items: center">
      <el-input
        style="margin-top: 1rem"
        placeholder="请输入姓名去过滤"
        v-model="input"
        clearable
      >
      </el-input>
      <el-button type="primary" size="small" @click="search">搜索</el-button>
    </div>
    <el-table style="margin-top: 1rem" :data="tableData" v-loading="loading">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import throttle from 'lodash.throttle'
export default {
  data() {
    return {
      input: '',
      loading: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '张三',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '李四',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王五',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-01',
          name: '陈皮',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '张思',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-01',
          name: '户籍',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      tableDataPre: []
    }
  },
  mounted() {
    this.tableDataPre = JSON.parse(JSON.stringify(this.tableData))
  },
  methods: {
    search: throttle(function () {
      this.loading = true
      setTimeout(() => {
        this.loading = true
        if (!this.input) {
          this.tableData = this.tableDataPre
        }
        this.tableData = this.tableDataPre.filter((el) =>
          el.name.includes(this.input)
        )
        this.loading = false
      }, 1000)
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.throttle {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  button {
    margin: 15px 15px 0 15px;
  }
}
</style>
