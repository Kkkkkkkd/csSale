<template>
<div class="add_classify">
	<headCom></headCom>
	
	<div class="re_bottom_box1">
		<input type="text" name="" id="" value="" placeholder="请输入分类名称"/>
	</div>
	<button class="add_g">添加</button>
</div>
</template>

<script>
	import headCom from './../public/headCom'
//  import server from './../../server'
    export default {
        name: 'add_classify',
        data () {
            return {
               	
            }
        },
        components:{
            headCom
        },
        methods:{
            get_add:function(){
            	
            }
            
        },
        mounted:function(){
            var _self=this;
            //系统公告请求
             //修改title
        this.$store.commit('changetitle', '新增分类');
        //修改头部返回箭头
        this.$store.commit('changeBack', true);
          
        },
      filters: {
        
      }
    }
</script>

<style>
	.add_classify{
		width: 100%;
	}
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
    .add_classify .re_bottom_box1{
    	width: 100%;
    	background-color: white;
    	/*margin-top: 8px;*/
    	padding: 20px 12px 20px 12px !important;
    	
    }
    .add_classify .re_bottom_box1 input{
    	font-size: 16px;
    	text-indent: 15px;
    }
   .add_g{
   	height:48px;
	background:rgba(235,200,111,1);
	border-radius:4px;
	width: 90%;
	margin-left: calc(50% - 45%);
	color: white;
	margin-top: 48px;
   }
</style>