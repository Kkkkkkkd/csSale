<template>
<div class="news">
	<headCom></headCom>
	<div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in info.imgs">
                        <img :src='item' />           
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination" style="margin-top: -30px;background-color: black;opacity: 0.6;color: white;border-radius: 5px;float: right;position: absolute;right: 10px;padding-left: 5px;padding-right: 5px;"></div>
        </div>
        
    <div class="money_box">
    	<div class="" style="width: 95%;margin: auto;padding-top: 24px;">
    		<p style="color: #D0021B;font-size: 27px;">¥{{info.price}} 
    			<!--<span style="font-size: 16px;color: #666666;margin-left: 12px;text-decoration: line-through;">¥72.20</span>-->
    		</p>
    		<div style="font-size: 20px;margin-top: 16px;">
    			{{info.name}}
    		</div>
    		<div id="" style="margin-top: 12px;padding-bottom: 11px;border-bottom: 1px solid gainsboro;color: #666666;">
    			<span>包邮</span><span style="float: right;">2341人付款</span>
    		</div>
    		<div style="position: relative;margin-top: 21px;padding-bottom: 21px;" @click="sele_gg">
    			<span>选择</span><span style="float: right;margin-right: 30px;">请选择规格</span><img src="/static/images/common_ic_arrow_right@2x.png" alt="" style="width: 20px;position: absolute;right: 0;"/>
    		</div>
    	</div>
    </div>
    <div  class="money_box" style="margin-top: 8px;margin-bottom: 50px;">
    	<div style="padding-left: 12px;height: 48px;line-height: 48px;font-size: 16px;">
    		商品详情
    	</div>
    	<img :src="n" v-for="n in info.imgs"/>
    	<!--<p style="padding: 10px;">{{info.summary}}</p>-->
    </div>
    <div class="footer_sp">
    	<div style="text-align: center;width: 15%;"@click="goindex">
    		<img src="/static/images/details_ic_home.png"style="width: 22px;margin-top: 5px;"/>
    		<p style="font-size: 10px;">首页</p>
    	</div>
    	<div style="text-align: center;width: 15%;"@click="gotocart">
    		<img src="/static/images/details_ic_shopping.png"style="width: 22px;margin-top: 5px;"/>
    		<p style="font-size: 10px;">购物车</p>
    	</div>
    	<div style="height: 100%;width: 35%;text-align: center;line-height: 48px;background-color: #D0021B;color: white;"@click="add_cart">加入购物车</div>
    	<div style="height: 100%;width: 35%;text-align: center;line-height: 48px;background-color: #EBC86F;color: white;"@click="sele_gg1">立即购买</div>
    	
    </div>
    <div class="zzc">
    	
    </div>
    <div class="gg_box">
    	<div class="auto_box">
    		<div class="" style="display: flex;padding-bottom: 12px;">
    			<img src="/static/images/beizi.png" style="width: 88px;height: 88px;"/>
    			<div class=""style="padding:0 12px 0 12px;position: relative;">
    				<p style="font-size: 18px;">{{info.name}}</p>
    				<p style="font-size: 20px;color: #D0021B;position: absolute;bottom: 0;">¥{{info.price}}</p>
    			</div>
    			<img src="/static/images/common_ic_close@2x.png" style="height: 20px;width: 20px;position: absolute;right: 5px;"@click="close"/>
    		</div>
    		<p>选择规格</p>
    		<div style="display: flex;flex-wrap: wrap;width: 100%;margin-top: 16px;">
    			<div v-for="(n,index) in list_bar" :class="n.class" class="border_bar" @click="getactive(index)">
    				{{info.size}}
    			</div>
    			
    		</div>
    		<div class=""style="margin-top: 12px;height: 48px;line-height: 48px;">
    			<p>购买数量 <span style="float: right;"><img src="/static/images/common_btn_subtract_disable@2x.png"style="width: 20px;height: 20px;position: relative;top: 5px;"@click="jian"/><input type="number" name="" id="" :value="num" style="width: 20px;text-align: center;color: #EBC86F;"/><img src="/static/images/common_btn_augment@2x.png"style="width: 20px;height: 20px;position: relative;top: 5px;"@click="jia"/></span></p>
    			
    		</div>
    	</div>
    	<button class="btn_buy" @click="buy_dd">立即购买</button>
    </div>
</div>
</template>

<script>
	import headCom from './../public/headCom'
    import server from './../../server'
    export default {
        name: 'news',
        data () {
            return {
                slide: [{imgurl:"/static/images/banner.png"},{imgurl:"/static/images/banner.png"},{imgurl:"/static/images/banner.png"}],
                list_bar:[{name:'1米3',class:'active1'}],
                num:1,
                info:''
            }
        },
        components:{
            headCom
        },
        methods:{
            sele_gg:function(){
            	$('.zzc').show()
            	$('.gg_box').slideDown()
            },
            sele_gg1(){
            	console.log(1111111)
            	$('.zzc').show()
            	$('.gg_box').slideDown()
            },
            getactive(index){
            	for(var i = 0;i<this.list_bar.length;i++){
            		this.list_bar[i].class = '' 
            	}
            	this.list_bar[index].class = 'active1' 
            },
            jian(){
            	this.num --
            	if(this.num == 0){
            		this.num = 1
            	}
            },
            jia(){
            	this.num ++
            },
            close(){
            	$('.zzc').hide()
            	$('.gg_box').slideUp()
            },
            goindex(){
            	this.$router.push({
            		path:'/index/home'
            	})
            },
            buy_dd(){
            	if(localStorage.getItem('token') == null){
          		layer.open({
					content: '未登录',
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
				this.$router.push({
					path:'/loginRegis/login'
				})
	          }else{
	          	this.$router.push({
	            		path:'/goods/suredd?id=' + this.info.id + '&num=' + this.num + '&size=' + this.info.size
	            	})
	          	localStorage.removeItem('bz')
	          }
            	
            },
            gotocart(){
            	this.$router.push({
            		path:'/mine/cart'
            	})
            },
            add_cart(){
            	var _self = this
            	server.cart_add(_self,{
            		num:_self.num,
            		gid:_self.info.id
            	})
            }
        },
        mounted:function(){
            var _self=this;
            //系统公告请求
             //修改title
        this.$store.commit('changetitle', '商品详情');
        //修改头部返回箭头
        this.$store.commit('changeBack', true);
        setTimeout(function(){
         var swiper = new Swiper('.swiper-container', {
              pagination: {
			    el: '.swiper-pagination',
			    type: 'fraction',
			    //type: 'fraction',
			    //type : 'progressbar',
			    //type : 'custom',
			  },
              paginationClickable: true,
              centeredSlides: true,
              autoplay: 2500,
              loop : true,
              autoplayDisableOnInteraction: false,
              
          });
        },500)
          server.goods_detail(_self,{
          	id:_self.$route.query.id
          })
        },
      filters: {
        
      },
      created(){}
    }
</script>

<style>
	
    .news_box{
    	width: 100%;
    	background-color: white;
    	border-bottom: 1px solid gainsboro;
    }
    .money_box{
    	width: 100%;
    	background-color: white;
    }
    .footer_sp{
    	width: 100%;
    	height: 48px;
    	position: fixed;
    	bottom: 0;
    	z-index: 58444445444 !important;
    	background-color: white;
    	display: flex;
    }
    .zzc{
    	width: 100%;
    	height: 100%;
    	background-color: black;
    	position: fixed;
    	top: 0;
    	opacity: 0.7;
    	z-index: 55555555555;
    	display: none;
    }
    .gg_box{
    	width: 100%;
    	background-color: white;
    	position: fixed;
    	bottom: 0;
    	z-index: 55555555555555;
    	display: none;
    }
    .auto_box{
    	width: 95%;
    	margin: auto;
    	margin-top: 12px;
    }
    .border_bar{
    	width: 80px;
    	height: 36px;
    	border-radius:8px;
		border:1px solid rgba(239,239,239,1);
		text-align: center;
		line-height: 36px;
		margin-right: 7px;
		margin-top: 8px;
    }
    .active1{
    	border:1px solid #EBC86F;
    	color: #EBC86F;
    }
    .btn_buy{
    	height:56px;
background:rgba(235,200,111,1);
		width: 100%;
		color: white;
    }
</style>