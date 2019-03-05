<template>
	<div class="suredd">
		<headCom></headCom>

		<div class="content">

			<div class="div_box" style="">
				<span style="" class="fk_content">联系人</span>
				<input class="" style="float: right;width: 85px;" placeholder="请填写联系人" :value="man" name="man"id="man"/>
				
			</div>
			<div class="div_box" style="">
				<span style="" class="fk_content">手机号码</span>
				<input class="" style="float: right;width: 105px;" placeholder="请填写手机号码" :value="phone" name="phone"id="phone"/>
				
			</div>
			<div class="div_box" style="position: relative;"@click="gotoadd">
				<span style="" class="fk_content">选择地区</span>
				<input class="citi" style="float: right;margin-right: 20px;width: 180px !important;" placeholder="" :value="seleadd" name="seleadd" id="seleadd"/>
				
				<img src="/static/images/common_ic_arrow_right@2x.png" alt="" style="width: 20px;position: absolute;right: 12px;" />
			</div>
			<div class="div_box">
				<span style="" class="fk_content">详细地址</span>
				<input class="fk_content" style="float: right;width: 120px;" placeholder="请填写详细地址" :value="address"name="address"id="address"/>

			</div>
			<!--<div class="div_box">
				<span style="" class="fk_content">邮政编码</span>
				<input class="fk_content" style="float: right;width: 120px;" placeholder="请填写邮政编码" />

			</div>-->
			<button class="bc" @click="baocun">保存</button>
		</div>
		
		<div class="zzc1">
			
		</div>
		<v-distpicker type="mobile" @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea" class="sele_tab"></v-distpicker>
	</div>
</template>

<script>
	import headCom from './../public/headCom'
	  import server from './../../server'
	import VDistpicker from 'v-distpicker'
	export default {
		name: 'suredd',
		data() {
			return {
 				
              province: '------- 省 --------',
              city: '--- 市 ---',
              area: '--- 区 ---',
              selected:'',
          	 man:'',
          	 phone:'',
          	 address:'',
          	 seleadd:''
			}
		},
		components: {
			headCom,VDistpicker
		},
		methods: {
			gotoadd() {
				$('.sele_tab').show()
				$('.zzc1').show()
			},
			 onChangeProvince(a){
                console.log(a) 
                this.province = a.value
            },
            onChangeCity(a){
                console.log(a)   
                this.city = a.value
            },
            onChangeArea(a){
                console.log(a)  
                this.area = a.value
                $('.sele_tab').hide()
                $('.zzc1').hide()
                var city = this.province +' ' +  this.city + ' ' + this.area
                $('.citi').val(city)
//              this.show=false
            },  
            baocun(){
//          	alert(55555555555555)
            	var _self = this
//          	var reg =/^[a-zA-Z0-9]{6,12}$/;
            	if($('#man').val() == ''){
            		layer.open({
					content: "请填写名字",
					skin: 'msg',
					time: 3 //2秒后自动关闭
					
				});
//				alert(1111)
            	}else if($('#phone').val()  == ''){
            		layer.open({
					content: "请填写手机号",
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
            	}else if($('#seleadd').val()  == ''){
            		layer.open({
					content: "请填写地址",
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
            	}else if($('#address').val()  == ''){
            		layer.open({
					content: "请填写地址",
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
            	}else{
            		server.address_save(_self,{
            			id:'0',
            			address:$('#seleadd').val() + $('#address').val(),
            			nick:$('#man').val(),
            			phone:$('#phone').val(),
            			ord:'1'
            		})
            	}
            }
		},
		mounted: function() {
			var _self = this;
			//系统公告请求
			//修改title
			this.$store.commit('changetitle', '新增地址');
			//修改头部返回箭头
			this.$store.commit('changeBack', true);

		},
		filters: {

		},
		created(){
			
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
	
	.content {
		/*width: 90%;
				margin-left:calc(50% - 45%) ;*/
		background-color: white;
	}
	
	.yj_fk {
		font-size: 26px;
		font-weight: bold;
		line-height: 48px;
	}
	
	.fk_content {
		color: #333333;
		line-height: 16px;
		font-size: 16px;
		font-family: PingFangSC-Regular;
	}
	
	.ipt_fk {
		margin-top: 8px;
		font-size: 14px;
		color: rgba(153, 153, 153, 1);
		line-height: 20px;
		width: 100%;
	}
	
	.fk_pic {
		font-size: 16px;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		line-height: 16px;
		margin-top: 24px;
	}
	.bc{
		height:48px;
		background:rgba(235,200,111,1);
		border-radius:4px;
		width: 95%;
		margin-left:calc(50% - 47.5%) ;
		color: white;
		margin-top: 75px;
		position: absolute;
		z-index: 5555555555;
	}
	.sele_tab{
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 5555555555555;
		display: none;
	}
	.zzc1{
		width: 100%;
		height: 100%;
		background-color: black;
		opacity: 0.7;
		position: fixed;
		top: 0;
		z-index: 55;
		display: none;
	}
</style>