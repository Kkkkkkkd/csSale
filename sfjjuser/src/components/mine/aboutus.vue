<template>
<div class="aboutus">
	<headcom></headcom>
	<div style="height:1000px;width: 100%;justify-content: center;text-align: center;"><img src="/static/images/img_appicon@2x.png" style="width: 64px;margin-top: 72px;"/>
		<p style="font-size:16px;margin-top: 10px;">丝纺家居 v1.0</p>
	</div>
	
			
</div>
</template>

<script>
	
	import headcom from './../public/headCom'
//  import server from './../../server'
    export default {
        name: 'aboutus',
        data () {
            return {
               
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
            return1:function(x){
            	console.log(123)
            	this.$router.push({
            		path:x
            	})
            }
            
        },
        mounted:function(){
            var _self=this;
          this.$store.commit('changetitle', '关于我们');
        //修改头部返回箭头
        this.$store.commit('changeBack', true);
          
        },
      filters: {
        
      }
    }
</script>

<style>
body,html{
	/*background-color: white;*/
}
	.aboutus{
		width: 100%;
		height: 100%;
		background-color: white;
	}
</style>