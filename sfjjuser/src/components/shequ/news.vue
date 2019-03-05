<template>
<div class="news">
	<headCom></headCom>
	<div class="news_box" v-for="n in info.list">
		<div class="" style="padding: 10px;">
			<p style="font-size: 18px;">{{n.title}}</p>
			<p style="font-size: 11px; color: #999999;margin-top: 8px;">{{n.time}}</p>
			<p style="color: #666666;margin-top: 8px;">{{n.content}}</p>
		</div>
	</div>
</div>
</template>

<script>
	import headCom from './../public/headCom'
    import server from './../../server'
    export default {
        name: 'news',
        data () {
            return {
               info:''
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
        this.$store.commit('changetitle', '消息通知');
        //修改头部返回箭头
        this.$store.commit('changeBack', true);
         if(localStorage.getItem('token') == null){
          		layer.open({
					content: '未登录',
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
				_self.$router.push({
					path:'/loginRegis/login'
				})
         }	
         server.notice_list(_self)
        },
      filters: {
        
      }
    }
</script>

<style>
	
    .news_box{
    	width: 100%;
    	background-color: white;
    	border-bottom: 1px solid gainsboro;
    }
</style>