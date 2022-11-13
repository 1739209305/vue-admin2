<template>
  <div class="countTo">
    <h3>CountTo</h3>
    <el-alert
      title="https://github.com/PanJiaChen/vue-countTo"
      :closable="false"
      type="info"
    >
    </el-alert>

    <el-divider></el-divider>

    <el-row>
      <el-col :span="12" v-for="(item, index) in countToData" :key="index">
        <el-card shadow="hover">
          <countTo
            :startVal="item.startVal"
            :endVal="item.endVal"
            :duration="item.duration"
            :style="{ color: item.color }"
            class="example"
          ></countTo>
        </el-card>
      </el-col>
    </el-row>

    <el-divider></el-divider>

    <div class="container">
      <div class="example-item">
        <code>
          &lt;count-to :startVal=&#x27;2017&#x27; :endVal=&#x27;0&#x27;
          :duration=8000&gt;&lt;/count-to&gt;</code
        >
        <count-to
          ref="example2"
          class="example2"
          :start-val="2017"
          :end-val="0"
          :duration="8000"
        ></count-to>
        <div class="example-btn" @click="start2">start</div>
      </div>

      <el-divider></el-divider>

      <div class="example-item">
        <count-to
          ref="example3"
          class="example3"
          :start-val="_startVal"
          :end-val="_endVal"
          :duration="_duration"
          :decimals="_decimals"
          :separator="_separator"
          :prefix="_prefix"
          :suffix="_suffix"
          :autoplay="false"
        >
        </count-to>
        <div>
          <label class="label" for="startValInput"
            >startVal:
            <input
              type="number"
              v-model.number="setStartVal"
              name="startValInput"
          /></label>
          <label class="label" for="endValInput"
            >endVal:
            <input type="number" v-model.number="setEndVal" name="endVaInput"
          /></label>
          <label class="label" for="durationInput"
            >duration:
            <input
              type="number"
              v-model.number="setDuration"
              name="durationInput"
          /></label>
          <div class="startBtn example-btn" @click="start3">start</div>
          <div class="pause-resume-btn example-btn" @click="pauseResume">
            pause/resume
          </div>
          <br />
          <label class="label" for="decimalsInput"
            >decimals:
            <input
              type="number"
              v-model.number="setDecimals"
              name="decimalsInput"
          /></label>
          <label class="label" for="separatorInput"
            >separator: <input v-model="setSeparator" name="separatorInput"
          /></label>
          <label class="label" for="prefixInput"
            >prefix: <input v-model="setPrefix" name="prefixInput"
          /></label>
          <label class="label" for="suffixInput"
            >suffix: <input v-model="setSuffix" name="suffixInput"
          /></label>
        </div>
        <code
          >&lt;count-to :start-val=&#x27;{{ _startVal }}&#x27; :end-val=&#x27;{{
            _endVal
          }}&#x27; :duration=&#x27;{{ _duration }}&#x27; :decimals=&#x27;{{
            _decimals
          }}&#x27; :separator=&#x27;{{ _separator }}&#x27; :prefix=&#x27;{{
            _prefix
          }}&#x27; :suffix=&#x27;{{ _suffix }}&#x27; :autoplay=false&gt;</code
        >
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  components: { countTo },
  data() {
    return {
      countToData: [],
      setStartVal: 0,
      setEndVal: 2017,
      setDuration: 4000,
      setDecimals: 0,
      setSeparator: ',',
      setSuffix: ' rmb',
      setPrefix: '¥ ',
      startVal1: 0,
      endVal1: 2017
    }
  },
  computed: {
    _startVal() {
      if (this.setStartVal) {
        return this.setStartVal
      } else {
        return 0
      }
    },
    _endVal() {
      if (this.setEndVal) {
        return this.setEndVal
      } else {
        return 0
      }
    },
    _duration() {
      if (this.setDuration) {
        return this.setDuration
      } else {
        return 100
      }
    },
    _decimals() {
      if (this.setDecimals) {
        if (this.setDecimals < 0 || this.setDecimals > 20) {
          alert('digits argument must be between 0 and 20')
          return 0
        }
        return this.setDecimals
      } else {
        return 0
      }
    },
    _separator() {
      return this.setSeparator
    },
    _suffix() {
      return this.setSuffix
    },
    _prefix() {
      return this.setPrefix
    }
  },
  created() {
    for (let index = 0; index < 4; index++) {
      this.countToData.push({
        startVal: 0,
        endVal: Math.random() * 8000,
        duration: Math.random() * 5000,
        color: this.color16()
      })
    }
  },
  methods: {
    color16() {
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      const color = '#' + r.toString(16) + g.toString(16) + b.toString(16)
      return color
    },
    callback() {
      console.log('callback')
    },
    start1() {
      this.$refs.example1.start()
    },
    start2() {
      this.$refs.example2.start()
    },
    start3() {
      this.$refs.example3.start()
    },
    pauseResume() {
      this.$refs.example3.pauseResume()
    }
  }
}
</script>

<style lang="scss">
.countTo {
  .example {
    font-size: 50px;
  }

  code {
    color: #19ad9b;
  }

  .example-btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 500;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1.5;
    padding: 4px 15px;
    font-size: 12px;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
  }

  .example-btn:hover {
    color: #4ab7bd;
    background-color: #fff;
    border-color: #4ab7bd;
  }

  .example1 {
    font-size: 40px;
    color: #30b08f;
    display: block;
    margin: 10px 0;
  }

  .example2 {
    font-size: 40px;
    color: #e65d6e;
    display: block;
    margin: 10px 0;
  }

  .example3 {
    font-size: 50px;
    color: #f6416c;
    display: block;
    margin: 10px 0;
    text-align: center;
    font-size: 80px;
    font-weight: 500;
  }

  .label {
    color: #2f4f4f;
    font-size: 16px;
    display: inline-block;
    margin: 15px 30px 15px 0;
  }

  input {
    position: relative;
    display: inline-block;
    padding: 4px 7px;
    width: 50px;
    height: 28px;
    cursor: text;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .startBtn {
    margin-left: 20px;
    font-size: 20px;
    color: #30b08f;
    background-color: #fff;
  }

  .startBtn:hover {
    background-color: #30b08f;
    color: #fff;
    border-color: #30b08f;
  }

  .pause-resume-btn {
    font-size: 20px;
    color: #e65d6e;
    background-color: #fff;
  }

  .pause-resume-btn:hover {
    background-color: #e65d6e;
    color: #fff;
    border-color: #e65d6e;
  }
}
</style>
