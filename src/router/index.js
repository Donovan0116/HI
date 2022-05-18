import Vue from 'vue'
import VueRouter from 'vue-router'
import OrderManage from "@/views/OrderManage";
import Index from "@/views/Index";
import BidInfo from "@/views/BidInfo";
import GetGoods from "@/views/GetGoods";

Vue.use(VueRouter)

const routes = [
    // {
    //     path: '/',
    //     name: 'Index',
    //     component: Index
    // },
    {
        path: '/',
        name: 'OrderManage',
        component: OrderManage
    }, {
        path: '/BidInfo',
        name: 'BidInfo',
        component: BidInfo
    }, {
        path: '/GetGoods',
        name: 'GetGoods',
        component: GetGoods
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
