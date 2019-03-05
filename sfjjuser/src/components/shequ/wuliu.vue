<template>
<div class="wuliu">
	<headCom></headCom>
	<div class="active_2" v-for="n in info">
       		<div class="ma">
	       		<div class="ac_header">
	       			<p style="color: #999999;">暂无物流信息<span  style="float: right;color: #999999;">{{formatDate(n.ctime)}}</span></p>
	       		</div>
	       		<div class="ac_center1"v-for="x in n.info">
	       			<img :src="x.img"/>
	       			<div>
	       				<span class="s_p" style="color: #333333;">{{x.name}}</span>
	       			<p style="font-size: 14px;margin-top: 24px;color: #999999;">快递单号 {{n.id}}</p>
	       			</div>
	       		</div>
	       	
       		</div>
       </div>
</div>
</template>

<script>
	import headCom from './../public/headCom'
    import server from './../../server'
    export default {
        name: 'wuliu',
        data () {
            return {
               info:''
            }
        },
        components:{
            headCom
        },
        methods:{
            formatDate(time) {
//					console.log(time)
					time = parseInt(time)
					var date = new Date(time)
					var y = date.getFullYear()
					var m = date.getMonth() + 1
					var d = date.getDate()
					var H = date.getHours()
					var M = date.getMinutes()
					m = m < 10 ? "0" + m : m
					d = d < 10 ? "0" + d : d
					H = H < 10 ? "0" + H : H
					M = M < 10 ? "0" + M : M
					return(y + '-' + m + '-' + d + "-" + H + ":" + M)
				},
        },
        mounted:function(){
            var _self=this;
            //系统公告请求
             //修改title
        this.$store.commit('changetitle', '订单物流');
        //修改头部返回箭头
        this.$store.commit('changeBack', true);
          $('.active_2').eq(0).css('margin-top','0px')
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
          server.order_list(_self,{
          	page:'1',
          	status:'1'
          })
        },
      filters: {
        
      }
    }
</script>

<style>
	.active_2{
    	width: 100%;
    	background-color: white;
    	/*margin: auto;*/
    	margin-top: 8px;
    	/*border-radius:8px;*/
    }
   .active_2 .ac_header{
    	height: 48px;
    	line-height: 48px;
    	/*border-bottom: 1px solid rgba(232,232,232,1);*/
    }
    .active_2 .ma{
    	width: 90%;
    	margin: auto;
    }
    .active_2.ac_center1{
    	display: flex;
    	/*border-bottom: 1px solid gainsboro;*/
    }
   .active_2 .ac_center img{
    	width: 88px;
    	margin: 12px;
    	margin-left: 0;
    	height: 88px;
    }
</style>