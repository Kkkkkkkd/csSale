<template>
	<div class="home">
		<!--<headCom></headCom>-->
		<img src="/static/images/banner.png" />
		<p class="header_title">为你推荐</p>
		<div class="center_box">
			<div id="" v-for="(n,index) in fl_list" @click="togoods(n.name,n.id)">
				<img :src="n.img" style="width: 96px;margin-top: 18px;height: 96px;" />
				<p style="font-size:14px;font-family:PingFangSC-Regular;font-weight:400;color:rgba(51,51,51,1);line-height:14px;">{{n.name}}</p>
				<p style="font-size:11px;font-family:PingFangSC-Regular;font-weight:400;color:rgba(153,153,153,1);margin-top: 4px;">了解更多</p>
			</div>
		</div>
		<p class="header_title">为你推荐</p>
		<div class="auto_box">
			<div style="display: flex;height: 120px;width: 100%;" >
				<div id="" style="position: relative;width: 50%;"v-for="n in tj1"@click="to_sp(n.id)">
					<img :src="n.img" style="width: 100%;border-top-left-radius: 8px;height: 120px;" />
					<!--<span style="position: absolute;color: white;font-size: 14px;top: 64px;left: 12px;">{{n.name}}</span>-->
				</div>
			
			</div>
			<div class="" style="display: flex;flex-wrap: nowrap;border-bottom: 1px solid gainsboro;width: 100%;">
				<div id="" style="padding: 8px;border-right: 1px solid gainsboro;width: 50%;" v-for="n in sp_list"@click="to_sp(n.id)">
					<p class="box_color_t">宜家风</p>
					<p class="p_co">{{n.name}}</p>
					<div style="margin-top: 8px;display: flex;">
						<img :src="n.img" style="width: 50%;height: 79px;" />
						<img :src="n.img" style="width: 50%;height: 79px;" />
					</div>
				</div>
			</div>
		</div>
		<p class="header_title">为你推荐</p>
		<div class="auto_box">
			<div style="display: flex;height: 133px;width: 100%;">
				<div id="" style="position: relative;width: 50%;"v-for="n in tj2" @click="to_sp(n.id)">
					<img :src="n.img" style="width: 100%;border-top-left-radius: 8px;height: 133px;" />
					<!--<span style="position: absolute;color: white;font-size: 14px;top: 75px;left: 12px;">{{n.name}}</span>-->
				</div>
				
			</div>
			<div class="" style="display: flex;flex-wrap: nowrap;border-bottom: 1px solid gainsboro;width: 100%;">
				<div id="" style="border-right: 1px solid gainsboro;text-align: center;width: 25%;" v-for="n in fl_4"@click="togoods(n.name,n.id)">
					<p class="box_color_t" style="margin-top: 9px;">品牌秒杀</p>
					<p class="p_co">{{n.name}}</p>
					<div style="margin-top: 8px;display: flex;">
						<img :src="n.img" style="width: 100%;height: 87px;" />

					</div>
				</div>
			</div>
		</div>
		<p class="header_title">为你推荐</p>
		<!--<div class="auto_box">
			<div style="display: flex;height: 133px;width: 100%;">
				<div id="" style="position: relative;width: 50%;"@click="to_sp()">
					<img src="/static/images/71s5qpEcamL._SL800_@2x.png" style="width:100%;border-top-left-radius: 8px;height: 133px;" />
					<span style="position: absolute;color: white;font-size: 14px;top: 105px;left: 12px;">全棉简约宜家风条</span>
				</div>

				<div id="" style="width: 50%;"@click="to_sp()">
					<p class="box_color_t" style="margin-top: 9px;margin-left: 16px;">品牌秒杀</p>
					<p class="p_co" style="margin-left: 16px;">年货提前购</p>
					<div style="margin-top: 8px;display: flex;">
						<img src="/static/images/71s5qpEcamL._SL800_@2x.png" style="width: 50%;height: 87px;" v-for="n in 2"/>

					</div>
				</div>

			</div>
			<div class="" style="display: flex;flex-wrap: nowrap;border-bottom: 1px solid gainsboro;width: 100%;" v-for="">
				<div id="" style="border-right: 1px solid gainsboro;text-align: center;width: 25%;" v-for="n in 2"@click="to_sp()">
					<p class="box_color_t" style="margin-top: 9px;">品牌秒杀</p>
					<p class="p_co">年货提前购</p>
					<div style="margin-top: 8px;display: flex;">
						<img src="/static/images/71s5qpEcamL._SL800_@2x.png" style="width: 100%;height: 87px;" />

					</div>
				</div>
				<div id="" style="width: 50%;"@click="to_sp()">
					<p class="box_color_t" style="margin-top: 9px;margin-left: 16px;">品牌秒杀</p>
					<p class="p_co" style="margin-left: 16px;">年货提前购</p>
					<div style="margin-top: 8px;display: flex;">
						<img src="/static/images/71s5qpEcamL._SL800_@2x.png" style="width: 50%;height: 87px;" v-for="n in 2"/>

					</div>
				</div>
			</div>
		</div>-->
		<!--<p class="header_title">为你推荐</p>-->
		
		<div class="bottm_box">
			<div id="" v-for="n in list_info.list"@click="to_sp(n.id)">
				<div style="height: 168px;overflow: hidden;width: 100%;"><img :src="n.img"/></div>
				
				<p>{{n.name}}</p>
				<div style="margin-top: 8px;display: flex;width: 100%;">
					<span style="color: #D0021B;font-size: 18px;display: inline-block;width: 50%;">￥{{n.price}}</span>
					<span style="font-size: 12px; color: #666666;text-align: right;display: inline-block;width: 50%;margin-top: 5px;">2341人付款</span>
				</div>
			</div>
		</div>
		
		
		
		<foot></foot>
	</div>
</template>

<script>
	import foot from './../public/foot'
	import headCom from './../public/headCom'
	import server from './../../server'
	export default {
		name: 'home',
		data() {
			return {
				sele_bar: [{
						text: "套件",
						img: "/static/images/home_item_img_01.png",
						
					}, {
						text: '被芯',
						img: "/static/images/home_item_img_02.png"
					}, {
						text: '靠枕',
						img: '/static/images/home_item_img_03.png'
					},
					{
						text: '枕芯',
						img: '/static/images/home_item_img_04.png'
					}, {
						text: '单品',
						img: '/static/images/home_item_img_05.png'
					}, {
						text: '窗帘',
						img: '/static/images/home_item_img_06.png'
					}
				],
				info: '',
				status: '1',
				fl_list:'',
				sp_list:'',
				tj1:'',
				tj2:'',
				fl_4:"",
				list_info:''
			}
		},
		components: {
			foot,
			headCom
		},
		methods: {
			togoods(text,id){
				this.$router.push({
					path:'/goods/goods_bar?text=' + text + '&id=' + id
				})
			},
			to_sp(id){
				this.$router.push({
					path:'/goods/sp_info?id=' + id 
				})
			}
		},
		mounted: function() {
			var _self = this;
			//系统公告请求
			//修改title
			server.goods_types(_self,{
				limit:6
			})
			server.goods_list(_self,{
//				type:'128',
				page:'1',
				limit:20,
				upper:'1'
			})
		},
		filters: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.home {
		background-color: #EBC86F;
		width: 100%;
		height: 100%;
	}
	
	.header_title {
		font-size: 16px;
		font-family: STSongti-SC-Black;
		font-weight: 900;
		color: rgba(255, 255, 255, 1);
		line-height: 22px;
		letter-spacing: 16px;
		text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
		text-align: center;
		margin-top: 18px;
		
	}
	
	.center_box {
		width: 95%;
		/*height: 320px;*/
		background: rgba(255, 255, 255, 1);
		border-radius: 8px;
		margin: auto;
		margin-top: 8px;
		display: flex;
		flex-wrap: wrap-reverse;
		text-align: center;
		justify-content: space-around;
		padding-bottom: 12px;
	}
	.center_box div{
		width: 33.33%;
	}
	.auto_box {
		width: 95%;
		border-radius: 8px;
		background-color: white;
		margin: auto;
		margin-top: 8px;
		overflow: hidden;
	}
	
	.box_color_t {
		font-size: 14px;
		font-family: PingFangSC-Semibold;
		font-weight: 600;
		color: rgba(235, 200, 111, 1);
		line-height: 14px;
	}
	
	.p_co {
		font-size: 12px;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		line-height: 12px;
		margin-top: 4px;
	}
	.bottm_box{
		background:rgba(255,255,255,1);
		border-radius:8px;
		width: 100%;
		overflow: hidden;
		
		display: flex;
		flex-wrap:wrap ;
		justify-content: space-around;
		padding-bottom: 20px;
	}
	.bottm_box div{
		width: 45%;
		/*text-align: center;*/  
		font-size: 12px;
		padding: ;
	}
	.bottm_box div img{
		/*width: 100%;*/
		margin-top: 16px;
	}
</style>