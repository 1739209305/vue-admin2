<template>
  <div class="navbar">
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="defaultActive"
      :router="true"
      :collapse="$store.state.settings.isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <Menu :allMenu="nav"></Menu>
    </el-menu>
  </div>
</template>

<script>
import Menu from './Menu.vue'
export default {
  data() {
    return {
      nav: this.$store.state.authRouter.nav || [],
      defaultActive: this.$route.path
    }
  },
  components: {
    Menu
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  background: #545c64;

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    height: 100%;
  }

  .el-menu {
    border-right: none;
  }
}

::v-deep .el-menu-item:hover,
::v-deep .el-submenu__title:hover {
  background-color: rgb(38, 52, 69) !important;
}
</style>
