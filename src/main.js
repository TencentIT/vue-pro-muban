import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import types from '@/store/types'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css';
import Toast from 'muse-ui-toast';
import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
import Loading from 'muse-ui-loading';


import { request } from './api'
import { commonObj } from '@/utils'
import URLs from '@/urls'
import '../static/font/iconfont.css'

// import URLs from './url'

Vue.use(MuseUI)
Vue.use(Toast)
Vue.use(Loading);



window.BIObj = Object.assign({}, commonObj)
BIObj.request = request
BIObj.URL = URLs
Vue.BIObj = BIObj


Vue.config.productionTip = false

Toast.config({
  position: 'top',               // 弹出的位置
  time: 2000,                       // 显示的时长
  closeIcon: 'close',               // 关闭的图标
  close: true,                      // 是否显示关闭按钮
  successIcon: 'check_circle',      // 成功信息图标
  infoIcon: 'info',                 // 信息信息图标
  warningIcon: 'priority_high',     // 提醒信息图标
  errorIcon: 'warning'              // 错误信息图标
})

/* eslint-disable no-new */
var vue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


export  {
  router,
  vue
}