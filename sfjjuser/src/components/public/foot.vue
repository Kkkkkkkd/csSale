<template>
	<div class="foot">
		<footer>
			<div class="border_line_top H01"></div>
			<ul class="out">
				<li class="n on lis" v-for="(item,index) in footList" @click="tab(index,item.router)" :class="item.class">
					<!--<router-link :to="item.router">-->
						<img :src="item.icon" style="margin-top: 4px;" />
						<p style="color: #999999;" :class="'p_clo'+index">{{item.name}}</p>
					<!--</router-link>-->
				</li>
			</ul>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'foot',
		data() {
			return {
				footList: [{
						name: '首页',
						icon: '/static/images/tab_ic_home@2x.png',
						router: '/index/home',
						class: "active"
					},
					{
						name: '好物',
						icon: '/static/images/tab_ic_good@2x.png',
						router: '/goods/goods',
						class: ""
					},
					{
						name: '社区',
						icon: '/static/images/tab_ic_community@2x.png',
						router: '/shequ/shequ',
						class: ''
					},
					{
						name: '我的',
						icon: '/static/images/tab_ic_my@2x.png',
						router: '/mine/mine',
						class: ''
					},
				]
			}
		},
		methods: {
			tab: function(index,path) {
				this.$router.push({
					path:path
				})
//				$('.lis a p').eq(index).addClass('active')
				
				
//				for(var i = 0; i < this.footList.length; i++) {
//					this.footList[i].class = '';
//					console.log($('.lis').eq(index).hasClass('active'))
//
//				}
//				this.footList[index].class = 'active';
				
//				if(index == 0) {
//					this.footList[0].icon = '/static/images/tab_ic_home_selected@2x.png'
//					this.footList[1].icon = '/static/images/tab_ic_good@2x.png'
//					this.footList[2].icon = '/static/images/tab_ic_community@2x.png'
//					this.footList[3].icon = '/static/images/tab_ic_my@2x.png'
//				} else if(index == 1) {
//					this.footList[0].icon = '/static/images/tab_ic_home@2x.png'
//					this.footList[1].icon = '/static/images/tab_ic_good_selected@2x.png'
//					this.footList[2].icon = '/static/images/tab_ic_community@2x.png'
//					this.footList[3].icon = '/static/images/tab_ic_my@2x.png'
//				} else if(index == 2) {
//					this.footList[0].icon = '/static/images/tab_ic_home@2x.png'
//					this.footList[1].icon = '/static/images/tab_ic_good@2x.png'
//					this.footList[2].icon = '/static/images/tab_ic_community_selected@2x.png'
//					this.footList[3].icon = '/static/images/tab_ic_my@2x.png'
//				} else if(index == 3) {
//					this.footList[0].icon = '/static/images/tab_ic_home@2x.png'
//					this.footList[1].icon = '/static/images/tab_ic_good@2x.png'
//					this.footList[2].icon = '/static/images/tab_ic_community@2x.png'
//					this.footList[3].icon = '/static/images/tab_ic_my_selected@2x.png'
//				}
			}
		},
		mounted() {
//			console.log(window.location.href.split("/")[3])
			if(window.location.href.split("/")[3] == 'index') {
				this.footList[0].icon = '/static/images/tab_ic_home_selected@2x.png'
				this.footList[1].icon = '/static/images/tab_ic_good@2x.png'
				this.footList[2].icon = '/static/images/tab_ic_community@2x.png'
				this.footList[3].icon = '/static/images/tab_ic_my@2x.png'
				$('.p_clo0').css('color', '#EBC86F')
			} else if(window.location.href.split("/")[3] == 'goods') {
				this.footList[0].icon = '/static/images/tab_ic_home@2x.png'
				this.footList[1].icon = '/static/images/tab_ic_good_selected@2x.png'
				this.footList[2].icon = '/static/images/tab_ic_community@2x.png'
				this.footList[3].icon = '/static/images/tab_ic_my@2x.png'
				$('.p_clo1').css('color', '#EBC86F')
			} else if(window.location.href.split("/")[3] == 'shequ') {
				this.footList[0].icon = '/static/images/tab_ic_home@2x.png'
				this.footList[1].icon = '/static/images/tab_ic_good@2x.png'
				this.footList[2].icon = '/static/images/tab_ic_community_selected@2x.png'
				this.footList[3].icon = '/static/images/tab_ic_my@2x.png'
				$('.p_clo2').css('color', '#EBC86F')
			} else if(window.location.href.split("/")[3] == 'mine') {
				this.footList[0].icon = '/static/images/tab_ic_home@2x.png'
				this.footList[1].icon = '/static/images/tab_ic_good@2x.png'
				this.footList[2].icon = '/static/images/tab_ic_community@2x.png'
				this.footList[3].icon = '/static/images/tab_ic_my_selected@2x.png'
				$('.p_clo3').css('color', '#EBC86F')
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.foot {
		height: 50px;
	}
	
	footer {
		position: fixed;
		left: 0;
		bottom: 0;
		background: #ffffff;
		width: 100%;
		height: 50px;
		z-index: 555555555555;
	}
	
	footer ul {
		height: 49px;
		width: 100%;
	}
	
	footer ul li {
		width: 25%;
		font-size: 12px;
		text-align: center;
	}
	
	footer ul li .pic {
		font-size: 24px;
		padding-top: 5px;
	}
	
	footer ul li p {
		line-height: 20px;
	}
	
	footer ul li .router-link-active {
		color: #EBC86F;
	}
	
	footer ul li {
		/*color: #999999;*/
	}
	
	footer ul li img {
		width: 21px;
	}
	
	.active {
		color: #EBC86F !important;
	}
	
	.icon-home1 {
		/*background-image: url('');*/
		width: 21px;
		height: 21px;
		text-align: center;
	}
</style>