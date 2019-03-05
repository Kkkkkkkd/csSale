<template>
	<div class="goods">
		<headCom></headCom>
		<!--<div class="list_bar" @click="get_class">
		<img src="/static/images/nav_ic_list@2x.png"/>
	</div>-->
		<!--<div class="sele_bar" >
       		<div v-for="(n,index) in sele_bar" @click="sele_text(index)">
       			<span :class="n.class">{{n.text}}</span>
       		</div>
       </div>-->
		<div class="active_2" v-for="n in list_info.list" @click="going(n.id)">
			<div style="width:34px;background:linear-gradient(90deg,rgba(235,220,165,1) 0%,rgba(235,200,111,1) 100%);border-radius:0px 4px 4px 0px;position: absolute;font-size: 11px;color: white;margin-top: 18px;">
				&nbsp;限时<br />&nbsp;抢购
			</div>
			<div class="ma">
			
				<div class="ac_center1">
					<img :src="n.img" />
					<div class="div_bar">
						<span class="s_p" style="font-size: 14px;">{{n.name}}</span>
						<div class="big_width">
							<div class="small_width">
								已抢46件
							</div>
						</div>
						<div style="width:48px;height:12px;font-size:10px;font-family:PingFangSC-Regular;font-weight:400;color:rgba(208,2,27,1);line-height:12px;margin-top: 9px;border: 1px solid rgba(208,2,27,1);">限量400件</div>
						<p style="font-size: 20px;margin-top: 5px;color: #D0021B;">¥{{n.price}}
							<!--<span style="font-size: 16px;color: #999999;text-decoration: line-through;">¥72.20</span>-->
							<button style="color:white;float: right;background-color: rgba(235,200,111,1);height:25px;width:56px;">马上抢</button></p>
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
				list_info:''
			}
		},
		components: {
			foot,
			headCom
		},
		methods: {
			sele_text: function(index) {
				for(var i = 0; i < this.sele_bar.length; i++) {
					this.sele_bar[i].class = ''
				}
				this.sele_bar[index].class = 'active'

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
			going:function(id){
				this.$router.push({
					path:'/goods/sp_info?id=' + id
				})
			}

		},
		mounted: function() {
			var _self = this;
			//系统公告请求
			//修改title
			this.$store.commit('changetitle', '好物');
			//修改头部返回箭头
			this.$store.commit('changeBack', false);
			server.goods_list(_self,{
				type:'137',
				page:'1',
				limit:20,
				upper:'1'
			})
		},
		filters: {

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
						type:'137',
						upper:'1'
					})
//					console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight);
				}
			}
		}
	}
</script>

<style>
	.sele_bar {
		width: 100%;
		background-color: white;
		display: flex;
		box-shadow: 0px 2px 0 0 gainsboro;
		z-index: 50;
		margin-bottom: 2px;
	}
	
	.sele_bar div {
		margin: 15px 20px 15px 20px;
	}
	
	.active {
		color: #EBC86F;
		border-bottom: 2px solid #EBC86F;
		padding-bottom: 5px;
		width: 10px;
	}
	
	.active_2 {
		width: 100%;
		background-color: white;
		margin: auto;
		/*margin-top: 2px;*/
		z-index: 1;
		border-bottom: 1px solid rgba(232, 232, 232, 1);
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
		width: 116px;
		margin: 12px;
		margin-left: 0;
		height: 116px;
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
		z-index: 55;
		left: calc(50% - 62px);
		bottom: 65px;
	}
	
	.big_width {
		width: 155px;
		height: 12px;
		background: papayawhip;
		border-radius: 8px;
		/*opacity:0.3;*/
		margin-top: 8px;
		position: relative;
	}
	
	.small_width {
		width: 75px;
		height: 12px;
		background: rgba(235, 200, 111, 1);
		border-radius: 8px;
		z-index: 5;
		position: absolute;
		font-size: 10px;
		color: white;
		text-indent: 6px;
	}
</style>