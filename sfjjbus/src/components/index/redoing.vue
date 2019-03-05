<template>
	<div class="redoing">
		<headCom></headCom>
		<div class="top_re_box">
			<div class="container">
				<p style="padding: 14px 0 8px 0px;">{{info.name}} {{info.phone}}</p>
				<p style="font-size:12px;padding-bottom: 14px;color: #999999;">{{info.address}}</p>
			</div>
		</div>
		<div class="active_1" v-for="n in info.info">
       		<div class="ma">
	       		<div class="ac_header">
	       			<p>订单编号<span style="display: inline-block;margin-left: 8px;">{{info.id}}</span><span  style="float: right;color: #EBC86F;">待处理</span></p>
	       		</div>
	       		<div class="ac_center">
	       			<img :src="n.img"/>
	       			<div style="width: 80%;">
	       				<span class="s_p">{{n.name}}</span>
	       			<p style="font-size: 20px;margin-top: 24px;">¥{{n.price}} <span style="color:rgba(153,153,153,1);float: right;">x{{n.num}}</span></p>
	       			</div>
	       		</div>
	       		<div class="ac_bottom">
	       			<p style="color:rgba(153,153,153,1);">共{{n.num}}件商品 <span style="display: inline-block;margin-left: 16px;color: black;">小记</span> <span style="margin-left: 4px;display: inline-block;color: rgba(208,2,27,1);">¥{{n.num*n.price}}</span></p>
	       			
	       		</div>
       		</div>
       </div>
		<div class="re_bottom_box">
			<div class="container">
				<div class="box_r">
					<p>订单号<span style="float: right;">{{info.id}}</span></p>
				</div>
				<div class="box_r">
					<p>配送方式<span style="float: right;">包邮</span></p>
				</div>
				<div class="box_r">
					<p>下单时间<span style="float: right;">{{formatDate(info.ctime)}}</span></p>
				</div>
				<div class="box_r">
					<p>订单备注（选填）<span style="float: right;">{{info.memo}}</span></p>
				</div>
				<div style="width: 100%;" class="btn_box">
					<button style="border:1px solid rgba(235,200,111,1);background-color: white;color:rgba(235,200,111,1) ;"@click="cancle">取消</button>
					<button style="background:rgba(235,200,111,1);color: white;" @click="jieshou">接受</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
    import headCom from './../public/headCom'
    import server from './../../server'
    export default {
        name: 'redoing',
        data () {
            return {
               info:''
            }
        },
        components:{
            headCom
        },
        methods:{
            cancle:function(){
//          	var time   
//        		time = JSON.stringify(Date.parse(new Date()))
//          	var data= 'id=' + this.$route.query.id + '|' + 'status='+ '9' +'|' +'timestamp=' + time.substring(0,10)
            	server.order_change(this,{
            		id:this.$route.query.id,
            		status:'9'
            	})
            },
            jieshou:function(){
//          	var time   
//        		time = JSON.stringify(Date.parse(new Date()))
//          	var data= 'id=' + this.$route.query.id + '|' + 'status='+ '3' +'|' +'timestamp=' + time.substring(0,10)
            	server.order_change(this,{
            		id:this.$route.query.id,
            		status:'3'
            	})
            },
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
        this.$store.commit('changetitle', '待处理');
        //修改头部返回箭头
        this.$store.commit('changeBack', true);
//      server.order_goodslist(_self,{
//      	id:this.$route.query.uid
//      })
//		var time   
//        		time = JSON.stringify(Date.parse(new Date()))
//          	var data= 'id=' + _self.$route.query.id + '|' +'timestamp=' + time.substring(0,10)
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
    .btn_box{
    	justify-content: space-around !important;
    	margin-top: 32px;
    	padding-bottom: 12px;
    }
    .btn_box button{
    	height: 48px;
    	width: 49%;
    	border-radius:4px;
    	
    }
</style>