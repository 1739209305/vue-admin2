import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Fragment from 'vue-fragment'
import ElementUI from 'element-ui'
import VueKinesis from 'vue-kinesis'
import VueLazyload from 'vue-lazyload'
import mavonEditor from 'mavon-editor'
import _ from 'lodash'
import { routerBeforeEach } from './router/router'

import 'element-ui/lib/theme-chalk/index.css'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false

const { mockXHR } = require('../mock/mock')
mockXHR()

Vue.prototype._ = _

Vue.use(ElementUI)
Vue.use(Fragment.Plugin)
Vue.use(VueKinesis)
Vue.use(VueLazyload)
Vue.use(mavonEditor)

routerBeforeEach(router, store)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
