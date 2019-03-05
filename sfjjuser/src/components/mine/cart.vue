<template>
<div class="cart">
	<headcom></headcom>
	<div class="" style="display: flex;padding-bottom: 12px;padding-top: 12px;border-bottom: 1px solid gainsboro;width: 100%;" v-for="(n,index) in info.list">
		<div style="width: 20%;">
			<div id=""style="border: 1px solid gainsboro;width: 20px;height: 20px;border-radius: 50%;margin: auto;margin-top: 25px;"@click="selet(index,n.price,n.gid,n.num)" class="select">
				
			</div>
		</div>
    			<img :src="n.img" style="width: 88px;height: 88px;"/>
    			<div class=""style="padding:0 12px 0 12px;position: relative;width: 100%;">
    				<p style="font-size: 16px;width: 100%;">{{n.name}}</p>
    				<p style="font-size: 20px;color: black;position: absolute;bottom: 0;width: 90%;">¥{{n.price}}
    					<span style="float: right;">
    						<img src="/static/images/common_btn_subtract_disable@2x.png"style="width: 20px;height: 20px;position: relative;top: 5px;"@click="jian(index,n.price)"/>
    						<input type="number" name="" id="" :value="parseInt(n.num)" style="width: 20px;text-align: center;color: #EBC86F;" class="numberin"/>
    						<img src="/static/images/common_btn_augment@2x.png"style="width: 20px;height: 20px;position: relative;top: 5px;"@click="jia(index,n.price)"/>
    					</span>
    				</p>
    			</div>
    		</div>
			<div class="footer_box">
			<span style="margin-left: 12px;">结算</span><span style="font-size: 24px;color: #D0021B;margin-left: 12px;">{{money}}元</span>
			
			<button style="height:100%;background:rgba(235,200,111,1);color: white;width: 30%;float: right;"@click="buy_dd">提交订单</button>
			<button style="height:100%;background: gray;color: white;width: 30%;float: right;" @click="removecart">删除</button>
		</div>
</div>
</template>

<script>
	
	import headcom from './../public/headCom'
    import server from './../../server'
    export default {
        name: 'cart',
        data () {
            return {
               num:1,
               nm:1,
               info:'',
               money:0,
               index:[],
               numindex:[]
            }
        },
        components:{
            headcom
        },
        methods:{
           jian(index,price){
           	console.log(index)
          
            	var aa = $('.numberin').eq(index).val()
            	aa --
            		
				if(aa  == 0){
					aa =1
				}
				$('.numberin').eq(index).val(aa)
//				this.money = this.money - index*price
            },
            jia(index,price){
            	var aa = $('.numberin').eq(index).val()
            	aa ++
            	$('.numberin').eq(index).val(aa)
//          	this.money = this.money + $('.numberin').eq(index).val(aa)*parseInt(price)
//          	this.num = 1
            },
            selet(index,money,id,num){
            	console.log(id)
            	$('.select').eq(index).toggleClass('bgimg')
            	$('.select').eq(index).hasClass('bgimg')
            	console.log($('.select').eq(index).hasClass('bgimg'))
            	if($('.select').eq(index).hasClass('bgimg') == true){
            		this.money += money* $('.numberin').eq(index).val()
            		this.index.push(id)
            		this.numindex.push(num)
//          		var bb = id 
//          		console.log(bb)
            	}else{
            		this.money -= money* $('.numberin').eq(index).val()
            		this.index.push(id)
            		this.numindex.push(num)
	            	function delRepeat(index, id ){
					        for( var i= index.length-1; i>=0; i-- ){
					            if(  index[i] === id ){
					                index.splice(i, 1);
					            }
					        }
					        console.log(index)
					        return  index;
					}
	            	delRepeat(this.index,id)
	            	delRepeat(this.numindex,num)
            	}
            },
            removecart(){
            	var aa = this.index
//          		console.log(aa.join(','))
            		if(aa.join(',') == ''){
            			layer.open({
							content:'请选择商品',
							skin: 'msg',
							time: 3 //2秒后自动关闭
						});
            		}else{
            			server.cart_del(this,{
            			gids:aa.join(',')
            		})
            		}
            		
            	
            },
            buy_dd(){
            	console.log(this.index == false)
            	if(this.index == false){
            		layer.open({
					content: '请选择商品',
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
            	}else{
            		this.$router.push({
            		name:'surecart',
            		params:{
            			id:this.index,
            			num:this.numindex,
            		}
            	})
            		console.log(this.numindex)
            	this.$store.state.arr = this.numindex
            	localStorage.setItem('id',this.index)
            	localStorage.setItem('num',this.numindex)
            	localStorage.removeItem('bz')
            	}
            	
            }
        },
        mounted:function(){
            var _self=this;
          this.$store.commit('changetitle', '购物车');
        //修改头部返回箭头
        this.$store.commit('changeBack', true);
          server.cart_list(_self)
          console.log(localStorage.getItem('token'))
          if(localStorage.getItem('token') == null){
          		layer.open({
					content: '未登录',
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
				_self.$router.push({
					path:'/loginRegis/login'
				})
          }
        },
      filters: {
        
      }
    }
</script>

<style>
body,html{
	/*background-color: white;*/
}
	.cart{
		width: 100%;
		height: 100%;
		background-color: white;
	}
	.bgimg{
		background-image: url("/static/images/common_btn_checkbox_selected@2x.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.footer_box{
				width: 100%;
				background-color: white;
				height: 48px;
				line-height: 48px;
				position: fixed;
				z-index: 5555555555;
				bottom: 0;
			}
</style>