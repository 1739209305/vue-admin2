<template>
  <div class="kinesis">
    <h3>kinesis</h3>
    <el-alert
      title="https://github.com/Aminerman/vue-kinesis"
      :closable="false"
      type="info"
    ></el-alert>
    <el-divider></el-divider>

    <kinesis-container class="hover">
      可以把鼠标放在文字上看看效果哦
      <kinesis-element :strength="10"> 你相不相信 </kinesis-element>
      <kinesis-element :strength="20"> 我会动! </kinesis-element>
    </kinesis-container>
    <el-divider></el-divider>

    <span class="tip">可以把鼠标放在图片上看看效果哦</span>
    <kinesis-container>
      <kinesis-element
        tag="img"
        :src="spider"
        :strength="-10"
        type="rotate"
        transformOrigin="50% 600%"
        axis="x"
      />
      <kinesis-element
        tag="img"
        :src="ladybug"
        :strength="10"
        type="rotate"
        transformOrigin="50% 600%"
        axis="x"
      />
      <kinesis-element
        tag="img"
        :src="fennec"
        :strength="10"
        transformOrigin="50% 600%"
        type="depth"
      />
    </kinesis-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fennec: require('@/assets/fennec.61f62315.jpg'),
      ladybug: require('@/assets/sheep.20575203.jpg'),
      spider: require('@/assets/cow.7fbfdfea.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.kinesis {
  .hover,
  .tip {
    cursor: pointer;
    color: #19ad9b;
    font-size: 1rem;
    line-height: 2rem;
  }
  img {
    width: 10rem;
    height: 10rem;
    position: absolute;
    left: calc(50% - 10rem);
    border-radius: 5%;
  }
}
</style>
