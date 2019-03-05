<template>
	<div class="fk">
		<headcom></headcom>
		<textarea class="texta" name="" rows="" cols=""  placeholder="请输入使用过程中遇到的问题或者对我们的建议..."></textarea>
		<div class="div_box11">
			<img src="/static/images/common_ibtn_add_photo@2x.png" style="width: 30%;margin: 12px;" class="click_file" />
			<img src="" class="img" style="width: 108px;">
			<input type="file" name="file" id="file" accept="image/jpeg,image/jpg,image/png" value="" style="display: none;" />

			<button class="btn-submit">提交</button>

		</div>
		</div>
</template>

<script>
	import headcom from './../public/headCom'
	//  import server from './../../server'
	export default {
		name: 'fk',
		data() {
			return {

			}
		},
		components: {
			headcom
		},
		methods: {

		},
		mounted: function() {
			var _self = this;
			this.$store.commit('changetitle', '意见反馈');
			//修改头部返回箭头
			this.$store.commit('changeBack', true);

		},
		filters: {

		}
	}
</script>

<style>
	
	
	.fk {
		width: 100%;
		height: 100%;
		/*background-color: white;*/
	}
	
	.texta {
		border: none;
		text-indent: 20px;
		line-height: 50px;
		width: 100%;
		color: #9a9a9a;
	}
	
	.btn-submit {
		background:rgba(235,200,111,1);;
		border-radius: 4px;
		/*border: 1px solid rgba(153, 153, 153, 1);*/
		margin-left: calc(50% - 47.5%);
		height: 50px;
		border-radius: 5px;
		width: 92.5%;
		margin-top: 20px;
		color: white;
	}
	
	.div_box11 {
		background-color: white;
		margin-top: 6px;
		padding-bottom: 12px;
	}
</style>