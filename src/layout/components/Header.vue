<template>
  <div class="layout-header">
    <div class="layout-header-left">
      <i
        class="el-icon-s-fold"
        @click="changeCollapseState"
        v-if="!$store.state.settings.isCollapse"
      ></i>
      <i @click="changeCollapseState" class="el-icon-s-unfold" v-else></i>
      <!-- <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb> -->
    </div>
    <div class="layout-header-right">
      <!-- <screenfull></screenfull> -->
      <el-dropdown trigger="click" class="avatar">
        <span class="el-dropdown-link">
          <el-avatar :src="avatarUrl"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">Github</el-dropdown-item>
          <el-dropdown-item command="e" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import screenfull from '@/components/Screenfull/index'
export default {
  data() {
    return {
      avatarUrl: require('@/assets/avater.png')
    }
  },
  components: {
    screenfull
  },
  methods: {
    changeCollapseState() {
      this.$store.commit(
        'settings/CHANGE_COLLAPSE',
        !this.$store.state.settings.isCollapse
      )
    }
  }
}
</script>

<style scoped lang="scss">
.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  height: 64px;
  transition: all 0.2s ease-in-out;
  width: 100%;
  z-index: 11;
  color: #606060;
  font-size: 1.5rem;

  .layout-header-left {
    display: flex;
    align-items: center;
  }
  .layout-header-right {
    display: flex;
    align-content: center;
    justify-content: center;
    .el-dropdown-link {
      cursor: pointer;
    }
  }

  i {
    cursor: pointer;
  }
}
</style>
