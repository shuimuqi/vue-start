// 入口文件入扣文件
import Vue from 'vue';
import app from './App.vue'
import {Header} from 'mint-ui'
Vue.component(Header.name,Header);
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
var vm=new Vue({
    el:'#app',
    data:{

    },
    render:c=>c(app)
})