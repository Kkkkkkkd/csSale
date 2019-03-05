<template>
<div class="classfiy">
	<headCom></headCom>
	<div class="list_bar" @click="get_add">
		<p>新增分类</p>
	</div>
	<div class="re_bottom_box1">
			<div class="">
				<div class="box_r1" v-for="n in 5">
					<p>分类<img src="/static/images/common_ic_close@2x.png" style="width: 25px;margin-top: 15px;float: right;"/></p>
				</div>
				
				
			</div>
			</div>
</div>
</template>

<script>
	import headCom from './../public/headCom'
//  import server from './../../server'
    export default {
        name: 'classify',
        data () {
            return {
               	
            }
        },
        components:{
            headCom
        },
        methods:{
            get_add:function(){
            	this.$router.push({
            		path:'/goods/add_classfiy'
            	})
            }
            
        },
        mounted:function(){
            var _self=this;
            //系统公告请求
             //修改title
        this.$store.commit('changetitle', '编辑分类');
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
    .classfiy .re_bottom_box1{
    	width: 100%;
    	background-color: white;
    	/*margin-top: 8px;*/
    	
    }
    .classfiy .box_r1{
    	border-bottom: 1px solid  rgba(239,239,239,1);
    }
    .classfiy .box_r1 p{
    	height: 56px;
    	line-height: 56px;
    	color:rgba(102,102,102,1);
    	
    	margin-left: 21px;
    	margin-right: 21px;
    	
    }
</style>