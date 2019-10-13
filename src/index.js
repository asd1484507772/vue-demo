//入口文件
import Vue from 'vue'
import app from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'

Vue.use(Vuex)

var cart = JSON.parse(localStorage.getItem('cart') || '[]')

const store = new Vuex.Store({
    state: { //this.$store.state.***
        cart: cart
    },
    mutations: { //this.$store.commit('方法名称','按需传递唯一的参数')
        addToCar(state, goodsinfo) {

            var flag = false

            state.cart.forEach(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })

            if (!flag) {
                state.cart.push(goodsinfo)
            }

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        updateGoodsInfo(state, goodsinfo) {
            //修改购物车中商品数量值
            state.cart.forEach(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeFormCar(state, id) {
            state.cart.forEach((item, i) => {
                if (item.id == id) {
                    state.cart.splice(i, 1)
                    return true
                }
            })

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        updateGoodsSelected(state, info) {
            state.cart.forEach(item => {
                if (item.id == info.id) {
                    item.selected = info.selected
                }
            })
            // 把最新的 所有购物车商品的状态保存到 store 中去
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    },
    getters: { //this.$store.getters.***
        getAllCount(state) {
            var c = 0;
            state.cart.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsCount(state) {
            var o = {}
            state.cart.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        getGoodsSelected(state) {
            var o = {}
            state.cart.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state) {
            var o = {
                count: 0,
                amount: 0
            }
            state.cart.forEach(item => {
                if (item.selected) {
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
        }
    }
})
//按需导入

// import { Header, Swipe, SwipeItem, Button, Navbar, TabItem, TabContainer, TabContainerItem, Cell, Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.component(Navbar.name, Navbar)
// Vue.component(TabItem.name, TabItem)
// Vue.component(TabContainer.name, TabContainer)
// Vue.component(TabContainerItem.name, TabContainerItem)
// Vue.component(Cell.name, Cell)
// Vue.use(Lazyload)

//全部导入
import Mint from 'mint-ui';
Vue.use(Mint);

import 'mint-ui/lib/style.css'
import './lib/mui-master/dist/css/mui.css'
import './lib/mui-master/examples/hello-mui/css/icons-extra.css'



import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true //表单格式的储存形式

import router from './router.js'

var vm = new Vue({
    el: '#app',
    data: {

    },
    render: c => c(app),
    router,
    store
})