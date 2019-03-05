import Vue from 'vue'
import utils from '../static/utils.js'
const doApi = function(url) {
	return 'http://manage.usale.xyz:8091/api/' + url;
//	return 'http://omg.rmclub.top/api/' + url
	// return '/api/' + url;
};

const ajaxRequest = function(VueObj, url, type, data, callback) {
	// 播放加载动画
	VueObj.$parent.loading = true

//	console.log(data)
//	var data1 = Base64.encode(utils.encrypt(data, 'SecretV#v23zvtb4'))
	data = data || {}
//	console.log(data)
	//	if(!VueObj.$store.state.userId || !VueObj.$store.state.token) {
	//		// console.log('!vuex');
	//		if(iBHLYZX.isLogined()) {
	//			// console.log('islogined');
	//			data.userId = JSON.parse(iBHLYZX.getToken()).userid || '';
	//			data.token = JSON.parse(iBHLYZX.getToken()).token || '';
	//		} else {
	//			// console.log('!logined');
	//			data.userId = '';
	//			data.token = '';
	//		}
	//	} else {
	//		// console.log('invuex');
	//		data.userId = VueObj.$store.state.userId
	//		data.token = VueObj.$store.state.token
	//	}

	return $(function() {
		$.ajax({
			url: doApi(url),
			type: type,
			data: data,
			dataType: "json",
			beforeSend: function(XMLHttpRequest) {
				XMLHttpRequest.setRequestHeader("cid", "29");
				XMLHttpRequest.setRequestHeader("token", localStorage.getItem('token') || null);
			},

			success: function(data) {
				//console.log('result:' + JSON.stringify(data));
				if(data.errcode == 1000002 || data.errcode == 1000001 ||
					data.errcode == "1000002" || data.errcode == "1000001"
				) {
					// window.localStorage.setItem('islogined', null)
					// window.localStorage.setItem('islogined', null)
					if(typeof iBHLYZX != "undefined") {
						if(typeof iBHLYZX.logout != "undefined") {
							iBHLYZX.logout();
						} else if(typeof iBHLYZX.setToken != "undefined") {
							iBHLYZX.setToken("", "");
						}
					}
					VueObj.$store.state.isForceLogout = true;
					VueObj.$router.push({
						path: '/loginRegis/login'
					});
					VueObj.$nextTick(function() {
						VueObj.$parent.loading = false
					})
					return;
				}
				callback(data);
				//				console.log(utils.decrypt(Base64.decode(data)))
				// 移除加载动画
				VueObj.$nextTick(function() {
					VueObj.$parent.loading = false
				})
			}
		})
	});
};

const jm = function(data) {
	return JSON.parse(utils.decrypt(data.result,'e2a93cf0acdf470d'))
}

export default {

	//登录页面请求地址
	login: function(_self, data) {
		return ajaxRequest(_self, 'user-login', 'post', data, function(data) {
			console.log(data)
			layer.open({
				content: data.msg,
				skin: 'msg',
				time: 3 //2秒后自动关闭
			});
			if(data.code == '100') {
				layer.open({
					content: '登录成功',
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
				//				utils.decrypt(Base64.decode(data))
				//				console.log(utils.decrypt(Base64.decode(data.result)))
				//				console.log(Base64.decode(data.result))
				//				utils.decrypt(Base64.decode(data.result),'SecretV#v23zvtb4')
				console.log(jm(data))
				var data1 = jm(data)
//				_self.$router.push({
//					path: '/index/home'
//				})
				window.history.go(-1)
				//				_self.$store.commit('addUserId', data.result.user.name);
				_self.$store.commit('addToken', data1.user.token);
				//				   iBHLYZX.setToken(data.result.user.name, data.result.user.token);
				_self.$store.state.isLogined = true;
				localStorage.setItem('token', data1.user.token)
			}
		});
	},
	//注册页面请求地址
	order_list: function(_self, data) {
		return ajaxRequest(_self, 'order-list', 'get', data, function(data) {
			//			_self.id = data.result.list.
			console.log(jm(data))
			if(data.code == '请登录') {
				layer.open({
					content:data.msg,
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
				_self.$router.push({
					path: "/loginRegis/login"
				})
			}

			var data1 = ''
			data1 = jm(data)

			_self.info = data1.list
			
		});
	},
	//获取订单详情
	order_goodslist: function(_self, data) {
		return ajaxRequest(_self, 'order-goodslist', 'post', data, function(data) {
			console.log(data)

		})
	},
//	order_change: function(_self, data) {
//		return ajaxRequest(_self, 'order-change', 'get', data, function(data) {
//			console.log(data)
//			if(data.code == '100') {
//				layer.open({
//					content: data.msg,
//					skin: 'msg',
//					time: 3 //2秒后自动关闭
//				});
//				_self.$router.push({
//					path: '/index/home'
//				})
//			} else {
//				layer.open({
//					content: data.msg,
//					skin: 'msg',
//					time: 3 //2秒后自动关闭
//				});
//			}
//
//		})
//	},

	goods_list: function(_self, data) {
		return ajaxRequest(_self, 'goods-list', 'get', data, function(data) {
			console.log(jm(data).list.slice(0,4))
			_self.list_info = jm(data)
			
			_self.sp_list = jm(data).list.slice(0,2)
			_self.tj1 = jm(data).list.slice(3,5)
			_self.tj2 = jm(data).list.slice(6,8)
		})
	},
	//订单分类
	goods_types: function(_self) {
		return ajaxRequest(_self, 'goods-types', 'get', '', function(data) {
			
			var aa = jm(data).list
			console.log(jm(data).list)
			_self.fl_list = aa.slice(0,6)
			_self.fl_4 = aa.slice(0,4)
		})
	},
//	//订单详情
	order_detail: function(_self, data) {
		return ajaxRequest(_self, 'order-detail', 'post', data, function(data) {
						
			var data1 = jm(data)
			console.log(jm(data))
			_self.info = data1

		})
	},
	//用户信息
	user_person: function(_self, data) {
		return ajaxRequest(_self, 'user-person', 'post', data, function(data) {
			console.log(jm(data))
			_self.info =jm(data)

		})
	},
	//商品详情
	goods_detail:function(_self,data){
		return ajaxRequest(_self, 'goods-detail', 'get', data, function(data) {
			console.log(jm(data))
			_self.info =jm(data)

		})
	},
	DetailByIds:function(_self,data){
		return ajaxRequest(_self, 'goods-DetailByIds', 'get', data, function(data) {
			console.log(jm(data))
			_self.info3 =jm(data)
			for(var i = 0;i<jm(data).length;i++){
				console.log(jm(data)[i].id)
				_self.id.push(jm(data)[i].id)
			}
		})
	},
	//加入购物车
	cart_add:function(_self,data){
		return ajaxRequest(_self, 'cart-add', 'post', data, function(data) {
			console.log(data)
//			_self.info =jm(data)
			layer.open({
					content: data.msg,
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
		})
	},
	cart_list:function(_self,data){
		return ajaxRequest(_self, 'cart-list', 'get', data, function(data) {
			console.log(jm(data))
			_self.info =jm(data)
		
		})
	},
	cart_del:function(_self,data){
		return ajaxRequest(_self, 'cart-del', 'post', data, function(data) {
			console.log(data)
			layer.open({
					content: data.msg,
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
		if(data.code == '100'){
			return ajaxRequest(_self, 'cart-list', 'get', '', function(data) {
//			console.log(jm(data))
			_self.info =jm(data)
			window.location.reload()
		})
		}
		})
	},
	address_list:function(_self,data){
		return ajaxRequest(_self, 'address-list', 'get', data, function(data) {
			console.log(jm(data))
			
			if(jm(data).list == false){
				_self.isshow = false
			}else{
				_self.isshow = true
				_self.info =jm(data)
				_self.info2 = jm(data).list[0]
			}
		})
	},
	address_save:function(_self,data){
		return ajaxRequest(_self, 'address-save', 'post', data, function(data) {
			console.log(data)
//			_self.info =jm(data)
			layer.open({
					content: data.msg,
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
				if(data.code == 100){
					window.history.go(-1)
				}
		})
	},
	goods_buy:function(_self,data){
		return ajaxRequest(_self, 'goods-buy', 'post', data, function(data) {
			console.log(jm(data))
//			_self.info =jm(data)
			layer.open({
					content: data.msg,
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
				if(data.code == 100){
				_self.$router.push({
					path:'/index/home'
				})
				localStorage.removeItem('youhui')
				localStorage.removeItem('youid')
				localStorage.removeItem('my')
				localStorage.removeItem('name')
				localStorage.removeItem('phone')
				localStorage.removeItem('address')
				localStorage.removeItem('bz')
				}
		})
	},
	article_list:function(_self,data){
		return ajaxRequest(_self, 'article-list', 'get', '', function(data) {
			console.log(jm(data))
			_self.info =jm(data)
			
		})
	},
	article_collect:function(_self,data){
		return ajaxRequest(_self, 'article-collect', 'get', data, function(data) {
			console.log(data)
			layer.open({
					content: data.msg,
					skin: 'msg',
					time: 3 //2秒后自动关闭
			});
			 ajaxRequest(_self, 'article-list', 'get', '', function(data) {
			console.log(jm(data))
			_self.info =jm(data)
			
		})
//			window.location.reload()
		})
	},
	article_info:function(_self,data){
		return ajaxRequest(_self, 'article-info', 'get', data, function(data) {
			console.log(jm(data).info.content)
			var aa = jm(data).info.content
			
			_self.info =jm(data).info
			$('.info12').html(aa)
		})
	},
	notice_list:function(_self,data){
		return ajaxRequest(_self, 'notice-list', 'get', '', function(data) {
			console.log(jm(data))
			
			
			_self.info =jm(data)
			
		})
	},
	order_change:function(_self,data){
		return ajaxRequest(_self, 'order-change', 'post', data, function(data) {
			console.log(jm(data))
			layer.open({
					content: data.msg,
					skin: 'msg',
					time: 3 //2秒后自动关闭
			});
			ajaxRequest(_self, 'order-list', 'get', {
				page:'1',
				status:_self.status
			}, function(data) {
			//			_self.id = data.result.list.
			
			

			var data1 = ''
			data1 = jm(data)

			_self.info = data1.list
			
		});
//			_self.info =jm(data)
			
		})
	},
	coupon_list:function(_self,data){
		return ajaxRequest(_self, 'coupon-list', 'get', '', function(data) {
			console.log(jm(data))
			
			
			_self.info =jm(data)
			
		})
	},
	address_del:function(_self,data){
		return ajaxRequest(_self, 'address-del', 'post', data, function(data) {
			console.log(jm(data))
			if(data.code == '100'){
				layer.open({
					content: data.msg,
					skin: 'msg',
					time: 3 //2秒后自动关闭
			});
		 ajaxRequest(_self, 'address-list', 'get', '', function(data) {
			console.log(jm(data))
			_self.info =jm(data)

		})
			}
			
//			_self.info =jm(data)
			
		})
	},
}