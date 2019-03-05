<template>
<div class="youhui">
	<headCom></headCom>
	<div class="yhq" v-for="n in info.list">
		<div class="div_b1">
			<p style="margin-top: 18px;" >{{n.price}} <span style="font-size: 16px;">元</span></p>
			<!--<p style="font-size: 11px;color: #999999;">消费满10元可用</p>-->
		</div>
		<div style="margin-left: 30px;">
			<p style="color: #999999;font-size: 16px;margin-top: 27px;">
				{{n.name}}
			</p>
			<p style="color: #999999;">2999/12/31到期</p>
		</div>
		<div class="use_box">
			去使用
		</div>
	</div>
</div>
</template>

<script>
	import headCom from './../public/headCom'
    import server from './../../server'
    export default {
        name: 'youhui',
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
        this.$store.commit('changetitle', '优惠券');
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
         server.coupon_list(_self)
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
    .yhq{
    	width: 95%;
    	background-color: white;
    	margin: auto;
    	height: 92px;
    	margin-top: 8px;
    	border-radius:8px;
    	display: flex;
    }
    .yhq .div_b1{
    	text-align: center;
    	/*width: 30%*/
    }
    .yhq .div_b1 p{
    	font-size:40px;
		font-family:PingFangSC-Semibold;
		font-weight:600;
		color:#EBC86F;
		/*line-height:40px;*/
    }
    .use_box{
    	background:#EBC86F;
border-radius:13px;
font-size:14px;
font-family:PingFangSC-Regular;
font-weight:400;
color:rgba(255,255,255,1);
line-height:14px;
height: 30px;
width: 60px;
text-align: center;
line-height: 30px;
margin-left: 30px;
margin-top: 34px;
    }
</style>