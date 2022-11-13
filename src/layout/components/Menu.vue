111+
<template>
  <fragment class="menu">
    <template v-for="item in allMenu">
      <el-submenu
        :index="item.link"
        :key="item.id"
        v-if="item.children && item.children.length > 0"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </template>
        <Menu :allMenu="item.children"></Menu>
      </el-submenu>
      <el-menu-item v-else :index="item.link" :key="item.path">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </template>
  </fragment>
</template>

<script>
export default {
  name: 'Menu',
  props: ['allMenu']
}
</script>
