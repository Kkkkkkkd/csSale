<template>
<div class="mine">
	<div class="mine_top">
		
		<img src="/static/images/img_avatar_user_default@2x.png"/>
		<span style="display: inline-block;position: absolute;top: 60px;font-size: 16px;color: white;">{{info.nick}}</span>
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
               	list:[
//             	{img:'/static/images/my_ic_data@2x.png',name:'营收数据',path:'/mine/yssj'},
               	{img:'/static/images/my_ic_about_us@2x.png',name:'关于我们',path:'/mine/aboutus'},
//             	{img:'/static/images/my_ic_feedback@2x.png',name:'意见反馈',path:'/mine/fk'},
//             	{img:'/static/images/my_ic_grade@2x.png',name:'去评分',path:''},{img:'/static/images/my_ic_share@2x.png',name:'分享',path:''}
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
            	this.$router.push({
            		path:'/loginRegis/login'
            	})
            	this.$store.state.isLogined = false;
            	layer.open({
					content: '退出登录成功',
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
            }
            
        },
        mounted:function(){
            var _self=this;
//          var time =  Date.parse(new Date())
//		          	time = JSON.stringify(time)
//		          	var data = 'id=' + '28'+'|' +'timestamp='+ time.substring(0,10)
          	server.user_person(_self,{
          		id:'28',
          		
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