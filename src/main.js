import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
Vue.use(ElementUI)
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
