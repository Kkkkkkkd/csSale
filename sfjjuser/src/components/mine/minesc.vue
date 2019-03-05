<template>
	<div class="shequ">
		<headCom></headCom>
		
		<div class="pc_box" v-for="(n,index) in info.list" v-if="n.is_collect == 1">
			<div id="" style="width: 95%;margin: auto;padding-top: 10px;">
				<img  @click="goin(n.id)" :src="n.img"/>
				<p style="font-size:16px;margin-top: 12px;line-height:22px;" @click="goin(n.id)">{{n.title}}</p>
				<div class="bo_box">
					<div class="jrcp" @click="goin(n.id)">
						今日评测
					</div>
					<div style="display: inline-block;float: right;">
						<img src="/static/images/community_ic_collect@2x.png" style="width: 24px;margin-right: 15px;" @click="dianzhan(index,n.id,n.is_collect)" class="pic_bg1" v-if="n.is_collect == 2"/>
						<img src="/static/images/community_ic_collect_selected@2x.png" style="width: 24px;margin-right: 15px;" @click="dianzhan1(index,n.id,n.is_collect)" class="pic_bg2" v-if="n.is_collect == 1"/>
						<!--<img src="/static/images/community_ic_share@2x.png"style="width: 20px;"/>-->
					</div>
				</div>
			</div>

		</div>
		
	</div>
</template>

<script>
	import foot from './../public/foot'
	import headCom from './../public/headCom'
	  import server from './../../server'
	export default {
		name: 'shequ',
		data() {
			return {
				sele_bar: [{
					text: "订单物流",
					img: "/static/images/community_ic_logistics.png",
					path: '/shequ/wuliu'
				}, {
					text: '消息通知',
					img: "/static/images/community_ic_message.png",
					path: '/shequ/news'
				}, {
					text: '优惠券',
					img: '/static/images/community_ic_coupon.png',
					path: '/shequ/youhui'
				}],
				dian:'/static/images/community_ic_collect@2x.png',
				status:false,
				info:''
			}
		},
		components: {
			foot,
			headCom
		},
		methods: {
			dianzhan:function(index,id,status){
				
//					$('.pic_bg1').show()
//					$('.pic_bg2').hide()
					this.status = '1'
					server.article_collect(this,{
						id:id,
						collect:'1'
					})
					this.id = id
				
			},
			dianzhan1:function(index,id,status){
					this.id = id
//					$('.pic_bg1').hide()
//					$('.pic_bg2').show()
					this.status = '2'
					server.article_collect(this,{
						id:id,
						collect:'2'
					})
				
				
			},
			returngo:function(x){
				this.$router.push({
					path:x
				})
			},
			goin:function(id){
				this.$router.push({
					path:'/goods/information?id=' + id
				})
			}
		},
		mounted: function() {
			var _self = this;
			//系统公告请求
			//修改title
			this.$store.commit('changetitle', '我的收藏');
			//修改头部返回箭头
			this.$store.commit('changeBack', true);
			$('.pc_box').eq(0).css('margin-top','0')
			server.article_list(_self)
		},
		filters: {

		}
	}
</script>

<style>
	.tab_box {
		width: 100%;
		height: 88px;
		background: rgba(235, 200, 111, 1);
	}
	
	.tab_box>div {
		height: 100px;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.12);
		border-radius: 8px;
		width: 95%;
		margin: auto;
		padding-top: 16px;
		display: flex;
		justify-content: space-around;
		position: relative;
		z-index: 6;
	}
	
	.pc_box {
		width: 100%;
		background-color: white;
		margin-top: 8px;
	}
	
	.bg_img {
		background-image: url('/static/images/71s5qpEcamL._SL800_@2x.png');
		width: 100%;
		height: 144px;
		/*background-position:;*/
		background-position: 0% 40%;
		background-repeat: no-repeat;
	}
	.bo_box{
		width: 100%;
		margin-top: 12px;
		padding-bottom: 12px;
	}
	.jrcp {
		width: 48px;
		/*height:12px;*/
		font-size: 12px;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		line-height: 12px;
		background: linear-gradient(90deg, rgba(235, 220, 165, 1) 0%, rgba(235, 200, 111, 1) 100%);
		border-radius: 10px;
		padding: 5px 8px 5px 8px;
		display: inline-block;
	}
</style>