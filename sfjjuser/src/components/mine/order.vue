<template>
<div class="order">
	<headcom></headcom>
	<div class="sele_bar" >
       		<div v-for="(n,index) in sele_bar" @click="sele_text(index)">
       			<span :class="n.class">{{n.text}}</span>
       		</div>
       </div>
       <div class="active_1 dcl"v-for="(n,index) in info" >
       		<div class="ma" >
	       		<div class="ac_header">
	       			<p>订单编号<span style="display: inline-block;margin-left: 8px;">{{n.id}}</span>
	       				<span  style="float: right;color: #EBC86F;" v-if="status == 1">进行中</span>
	       				<!--<span  style="float: right;color: black;" v-else-if="status == 3">进行中</span>-->
	       				<span  style="float: right;color: black;" v-else="status == 10">已完成</span>
	       			</p>
	       		</div>
	       		<!--<div class="ac_center" v-if="status == 1" v-for="(x,ina) in n.info">
	       			<img :src="x.img"/>
	       			<div style="width: 80%;">
	       				<span class="s_p1">{{x.name}}</span>
	       			<p style="font-size: 20px;margin-top: 24px;">¥{{x.price}} <span style="color:rgba(153,153,153,1);float: right;">x{{x.num}}</span></p>
	       			</div>
	       		</div>-->
	       		<div class="ac_center" @click="going_jxz(n.id)"v-for="x in n.info">
	       			<img  :src="x.img" style="width: 64px;height: 64px;"/>
	       			
	       			<!--<div style="width: 80%;">
	       				<span class="s_p1">12312423423</span>
	       			<p style="font-size: 20px;margin-top: 24px;">¥68.9 <span style="color:rgba(153,153,153,1);float: right;">x2</span></p>
	       			</div>-->
	       		</div>
	       		<div class="ac_bottom" v-if="status == 1">
	       			<p style="position: absolute;left: 0;font-size: 16px;color: #D0021B;">¥{{n.price_real}}</p>
	       			<button class="btn_imm"@click="goto_jd(n.id)"style="float: right;background-color: white;color: #999999;border: 1px solid gainsboro;">取消订单</button>
	       			<!--<button class="btn_imm"@click="goto_jd()">立即支付</button>-->
	       		</div>
	       		<div class="ac_bottom"v-else-if="status == 3||10">
	       			<p style="color:rgba(153,153,153,1);">共{{n.num}}件商品 <span style="display: inline-block;margin-left: 16px;color: black;">小记</span> <span style="margin-left: 4px;display: inline-block;color: rgba(208,2,27,1);">¥{{n.price_real}}</span></p>
	       			
	       		</div>
       		</div>
       </div>
       
</div>
</template>

<script>
	
	import headcom from './../public/headCom'
    import server from './../../server'
    export default {
        name: 'order',
        data () {
            return {
               num:1,
               sele_bar:[{text:"进行中",class:"active"},{text:'已完成',class:''}],
               status:"1",
               info:''
            }
        },
        components:{
            headcom
        },
        methods:{
          sele_text:function(index){
            	
            	
            	for (var i = 0 ;i<this.sele_bar.length;i++) {
            		this.sele_bar[i].class = ''
            	}
            	this.sele_bar[index].class = 'active'
				if(index == 0){
					this.status = '1'
            		 server.order_list(this,{
			          	page:'1',
			          	status:this.status
			          })
            		
            	}else if(index == 1){
            		this.status = '10'
            		 server.order_list(this,{
			          	page:'1',
			          	status:this.status
			          })
            		
            	}
            },
            goto_jd(id){
            	server.order_change(this,{
            		id:id,
            		status:'9'
            	})
            },
            going_jxz(id){
            	this.$router.push({
            		path:'/index/doing?id=' + id
            	})
            }
        },
        mounted:function(){
            var _self=this;
          this.$store.commit('changetitle', '订单管理');
        //修改头部返回箭头
        this.$store.commit('changeBack', true);
          this.status == '1'
          server.order_list(_self,{
          	page:'1',
          	status:this.status
          })
        },
      filters: {
        
      }
    }
</script>

<style>
body,html{
	/*background-color: white;*/
}
	.order{
		width: 100%;
		height: 100%;
		/*background-color: white;*/
	}
	.sele_bar{
    	width: 100%;
    	background-color: white;
    	display: flex;
    	box-shadow: 0px 2px 0 0 gainsboro;
    	background-color: #EBC86F;
    	color: white;
    }
    .sele_bar div{
    	width: 50%;
    	text-align: center;
    }
    .active{
    	color: white;
    	border-bottom: 2px solid white;
    	padding-bottom: 5px;
    }
    .active_1{
    	width: 95%;
    	background-color: white;
    	margin: auto;
    	margin-top: 8px !important;
    	border-radius:8px;
    }
    .ac_header{
    	height: 48px;
    	line-height: 48px;
    	border-bottom: 1px solid rgba(232,232,232,1);
    }
    .ma{
    	width: 95%;
    	margin: 0 0px 0 10px;
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
    .s_p1{
    	
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
    	text-align: left;
    }
    .btn_imm{
    	width:80px;
		height:32px;
		background:rgba(235,200,111,1);
		border-radius:4px;
		/*border:1px solid rgba(235,200,111,1);*/
		color: white;
		line-height: 32px;
		float: right !important;
		margin-top: 8px;
		/*margin-left: 91px;*/
		/*float: right;*/
		position: absolute;
		right: 0;
    }
</style>