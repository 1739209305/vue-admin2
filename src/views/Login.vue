<template>
  <div class="login">
    <div class="container">
      <div class="login-title">admin_yao管理系统</div>
      <el-form :model="ruleForm" status-icon :rules="rules" class="form">
        <el-form-item prop="userName" ref="ruleForm">
          <el-input
            v-model="ruleForm.userName"
            class="input"
            size="small"
            maxlength="12"
          >
            <template #prepend>
              <i class="el-icon-user"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            class="input"
            size="small"
            maxlength="12"
            type="password"
          >
            <template #prepend>
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            size="small"
            class="login-btn"
            @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
        <div class="login-tips">
          admin_yao是管理员账号，visitor是游客账号，密码是123456
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import { validName } from '@/utils/validate'
import { removeToken } from '@/utils/auth'
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号!'))
      } else if (!validName(value)) {
        callback(new Error('请输入合法的用户名!'))
      } else {
        callback()
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码!'))
      } else if (!validName(value)) {
        callback(new Error('请输入合法的密码!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        userName: 'admin_yao',
        password: '123456'
      },
      rules: {
        userName: [{ validator: validateUsername, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }]
      }
    }
  },
  created() {
    removeToken()
    this.$store.commit('user/SET_TOKEN', '')
  },
  methods: {
    async submitForm(formName) {
      if (this.$refs[formName].validate()) {
        const response = await this.$store.dispatch('user/login', this.ruleForm)
        console.log(response)
        if (response.code === 200) {
          router.push({
            path: '/layout/dashboard'
          })
          await this.$store.dispatch('user/getInfo')
        }
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('../assets/login_back.jpg');
  background-size: 100%;

  .container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.3);

    .login-title {
      line-height: 50px;
      width: 100%;
      color: white;
      text-align: center;
      border-bottom: 2px solid #ddd;
    }

    .form {
      padding: 30px;

      .login-btn {
        width: 100%;
      }
    }

    .login-tips {
      color: #fff;
      font-size: 12px;
      text-align: left;
      margin-top: -8px;
    }
  }
}
</style>
