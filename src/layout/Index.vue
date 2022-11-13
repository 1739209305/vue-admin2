<template>
  <div class="layout">
    <el-container
      class="layout-container"
      style="height: 100%; border: 1px solid #eee"
    >
      <el-aside width="initial">
        <el-scrollbar>
          <NavBar></NavBar>
        </el-scrollbar>
      </el-aside>

      <el-container>
        <el-header>
          <Header></Header>
        </el-header>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'
import Header from './components/Header.vue'
export default {
  components: {
    NavBar,
    Header
  }
}
</script>

<style scoped lang="scss">
.layout {
  height: 100vh;
  width: 100vw;
}
.layout-container .el-header {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
</style>
