<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList" :key="item.url">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
        <h1>home</h1>
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return {
            lunboList:[]
        }
    },
    created(){
        this.getLunBoTu();
    },
    methods:{
        getLunBoTu(){
            this.$http.get('http://vue.studyit.io/api/getlunbo').then(result=>{
             //   console.log(result.body);
             if(result.body.status ===0){
                  this.lunboList=result.body.messages;
             }else{
                 Toast('fail');
             }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height:200px;
        .mint-swipe-item{
           &:nth-child(1){
               background-color:red;
           }
           &:nth-child(2){
               background-color:green;
           }
           &:nth-child(3){
               background-color:blue;
           }
           img{
               width:100%;
               height:100%;
           }     
            
        }
    }
</style>
