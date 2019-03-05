<template>
<div class="mine">
	<div class="mine_top">
		
		<img src="/static/images/img_avatar_user_default@2x.png"/>
		<span style="display: inline-block;position: absolute;top: 60px;font-size: 16px;color: white;">{{info.name}}</span>
		<span style="display: inline-block;position: absolute;top: 83px;font-size: 12px;color: white;">{{info.phone}}</span>
	</div>
	
	<div class="re_bottom_box1">
			<div class="">
				<div class="box_r1" v-for="n in list">
					
						<p @click="return1(n.path)"><img :src="n.img" style="width: 25px;line-height: 15px;position: relative;top: 5px;"/><span style="margin-left: 15px;">{{n.name}}</span><img src="/static/images/common_ic_arrow_right@2x.png" style="width: 25px;margin-top: 15px;float: right;"/></p>
					
				</div>
				<div style="text-align: center;height:56px;line-height: 56px;color: #EBC86F;" @click="loginout">退出登录</div>
				
			</div>
			</div>
			<foot></foot>
</div>
</template>

<script>
	import foot from './../public/foot'
    import server from './../../server'
    export default {
        name: 'mine',
        data () {
            return {
               	list:[{img:'/static/images/my_ic_shopping@2x.png',name:'购物车',path:'/mine/cart'},{img:'/static/images/my_ic_location@2x.png',name:'收货地址',path:'/goods/shouhuo'},{img:'/static/images/my_ic_order@2x.png',name:'订单管理',path:'/mine/order'},
               	{img:'/static/images/my_ic_collect@2x.png',name:'我的收藏',path:'/mine/minesc'},
//             	{img:'/static/images/my_ic_share@2x.png',name:'分享',path:''},
               	{img:'/static/images/my_ic_about_us@2x.png',name:'关于我们',path:'/mine/aboutus'}
               	],
               	info:''
            }
        },
        components:{
            foot
        },
        methods:{
            get_add:function(){
            	this.$router.push({
            		path:'/goods/add_classfiy'
            	})
            },
            return1:function(x){
            	
            	this.$router.push({
            		path:x
            	})
            },
            loginout:function(){
            	localStorage.removeItem('token')
            	layer.open({
					content: '退出登录',
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
				this.$router.push({
					path:'/index/home'
				})
            }
            
        },
        mounted:function(){
            var _self=this;
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
          server.user_person(_self,{
          	id:'28'
          })
        },
      filters: {
        
      }
    }
</script>

<style>
	.list_bar{
    	position: fixed;
    	right: 13px;
    	z-index: 6666;
    	top: 0;
    	height: 50px;
    	line-height: 50px;
    	color: white;
    	font-size: 16px;
    	
    }
    .mine .re_bottom_box1{
    	width: 100%;
    	background-color: white;
    	/*margin-top: 8px;*/
    	
    }
    .mine .box_r1{
    	
    }
    .mine .box_r1 p{
    	height: 56px;
    	line-height: 56px;
    	color:rgba(102,102,102,1);
    	border-bottom: 1px solid  rgba(239,239,239,1);
    	margin-left: 21px;
    	margin-right: 21px;
    	font-size: 16px;
    }
    .mine_top{
    	height: 160px;
    	width: 100%;
    	background:linear-gradient(270deg,rgba(235,220,165,1) 0%,rgba(235,200,111,1) 100%);
    }
    .mine_top img{
    	width: 72px;
    	margin: 45px 16px 0 16px;
    }
</style>