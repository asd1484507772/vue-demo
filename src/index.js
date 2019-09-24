//入口文件
import Vue from 'vue'
import app from './App.vue'

import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

import 'mint-ui/lib/style.css'
import './lib/mui-master/dist/css/mui.css'
import './lib/mui-master/examples/hello-mui/css/icons-extra.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true;

import router from './router.js'

var vm = new Vue({
    el: '#app',
    data: {

    },
    render: c => c(app),
    router
})