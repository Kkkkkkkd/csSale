<template>
	<div class="goods">
		<headCom></headCom>
		<!--<div class="list_bar" @click="get_class">
		<img src="/static/images/nav_ic_list@2x.png"/>
	</div>-->
		<ul class="sele_bar">
			<li @click="sele_text1(0)" class="li_class1 active">全部商品</li>
			<li v-for="(n,index) in fl_list.list" @click="sele_text(n.id,index)" class="li_class">
				{{n.name}}
			</li>
		</ul>
		<div class="H50">

		</div>
		<div class="active_2" v-for="n in list_info.list">
			<div class="ma">

				<div class="ac_center1" >
					<img :src="n.img" />
					<div class="div_bar"style="width: 80%;">
						<span class="s_p">{{n.name}}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
						<p style="font-size: 20px;margin-top: 24px;color: #D0021B;position: relative;width: 100%;">¥{{n.price}} 
							<button style="color:white;float: right;background-color: rgba(235,200,111,1);" v-if="n.upper == 1" @click="shangjia(n.id)">上架</button>
							<button style="color:rgba(235,200,111,1);float: right;background-color: white;"v-else="n.upper == 2"@click="xiajia(n.id)">下架</button>
						</p>
					</div>
				</div>

			</div>
		</div>
		<!--<button class="add_new" @click="add_goods"><img src="/static/images/common_ic_create.png"/>&nbsp; 新增商品</button>-->
		<foot></foot>
	</div>
</template>

<script>
	import foot from './../public/foot'
	import headCom from './../public/headCom'
	import server from './../../server'
	export default {
		name: 'goods',
		data() {
			return {
				sele_bar: [{
					text: "全部商品",
					class: "active"
				}, {
					text: '新品上架',
					class: ""
				}, {
					text: '为你推荐',
					class: ''
				}],
				list_info: '',
				fl_list: '',
				num:20,
				type:'',
				id:'',
				upper:''
			}
		},
		components: {
			foot,
			headCom
		},
		methods: {
			sele_text: function(x, index) {
				var _self = this
				_self.type = x
				_self.list_info = []
				_self.num = 20
//				 var time =  Date.parse(new Date())
//		          	time = JSON.stringify(time)
//		          	var data = 'type=' + x + '|' +'timestamp='+ time.substring(0,10)
				server.goods_list(_self,{
					type:x
				})
//				console.log(this.type)
				$('.li_class').eq(index).addClass('active').siblings().removeClass('active')
			},
			get_class: function() {
				this.$router.push({
					path: '/goods/classfiy'
				})
			},
			add_goods: function() {
				this.$router.push({
					path: '/goods/add_goods'
				})
			},
			sele_text1: function() {
				$('.li_class1').eq(0).addClass('active').siblings().removeClass('active')
				$('.li_class').removeClass('active')
				var _self =this
				_self.type = ''
//				 var time =  Date.parse(new Date())
//		          	time = JSON.stringify(time)
//		          	var data = 'limit=' + _self.num + '|' +'timestamp='+ time.substring(0,10)
				server.goods_list(this,{
					limit:_self.num,
					
				})
			},
			shangjia:function(x){
				this.id =x
				this.upper = '2'
				var _self =this
//				 var time =  Date.parse(new Date())
//		          	time = JSON.stringify(time)
//		          	var data = 'id=' + x + '|' + 'upper=' + this.upper + '|' +'timestamp='+ time.substring(0,10)
				server.goods_upper(_self,{
					id:x,
					upper:this.upper
				})
			},
			xiajia:function(x){
				this.id =x
				var _self =this
				this.upper = '1'
//				var time =  Date.parse(new Date())
//		          	time = JSON.stringify(time)
//		          	var data = 'id=' + x + '|' + 'upper=' + this.upper + '|' +'timestamp='+ time.substring(0,10)
				server.goods_upper(_self,{
					id:x,
					upper:this.upper
				})
			}
		},
		mounted: function() {
			var _self = this;
			//系统公告请求
			//修改title
			this.$store.commit('changetitle', '商品');
			//修改头部返回箭头
			this.$store.commit('changeBack', false);
			server.goods_types(_self)
//			 var time =  Date.parse(new Date())
//		          	time = JSON.stringify(time)
//		          	var data = 'limit=' + _self.num + '|' + 'page=' + '1' + '|'+'type='+_self.type+'|' +'timestamp='+ time.substring(0,10)
					
			server.goods_list(_self, {
				limit:_self.num,
				page:'1',
				type:_self.type
			})
			
		},
		created() {
			var _self = this;
			window.onscroll = function() {
				//变量scrollTop是滚动条滚动时，距离顶部的距离
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				//变量windowHeight是可视区的高度
				var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
				//变量scrollHeight是滚动条的总高度
				var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
				//滚动条到底部的条件
//				console.log(_self.type)
				_self.num = 20
				if(Math.ceil(scrollTop+windowHeight) == scrollHeight) {
					//写后台加载数据的函数
					_self.num = _self.num + 20
//				 var time =  Date.parse(new Date())
//		          	time = JSON.stringify(time)
//		          	var data = 'limit=' + _self.num + '|' + 'page=' + '1' + '|'+'type='+_self.type+'|' +'timestamp='+ time.substring(0,10)
					
					server.goods_list(_self, {
						limit:_self.num,
						page:'1',
						type:_self.type
					})
//					console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight);
				}
			}
		}
	}
</script>

<style>
	.H35 {
		margin-top: 35px;
	}
	
	.sele_bar {
		width: 100%;
		background-color: white;
		display: flex;
		box-shadow: 0px 2px 0 0 gainsboro;
		z-index: 50;
		margin-bottom: 2px;
		position: fixed;
		overflow-x: auto !important;
		white-space: nowrap;
	}
	
	.sele_bar li {
		margin: 15px 20px 15px 20px;
		/*width: ;*/
		/*overflow:scroll;*/
		display: inline-block;
		/*width: 100px;*/
		text-align: center;
		/*height: 30px;*/
	}
	
	.active {
		color: #EBC86F;
		border-bottom: 2px solid #EBC86F;
		padding-bottom: 5px;
		/*width: 10px;*/
	}
	
	.active_2 {
		width: 100%;
		background-color: white;
		margin: auto;
		/*margin-top: 2px;*/
		z-index: 1;
		border-bottom: 1px solid rgba(232, 232, 232, 1);
	}
	
	.active_2:nth-child(1) {
		margin-top: 50px !important;
	}
	
	.active_2:last-child {
		border-bottom: none !important;
	}
	
	.ac_header {
		height: 48px;
		line-height: 48px;
	}
	
	.ma {
		width: 95%;
		margin: 0 0px 0 10px;
	}
	
	.ac_center1 {
		display: flex;
		/*border-bottom: 1px solid gainsboro;*/
	}
	
	.ac_center1 img {
		width: 88px;
		margin: 12px;
		margin-left: 0;
		height: 88px;
	}
	
	.s_p {
		font-size: 16px;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		line-height: 22px;
		display: inline-block;
		margin-top: 12px;
	}
	
	.div_bar button {
		width: 48px;
		height: 25px;
		border-radius: 13px;
		border: 1px solid rgba(235, 200, 111, 1);
		font-size: 14px;
		position: relative;
	}
	
	.list_bar {
		position: fixed;
		right: 13px;
		z-index: 6666;
		top: 0;
		height: 50px;
		line-height: 55px;
	}
	
	.list_bar img {
		width: 21px;
	}
	
	.add_new {
		width: 124px;
		height: 48px;
		background: rgba(235, 200, 111, 1);
		border-radius: 24px;
		color: white;
		position: fixed;
		margin: auto;
		z-index: 55555555;
		left: calc(50% - 62px);
		bottom: 65px;
	}
</style>