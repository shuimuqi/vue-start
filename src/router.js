import VueRouter from 'vue-router'
import HomeComponent from './components/banner/HomeComponent.vue';
import MemberComponent from './components/banner/MemberComponent.vue';
import ShopComponent from './components/banner/ShopComponent.vue';
import SearchComponent from './components/banner/SearchComponent.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/home',component:HomeComponent},
    {path:'/member',component:MemberComponent},
    {path:'/shopcar',component:ShopComponent},
    {path:'/search',component:SearchComponent},
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router