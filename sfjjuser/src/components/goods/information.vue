<template>
<div class="information">
	<headCom></headCom>
	<img :src="info.img" style="width: 100%;"/>
	<div class="" style="background-color: white;width: 100%;">
		<div class=""style="width: 95%;margin: auto;margin-top: 12px;">
			<p style="font-size: 18px;">{{info.title}} </p>
			<p style="font-size: 16px;color: #999999;margin-top: 8px;">{{info.dateline}}</p>
			<div style="font-size: 14px;line-height:22px;margin-top: 24px;color: #666666;"class="info12">
				
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import headCom from './../public/headCom'
    import server from './../../server'
    export default {
        name: 'information',
        data () {
            return {
               info:'',
            }
        },
        components:{
            headCom
        },
        methods:{
            
        },
        mounted:function(){
            var _self=this;
            //系统公告请求
             //修改title
        this.$store.commit('changetitle', '评测详情');
        //修改头部返回箭头
        this.$store.commit('changeBack', true);
         server.article_info(_self,{
         	id:this.$route.query.id
         })
        },
      filters: {
        
      }
    }
</script>

<style>
	
    .information{
    	width: 100%;
    	background-color: white;
    	border-bottom: 1px solid gainsboro;
    	height: 100%;
    }
</style>