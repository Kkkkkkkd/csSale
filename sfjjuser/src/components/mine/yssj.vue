<template>
<div class="mine">
	<headcom></headcom>
	
	<div class="re_bottom_box1">
			<div class="">
				<div class="box_r1">
					
						<p><span style="">今日营业额</span><span style="float: right;">¥21323.5</span></p>
						<p><span style="">今日订单数</span><span style="float: right;">423单</span></p>
						<p><span style="">昨日营业额</span><span style="float: right;">¥21323.5</span></p>
						<p><span style="">昨日订单数</span><span style="float: right;">445单</span></p>
					
				</div>
				<div style="text-align: center;height:56px;line-height: 56px;color: #999999;" @click="ck">点击查看更多历史</div>
				
			</div>
			</div>
			
</div>
</template>

<script>
	
	import headcom from './../public/headCom'
//  import server from './../../server'
    export default {
        name: 'mine',
        data () {
            return {
               	list:[{img:'/static/images/my_ic_data@2x.png',name:'营收数据',path:'/mine/yssj'},{img:'/static/images/my_ic_about_us@2x.png',name:'关于我们',path:''},{img:'/static/images/my_ic_feedback@2x.png',name:'意见反馈',path:''},
               	{img:'/static/images/my_ic_grade@2x.png',name:'去评分',path:''},{img:'/static/images/my_ic_share@2x.png',name:'分享',path:''}
               	]
            }
        },
        components:{
            headcom
        },
        methods:{
            get_add:function(){
            	this.$router.push({
            		path:'/goods/add_classfiy'
            	})
            },
            ck:function(){
            	console.log(123)
            	this.$router.push({
            		path:'/mine/ys_history'
            	})
            }
            
        },
        mounted:function(){
            var _self=this;
          this.$store.commit('changetitle', '营收数据');
        //修改头部返回箭头
        this.$store.commit('changeBack', true);
          
        },
      filters: {
        
      }
    }
</script>

<style>
	.list_bar{
    	position: fixed;
    	right: 13px;
    	z-index: 6666;
    	top: 0;
    	height: 50px;
    	line-height: 50px;
    	color: white;
    	font-size: 16px;
    	
    }
    .mine .re_bottom_box1{
    	width: 100%;
    	background-color: white;
    	/*margin-top: 8px;*/
    	
    }
    
    .mine .box_r1 p{
    	height: 56px;
    	line-height: 56px;
    	color:rgba(102,102,102,1);
    	border-bottom: 1px solid  rgba(239,239,239,1);
    	margin-left: 21px;
    	margin-right: 21px;
    	font-size: 16px;
    }
    .mine_top{
    	height: 160px;
    	width: 100%;
    	background:linear-gradient(270deg,rgba(235,220,165,1) 0%,rgba(235,200,111,1) 100%);
    }
    .mine_top img{
    	width: 72px;
    	margin: 45px 16px 0 16px;
    }
    .return_a{
    	display: block;
    	width: 100%;
    	height: 100%;
    }
</style>