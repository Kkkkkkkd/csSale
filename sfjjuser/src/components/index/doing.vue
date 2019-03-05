<template>
	<div class="redoing">
		<headCom></headCom>
		<div class="top_re_box">
			<div class="container">
				<!--<p style="padding: 14px 0 8px 0px;">快递单号 </p>
				<p style="font-size:12px;padding-bottom: 14px;color: #999999;">暂无物流信息</p>-->
				<p style="padding: 14px 0 8px 0px;">{{info.name}} {{info.phone}}</p>
				<p style="font-size:12px;padding-bottom: 14px;color: #999999;">{{info.address}}</p>
			</div>
		</div>
		<div class="active_1">
       		<div class="ma" v-for="n in info.info">
	       		
	       		<div class="ac_center">
	       			<img :src="n.img"/>
	       			<div style="position: relative;width: 100%;">
	       				<span class="s_p">{{n.name}}</span>
	       				<p style="font-size: 20px;margin-top: 24px;position: absolute;bottom: 10px;width: 100%;">¥{{info.price_real}} <span style="color:rgba(153,153,153,1);float: right;">x{{n.num}}</span></p>
	       			</div>
	       		</div>
	       		<div class="ac_bottom">
	       			<p style="color:rgba(153,153,153,1);">共{{n.num}}件商品 <span style="display: inline-block;margin-left: 16px;color: black;">小记</span> <span style="margin-left: 4px;display: inline-block;color: rgba(208,2,27,1);">¥{{info.price_real}}</span></p>
	       			
	       		</div>
       		</div>
       </div>
		<div class="re_bottom_box">
			<div class="container">
				<div class="box_r">
					<p>订单号<span style="float: right;">{{info.id}}</span></p>
				</div>
				<div class="box_r">
					<p>配送方式<span style="float: right;">{{info.pay_type}}</span></p>
				</div>
				<div class="box_r">
					<p>下单时间<span style="float: right;">{{formatDate(info.ctime)}}</span></p>
				</div>
				<div class="box_r" style="border-bottom: none;">
					<p>订单备注（选填）<span style="float: right;">{{info.memo}}</span></p>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	
    import headCom from './../public/headCom'
    import server from './../../server'
    export default {
        name: 'doing',
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
        this.$store.commit('changetitle', '订单详情');
        //修改头部返回箭头
        this.$store.commit('changeBack', true);
          server.order_detail(_self,{
          	id:_self.$route.query.id
          })
        },
      filters: {
        
      }
    }
</script>

<style>
	.top_re_box{
		width: 100%;
		background-color: white;
	}
	.container{
		width: 90%;
		margin: auto;
	}
	.top_re_box p{
		font-size: 16px;
		
	}
	.active_1{
    	width: 100%;
    	background-color: white;
    	/*margin: auto;*/
    	margin-top: 8px;
    	border-radius:8px;
    }
    .ac_header{
    	height: 48px;
    	line-height: 48px;
    	border-bottom: 1px solid rgba(232,232,232,1);
    }
    .ma{
    	width: 90%;
    	margin: auto;
    }
    .ac_center{
    	display: flex;
    	border-bottom: 1px solid gainsboro;
    	width: 100%;
    }
    .ac_center img{
    	width: 88px;
    	margin: 12px;
    	margin-left: 0;
    	height: 88px;
    }
    .s_p{
    	
		font-size:16px;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(102,102,102,1);
		line-height:22px;
		display: inline-block;
		margin-top: 12px;
    }
    .ac_bottom{
    	height: 48px;
    	line-height: 48px;
    	display: flex;
    	width: 100%;
    	position: relative;
    }
    .ac_bottom p{
    	position: absolute;
    	right: 0;
    }
    .re_bottom_box{
    	width: 100%;
    	background-color: white;
    	margin-top: 8px;
    	
    }
    .box_r{
    	height: 56px;
    	line-height: 56px;
    	color:rgba(102,102,102,1);
    	border-bottom:1px solid gainsboro ;
    	
    }
    
</style>