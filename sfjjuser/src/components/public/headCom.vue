<template>
    <div class="head">
        <div class="H50">
            <header>
                <p class="back" @click="back" v-show="this.$store.state.headBack">
                   <img src="/static/images/nav_ic_back_light.png"class="ico-b"/>
                </p>
                <p>{{this.$store.state.documentTitle}}</p>
                <!--<div class=" border_line"></div>-->
            </header>
        </div>
    </div>
</template>

<script>
export default {
    name: 'headCom',
    methods:{
        back:function(){
           this.$router.go(-1);
//         localStorage.removeItem('bz')
        }
    }
}
</script>
<style scoped>
    header{
        z-index: 1000000;
        background-color: #EBC86F;
    }
    .back{
        position: absolute;
        left:0;
        top:0;
        width: 35px;
        background-color: #EBC86F;
        line-height: 50px;
    }
    .icon-back{
        font-size: 18px;
        color: #fff;
    }
    .ico-b{
    	/*padding-top: 10px;*/
    	position: absolute;
    	left: 16px;
    	top: 12px;
    }
</style>


