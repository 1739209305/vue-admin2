<template>
  <div class="text_animation">
    <div class="text_div"><TextHover></TextHover></div>
  </div>
</template>

<script>
import TextHover from './textHover.vue'
export default {
  components: {
    TextHover
  }
}
</script>

<style lang="scss" scoped>
.text_animation {
  .text_div {
    width: 100%;
  }

  ::v-deep .el-card__body,
  .el-main {
    padding: 0;
  }
}
</style>
