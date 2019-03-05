<template>
    <div class="login">
        <div class="con">
            <div class="pic ">
               <!-- <span class="icon-login"></span>-->
               <img src="/static/images/img_appicon.png"/>
               <p>丝纺家居商家端</p>
            </div>
            
            <div class="box_p">
            	<label for="phone" class="label_p">手机号<input type="number"  placeholder="请填写手机号" name="phone" :value="phone"/></label>
            	
            </div>
            <div class="box_p" style="margin-top: 0;">
            	<label for="pas" class="label_p">验证码<input type="number"  placeholder="请填写验证码" name="pas" :value="pas" style="width: 50%;"/><span style="float: right;color:rgba(235,200,111,1);" @click="getyzm" class="yzm">获取验证码</span></label>
            	
            </div>
            
            <div class="H20"></div>
            <div class="H20"></div>
            <button class="login_btn" @click="login">登录</button>
            <p class="text_xy">新用户登录即自动注册，并表示已同意<a href="javascript:;">《用户服务协议》</a></p>
            
        </div>
    </div>
</template>

<script>
//import server from './../../server'
import server from './../../server'
export default {
    name: 'login',
    data() {
        return {
            phone: '',
          	pas:'',
           
        }
    },
    methods: {
       
        login: function () {
            var errMsg = function (data) {
                layer.open({
                    content: data,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
            };
            var _self = this;
          if ($('input[name=phone]').val() == '') {
            errMsg('请输入手机号');
          } else if ($('input[name=pas]').val() == '') {
            errMsg('验证码不能为空');
          } else {
//        	var time   
//        	time = JSON.stringify(Date.parse(new Date()))
          	
//              var data = 'name='+ $('input[name=phone]').val()+ '|' + 'pass=' + $('input[name=pas]').val() + '|'  +'timestamp=' + time.substring(0,10)
//              console.log()
                server.login(_self, {
                	name:$('input[name=phone]').val(),
                	pass:$('input[name=pas]').val(),
                	
                });
            }
        },
        getyzm(){
        	var time = 60
        	layer.open({
                    content: '验证码发送成功',
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
        	var set =  setInterval(function(){
        		
        		time -- 
        		$('.yzm').text(time)
        		if(time == 0){
        			clearInterval(set)
        			time = '重新发送验证码'
        		}
        	},1000)
        }
        // 申请试用
        
    },
    mounted() {
//      if(localStorage.getItem('token')){
//      	this.$router.push({
//      		path:'/index/home'
//      	})
//      }
    }
}
</script>
<style scoped>
.pic_code {
    position: absolute;
    right: 0;
    top: 0;
    height: 45px;
    width: 120px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
}

.fr {
    float: right;
}

.login {
    width: 100%;
    height: 100%;
    /*background: url(/static/images/loginBg.png);*/
    background-size: cover;
    position: fixed;
    left: 0;
    top: 0px;
    background-color: white;
}

.login .con {
    
    width: 100%;
    margin-top: 80px;
}

.login .pic {
    width: 100%;
    /*height: 70px;*/
    margin: auto;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    text-align: center;
    /*line-height: 70px;*/
    margin: 0 auto;
}

.pic p{
	font-size:18px;
	font-family:PingFangSC-Regular;
	font-weight: 500;
	color:rgba(0,0,0,1);
	line-height:22px;
	margin-top: 8px;
}
.box_p{
	width: 90%;
	margin: auto;
	font-size: 14px;
	margin-top: 32px;
	border-bottom:1px solid rgba(239,239,239,1);
	/*padding-bottom: 20px;*/
}

.label_p{
	
	width: 100%;
	margin: auto;
	line-height: 56px;
	
	font-size: 16px;
}
.label_p input{
	width: 85%;
	text-indent: 26px;
}
.label_p input :placeholder
*::-webkit-input-placeholder {
    color: rgba(153,153,153,1);
}

*:-moz-placeholder {
    color: rgba(153,153,153,1);
}

*:-ms-input-placeholder {
    color: rgba(153,153,153,1);
}


.login_btn {
   	height:48px;
	background:rgba(235,200,111,1);
	border-radius:4px;
	width: 90%;
	margin-left:calc(50% - 45%);
	color: white;
}

.loginBtn a {
    display: block;
    line-height: 45px;
    border-radius: 25px;
    border: solid 1px#fff;
    text-align: center;
    color: #fff;
    font-size: 16px;
}
.text_xy{
	color:rgba(153,153,153,1);
	line-height:17px;
	margin-top: 12px;
	text-align: center;
}
.text_xy a{
	color:rgba(235,200,111,1);
}
header {
    background-color: transparent !important;
}

.back {
    position: absolute;
    left: 0;
    top: 0;
    width: 35px;
}

.icon-back {
    font-size: 18px;
    color: #fff;
}
</style>


