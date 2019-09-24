import VueRouter from 'vue-router'

import Home from './components/tabber/Home.vue'
import Member from './components/tabber/Member.vue'
import ShopCar from './components/tabber/ShopCar.vue'
import Search from './components/tabber/Search.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/member', component: Member },
        { path: '/shopcar', component: ShopCar },
        { path: '/search', component: Search },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: NewsInfo }
    ],
    linkActiveClass: 'mui-active'
})

export default router