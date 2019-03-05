<template>
    <div class="foot">
        <footer>
            <div class="border_line_top H01"></div>
            <ul class="out">
                <li class="n on" v-for="(item,index) in footList" @click="tab(index)" :class="item.class" >
                    <router-link :to="item.router" >
                        <img :src="item.icon" style="margin-top: 4px;"/>
                        <p style="color: #999999;" :class="'p_clo'+index">{{item.name}}</p>
                    </router-link>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'foot',
        data () {
            return {
                footList:[{name:'订单',icon:'/static/images/tab_ic_order@2x.png',router:'/index/home',class:"active"},
                          {name:'商品',icon:'/static/images/tab_ic_commodity@2x.png',router:'/goods/goods',class:""},
                          {name:'我的',icon:'/static/images/tab_ic_my@2x.png',router:'/mine/mine',class:''},
                          ]
            }
        },
        methods:{
        	tab:function(index){
        		for(var i=0;i<this.footList.length;i++){
                    this.footList[i].class='';
                   
                }
        		this.footList[index].class='active';
        		 if(index == 0){
                    	 this.footList[0].icon = '/static/images/tab_ic_order_selected@2x.png'
                    	 this.footList[1].icon = '/static/images/tab_ic_commodity@2x.png'
                    	 this.footList[2].icon = '/static/images/tab_ic_my@2x.png'
                    }else if(index == 1){
                    	 this.footList[0].icon = '/static/images/tab_ic_order@2x.png'
                    	 this.footList[1].icon = '/static/images/tab_ic_commodity_selected@2x.png'
                    	 this.footList[2].icon = '/static/images/tab_ic_my@2x.png'
                    }else if(index == 2){
                    	 this.footList[0].icon = '/static/images/tab_ic_order@2x.png'
                    	 this.footList[1].icon = '/static/images/tab_ic_commodity@2x.png'
                    	 this.footList[2].icon = '/static/images/tab_ic_my_selected@2x.png'
                    }
        	}
        },
        mounted(){
        	console.log(window.location.href.split("/")[3])
        	if(window.location.href.split("/")[3] == 'index'){
        		this.footList[0].icon = '/static/images/tab_ic_order_selected@2x.png'
                this.footList[1].icon = '/static/images/tab_ic_commodity@2x.png'
                this.footList[2].icon = '/static/images/tab_ic_my@2x.png'
                $('.p_clo0').css('color','#EBC86F')
        	}else if(window.location.href.split("/")[3] == 'goods'){
        		this.footList[0].icon = '/static/images/tab_ic_order@2x.png'
                this.footList[1].icon = '/static/images/tab_ic_commodity_selected@2x.png'
                this.footList[2].icon = '/static/images/tab_ic_my@2x.png'
                $('.p_clo1').css('color','#EBC86F')
        	}else if(window.location.href.split("/")[3] == 'mine'){
        		this.footList[0].icon = '/static/images/tab_ic_order@2x.png'
                this.footList[1].icon = '/static/images/tab_ic_commodity@2x.png'
                this.footList[2].icon = '/static/images/tab_ic_my_selected@2x.png'
                $('.p_clo2').css('color','#EBC86F')
        	}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .foot{
        height: 50px;
    }
    footer {
        position: fixed;
        left:0;bottom:0;
        background: #ffffff;
        width: 100%;
        height: 50px;
    }
    footer ul{
        height: 49px;
        width: 100%;
    }
    footer ul li{
        width: 33.3%;
        font-size: 12px;
        text-align: center;
    }
    footer ul li .pic{
        font-size: 24px;
        padding-top: 5px;
    }
    footer ul li p{
        line-height: 20px;
        
    }
    footer ul li a.router-link-active{
        color:#EBC86F; 
    }
    footer ul li{
    	/*color: #999999;*/
    }
    footer ul li a img{
    	width: 21px;
    }
    .active{
    	color:#EBC86F !important; 
    }
    .icon-home1{
    	/*background-image: url('');*/
    	width: 21px;
    	height: 21px;
    	text-align: center;
    }
</style>
