<template>
  <div class="text_hover">
    <el-alert
      title="参考：https://codepen.io/colloque/pen/poOLPg"
      :closable="false"
      type="info"
    >
    </el-alert>
    <el-alert title="Text Hover" :closable="false" type="info"> </el-alert>
    <div class="wrapper">
      <h1><a href="#" class="effect-underline">underline</a></h1>
      <h1><a href="#" class="effect-box">box</a></h1>
      <h1><a href="#" class="effect-shine">shine</a></h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: block;
  padding-left: 2rem;
  h1 {
    margin: 0;
    a {
      color: black;
      text-decoration: none;
      display: inline-block;
      font-size: 1rem;
      position: relative;
    }
  }
  /*effect-underline*/
  a.effect-underline:after {
    content: '';
    position: absolute;
    left: 0;
    display: inline-block;
    height: 1em;
    width: 100%;
    border-bottom: 1px solid;
    margin-top: 10px;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
  }

  a.effect-underline:hover:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  /*effect-box*/
  a.effect-box:after,
  a.effect-box:before {
    content: '';
    position: absolute;
    left: 0;
    display: inline-block;
    height: 1em;
    width: 100%;
    margin-top: 0;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
  }

  a.effect-box:before {
    border-left: 1px solid;
    border-right: 1px solid;
    -webkit-transform: scale(1, 0);
    transform: scale(1, 0);
  }

  a.effect-box:after {
    border-bottom: 1px solid;
    border-top: 1px solid;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
  }

  a.effect-box:hover:after,
  a.effect-box:hover:before {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  /* effect-shine */
  a.effect-shine:hover {
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    -webkit-mask-size: 200%;
    animation: shine 2s infinite;
  }

  @-webkit-keyframes shine {
    from {
      -webkit-mask-position: 150%;
    }

    to {
      -webkit-mask-position: -50%;
    }
  }
}
</style>
