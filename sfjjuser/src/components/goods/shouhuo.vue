<template>
	<div class="suredd">
		<headCom></headCom>
		<!--<div class="sele_dz">
		<div style="width: 95%;margin: auto;">
		选择收货地址 <img src="/static/images/common_ic_arrow_right@2x.png" alt=""style="width: 25px;float: right;margin-top: 18px;" />
	
		</div>

	</div>-->
		<p style="font-size: 25px;position: fixed;right: 20px;color: white;top: 5px;z-index: 555555555555;"@click="gotoadd">+</p>
		<div class="" style="padding: 14px;background-color: white;"v-for="n in info.list">
			<div style="width: 95%;margin: auto;position: relative;">
				<p>{{n.nick}} {{n.phone}} <span style="border: 1px solid #EBC86F;border-radius:5px;color: #EBC86F;padding: 0 5px 0 5px;">默认</span></p>
				<p style="margin-top: 8px;color: #999999;">{{n.address}}</p>
				<img src="/static/images/common_ic_close@2x.png" alt="" style="width: 25px;float: right;position: absolute;right: 0;top: 10px;" @click="removeadd(n.id)"/>

			</div>
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
				info:''
			}
		},
		components: {
			headCom
		},
		methods: {
			gotoadd(){
				this.$router.push({
					path:'/goods/add_dizhi'
				})
			},
			removeadd(id){
				server.address_del(this,{
					id:id
				})
			}
		},
		mounted: function() {
			var _self = this;
			//系统公告请求
			//修改title
			this.$store.commit('changetitle', '收货地址');
			//修改头部返回箭头
			this.$store.commit('changeBack', true);
			server.address_list(_self)
		},
		filters: {

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
	
	
	
	
</style>