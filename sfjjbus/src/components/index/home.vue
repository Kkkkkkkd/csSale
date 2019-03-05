<template>
    <div class="home">
        <headCom></headCom>
       <div class="sele_bar" >
       		<div v-for="(n,index) in sele_bar" @click="sele_text(index)">
       			<span :class="n.class">{{n.text}}</span>
       		</div>
       </div>
       <div class="H50">
       	
       </div>
       <div class="active_1 dcl"v-for="(n,index) in info" >
       		<div class="ma" >
	       		<div class="ac_header">
	       			<p>订单编号<span style="display: inline-block;margin-left: 8px;">{{n.id}}</span>
	       				<span  style="float: right;color: #EBC86F;" v-if="status == 1">待处理</span>
	       				<span  style="float: right;color: black;" v-else-if="status == 3">进行中</span>
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
	       		<div class="ac_center" @click="going_jxz(n.id)"v-for="(x,ina) in n.info">
	       			<img :src="x.img"/>
	       			<div style="width: 80%;">
	       				<span class="s_p1">{{x.name}}</span>
	       			<p style="font-size: 20px;margin-top: 24px;">¥{{x.price}} <span style="color:rgba(153,153,153,1);float: right;">x{{x.num}}</span></p>
	       			</div>
	       		</div>
	       		<div class="ac_bottom" v-if="status == 1">
	       			<p style="color:rgba(153,153,153,1);">共{{n.info.length}}件商品 <span style="display: inline-block;margin-left: 16px;color: black;">小记</span> <span style="margin-left: 4px;display: inline-block;color: rgba(208,2,27,1);">¥68.80</span></p>
	       			<button class="btn_imm"@click="goto_jd(n.id)">立即接单</button>
	       		</div>
	       		<div class="ac_bottom"v-else-if="status == 3||10">
	       			<p style="color:rgba(153,153,153,1);">共{{n.info.length}}件商品 <span style="display: inline-block;margin-left: 16px;color: black;">小记</span> <span style="margin-left: 4px;display: inline-block;color: rgba(208,2,27,1);">¥{{n.price}}</span></p>
	       			
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
    import utils from '../../../static/utils.js'
    export default {
        name: 'home',
        data () {
            return {
               	sele_bar:[{text:"待处理",class:"active"},{text:'进行中',class:""},{text:'已完成',class:''}],
               	info:''||null,
               	status:'1',
               	id:[],
            }
        },
        components:{
            foot,headCom
        },
        methods:{
            sele_text:function(index){
            	this.info = ''
            	
            	for (var i = 0 ;i<this.sele_bar.length;i++) {
            		this.sele_bar[i].class = ''
            	}
            	this.sele_bar[index].class = 'active'
            	if(index == 0){
//          		$('.jxz').hide()
//          		$('.dcl').show()
//          		$('.ywc').hide()
            		this.status = '1'
            	}else if(index == 1){
//          		$('.dcl').hide()
//          		$('.jxz').show()
//          		$('.ywc').hide()
            		this.status = '3'
            	}else if(index == 2){
//          		$('.ywc').show()
//          		$('.dcl').hide()
//          		$('.jxz').hide()
            		this.status = '10'
            	}
//          	var time =  Date.parse(new Date())
//        	time = JSON.stringify(time)
//          	var data = 'page=' + '1' + '|' + 'status=' + this.status+ '|'+'timestamp=' + time.substring(0,10)
            	server.order_list(this,{
            		page:'1',
            		status:this.status,
            		
            	})
            },
            goto_jd:function(x,v){
            	this.$router.push({
            		path:'/index/redoing?id=' + x
            	})
            },
            going_jxz:function(x){
            	console.log(this.status)
            	if(this.status == '3'){
            		this.$router.push({
            		path:'/index/doing?info=' +x
            	})
            	}else if(this.status == '10'){
            		this.$router.push({
            		path:'/index/doing?info=' +x
            	})
            	}
            },
            going_ywc:function(){
            	this.$router.push({
            		path:'/index/complete'
            	})
            }
        },
        mounted:function(){
            var _self=this;
            //系统公告请求
             //修改title
        this.$store.commit('changetitle', '订单管理');
        //修改头部返回箭头
        this.$store.commit('changeBack', false);
        this.status = '1'
//      var time =  Date.parse(new Date())
//        	time = JSON.stringify(time)
//        	var data = 'page=' + '1' + '|' + 'status=' + this.status + '|' +'timestamp='+ time.substring(0,10)
	        server.order_list(_self,{
	        	page:'1',
	        	status:this.status,
	        })
         
        },
      filters: {
        
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .sele_bar{
    	width: 100%;
    	background-color: white;
    	display: flex;
    	box-shadow: 0px 2px 0 0 gainsboro;
    }
    .sele_bar div{
    	margin: 15px 20px 15px 20px;
    }
    .active{
    	color: #EBC86F;
    	border-bottom: 2px solid #EBC86F;
    	padding-bottom: 5px;
    }
    
    .active_1{
    	width: 95%;
    	background-color: white;
    	margin: auto;
    	margin-top: 8px;
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
