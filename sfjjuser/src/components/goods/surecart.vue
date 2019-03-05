<template>
	<div class="suredd">
		<headCom></headCom>
		<!--<div class="sele_dz">
		<div style="width: 95%;margin: auto;">
		选择收货地址 <img src="/static/images/common_ic_arrow_right@2x.png" alt=""style="width: 25px;float: right;margin-top: 18px;" />
	
		</div>

	</div>-->
		<div class="" style="padding: 14px;background-color: white;"@click="goshouhuo">
			<div style="width: 95%;margin: auto;position: relative;" v-show="isshow == true">
				<p><span class="nick">{{info2.nick}}</span> <span class="phone">{{info2.phone}}</span> <span style="border: 1px solid #EBC86F;border-radius:5px;color: #EBC86F;padding: 0 5px 0 5px;">默认</span></p>
				<p style="margin-top: 8px;color: #999999;"class="address">{{info2.address}}</p>
				<img src="/static/images/common_ic_arrow_right@2x.png" alt="" style="width: 25px;float: right;position: absolute;right: 0;top: 10px;" />
				
			</div>
			<div style="width: 95%;margin: auto;position: relative;" v-show="isshow == false">
				<p>请您添加收货地址</p>
				
			</div>
		</div>

		<div class="active_3">
			<div class="ma" v-for="(n,index) in info3">

				<div class="ac_center1" style="border-bottom: 1px solid gainsboro;">
					<img :src="n.img" />
					<div class="div_bar" style="position: relative;">
						<span class="s_p">{{n.name}} &nbsp;</span>
						<span v-show="hidden" class="spid">{{n.id}}</span>
						<p style="font-size: 20px;color: #333333;position: absolute;bottom: 12px;width: 100%;">¥{{n.price}} <span style="color:#999999;float: right;">x{{number[index]}}</span></p>
					</div>

				</div>
				<div class="" style="height: 48px;line-height: 48px;">
					<p style="float: right;font-size: 14px;color: #999999;">共件商品{{number[index]}}<span style="color: #000000;margin-left: 16px;">小记</span><span style="color: #D0021B;margin-left: 16px;">¥<input type="number":value="number[index]*n.price" style="width: 30px;" class="money_o" /></span></p>
				</div>
			</div>
		</div>
		<div class="" style="margin-top: 8px;">
			<div class="content">
			
			<div class="div_box" style="">
				<span style="" class="fk_content">配送方式</span>
				<span class="" style="float: right;" >包邮
				</span>
			</div>
			<div class="div_box"style="position: relative;" >
				<span style="" class="fk_content">支付方式</span>
				<span class="" style="float: right;margin-right: 20px;" >货到付款
				</span>
				<img src="/static/images/common_ic_arrow_right@2x.png" alt="" style="width: 20px;position: absolute;right: 12px;" />
			</div>
			<div class="div_box" >
				<span style="" class="fk_content">订单备注（选填）</span>
				<input class="fk_content" style="float: right;width: 120px;" placeholder="请填写订单备注"name="bz" v-model="bz"/>
				
			</div>
			<div class="div_box"style="position: relative;" @click="gotoyou">
				<span style="" class="fk_content">{{youhui}}</span>
				<!--<span class="" style="float: right;margin-right: 20px;" >货到付款-->
				</span>
				<img src="/static/images/common_ic_arrow_right@2x.png" alt="" style="width: 20px;position: absolute;right: 12px;" />
			</div>
		</div>
		</div>
		<div class="H50">
			
		</div>
		<div class="footer_box">
			<span style="margin-left: 12px;">总计金额</span><span style="font-size: 24px;color: #D0021B;margin-left: 12px;" class="money_all"><span id="zonm"></span>元</span>
			<button style="height:100%;background:rgba(235,200,111,1);color: white;width: 30%;float: right;"@click="sure">提交订单</button>
		</div>
		
	</div>
</template>

<script>
	import headCom from './../public/headCom'
	  import server from './../../server'
	export default {
		name: 'suredd',
		data() {
			return {
				info:'',
				isshow:false,
				info2:'',
				id:[],
				info3:'',
				number:this.$store.state.arr,
				hidden:false,
				youhui:localStorage.getItem('youhui')||'优惠券',
				youID:localStorage.getItem('youid')||'',
				youmy:localStorage.getItem('my')||'',
				bz:localStorage.getItem('bz')||''
			}
		},
		components: {
			headCom
		},
		methods: {
			goshouhuo(){
				this.$router.push({
					path:'/goods/shouhuo_1'
				})
				localStorage.setItem('bz',this.bz)
			},
			sure(){
//				var id = this.info.id
				var aa ={}
				console.log(this.id)
				for(var i = 0;i<this.id.length;i++){
//					console.log(this.id[i])
//					 aa = this.id[i] + ':' + this.number[i]
					 aa[this.id[i]] =  this.number[i]
					 console.log(aa)
//					return aa
				}
				 console.log(JSON.stringify(aa))
//				var aa = "{" + '"'+id +'"'+ ':'+ this.$route.query.num +'}'
//				console.log(aa)
				if(this.info2.address == undefined){
					layer.open({
					content: '请填写收货地址',
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
				}else{
					server.goods_buy(this,{
					phone:$('.phone').text(),
					name:$('.nick').text(),
					address:$('.address').text(),
					info:JSON.stringify(aa),
					memo:$('input[name=bz]').val(),
					pay_type:'货到付款',
					status:'1',
					coupon:this.youID,
					is_clean:'yes',
				})
				}

				
			},
			gotoyou(){
				localStorage.setItem('bz',this.bz)
				this.$router.push({
					path:'/shequ/youhui_1'
				})
			}
		},
		mounted: function() {
			var _self = this;
			//系统公告请求
			//修改title
			this.$store.commit('changetitle', '确认订单');
			//修改头部返回箭头
			this.$store.commit('changeBack', true);
//			var aa = _self.$route.params.id
//			var bb = aa.join(',')
//			setTimeout(function(){
				server.DetailByIds(_self,{
				ids:localStorage.getItem('id')
			})
//			},500)
			
			server.address_list(_self)
			if(localStorage.getItem('name') !=null){
				$('.nick').text(localStorage.getItem('name'))
				$('.address').text(localStorage.getItem('address'))
				$('.phone').text(localStorage.getItem('phone'))
			}
			window.addEventListener('beforeunload',()=>{
	            localStorage.removeItem('bz');
	        })
	        
			
		},
		filters: {

		},
		created(){
			setTimeout(function(){
			var aa = 0
			for (var i = 0; i<$('.money_o').length;i++) {
				console.log(parseInt($('.money_o').eq(i).val()))
				
				
				aa += parseInt($('.money_o').eq(i).val())
				
				console.log(aa)
			}
			console.log(aa)
			
				$('#zonm').text(aa)
			
			},500)
			}
		
	}
</script>

<style>
	.suredd {
		width: 100%;
		/*background-color: white;*/
		border-bottom: 1px solid gainsboro;
		height: 100%;
	}
	
	.sele_dz {
		width: 100%;
		background-color: white;
		height: 64px;
		line-height: 64px;
	}
	
	.active_3 {
		width: 100%;
		background-color: white;
		margin: auto;
		/*margin-top: 2px;*/
		z-index: 1;
		margin-top: 8px;
	}
	
	.active_3:last-child {
		border-bottom: none !important;
	}
	
	.active_3 .ac_header {
		height: 48px;
		line-height: 48px;
	}
	
	.active_3 .ma {
		width: 95%;
		margin: 0 0px 0 10px;
	}
	
	.active_3 .ac_center1 {
		display: flex;
		/*border-bottom: 1px solid gainsboro;*/
	}
	
	.active_3 .ac_center1 img {
		width: 88px;
		margin: 12px;
		margin-left: 0;
		height: 88px;
	}
	
	.active_3 .s_p {
		font-size: 16px;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		line-height: 22px;
		display: inline-block;
		margin-top: 12px;
	}
	.content{
				/*width: 90%;
				margin-left:calc(50% - 45%) ;*/
				background-color: white;
			}
			.yj_fk{
				font-size: 26px;font-weight:bold;line-height: 48px;
			}
			.fk_content{
				
				color:#333333;
				line-height:16px;
				font-size: 16px;
				font-family:PingFangSC-Regular;
				
			}
			.ipt_fk{
				margin-top: 8px;
				font-size: 14px;
				color:rgba(153,153,153,1);
				line-height:20px;
				width: 100%;
			}
			.fk_pic{
				font-size:16px;
				font-family:PingFangSC-Regular;
				font-weight:400;
				color:rgba(102,102,102,1);
				line-height:16px;
				margin-top: 24px;
			}
			.btn-submit{
				margin-top: 32px;
				width: 100%;
				height: 48px;
				background:rgba(255,255,255,1);
				border-radius:4px;
				border:1px solid rgba(153,153,153,1);
			}
			.div_box{
				border-bottom: 1px solid rgba(239,239,239,1);
				padding-bottom: 20px;
				/*margin-top: 23px;*/
				padding-top: 20px;
				padding-left: 12px;
				padding-right: 12px;
			}
			.footer_box{
				width: 100%;
				background-color: white;
				height: 48px;
				line-height: 48px;
				position: fixed;
				z-index: 5555555555;
				bottom: 0;
			}
</style>