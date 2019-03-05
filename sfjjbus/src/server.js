import Vue from 'vue'
import utils from '../static/utils.js'
const doApi = function(url) {
	return 'http://manage.usale.xyz:8091/api/' + url;
//return 'http://omg.rmclub.top/api/' + url
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
				console.log(data.result)
				console.log(jm(data))
				var data1 = jm(data)
				_self.$router.push({
					path: '/index/home'
				})
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
			console.log(jm(data))
			_self.info = data1.list
			
		});
	},
	//获取订单详情
	order_goodslist: function(_self, data) {
		return ajaxRequest(_self, 'order-goodslist', 'post', data, function(data) {
			console.log(data)

		})
	},
	order_change: function(_self, data) {
		return ajaxRequest(_self, 'order-change', 'post', data, function(data) {
			console.log(data)
			if(data.code == '100') {
				layer.open({
					content: data.msg,
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
				_self.$router.push({
					path: '/index/home'
				})
			} else {
				layer.open({
					content: data.msg,
					skin: 'msg',
					time: 3 //2秒后自动关闭
				});
			}

		})
	},

	goods_list: function(_self, data) {
		return ajaxRequest(_self, 'goods-list', 'get', data, function(data) {
//			console.log(jm(data))
			_self.list_info = jm(data)

		})
	},
	//订单分类
	goods_types: function(_self) {
		return ajaxRequest(_self, 'goods-types', 'get', '', function(data) {
//			console.log(jm(data))
			_self.fl_list = jm(data)

		})
	},
	//订单详情
	order_detail: function(_self, data) {
		return ajaxRequest(_self, 'order-detail', 'post', data, function(data) {
						console.log(jm(data))
//			var data1 = jm(data)
			_self.info = jm(data)

		})
	},
	//上下架
	goods_upper: function(_self, data) {
		return ajaxRequest(_self, 'goods-upper', 'post', data, function(data) {
			console.log(data)
			layer.open({
				content: data.msg,
				skin: 'msg',
				time: 3 //2秒后自动关闭
			});
//			var time = Date.parse(new Date())
//			time = JSON.stringify(time)
//			var data1 = 'limit=' + _self.num + '|' + 'page=' + '1' + '|'+'type='+_self.type+'|' +'timestamp='+ time.substring(0,10)
			ajaxRequest(_self, 'goods-list', 'get', {
				limit:_self.num,
				page:'1',
				type:_self.type
			}, function(data) {
				console.log(data)
				_self.list_info = ''
				_self.list_info = jm(data)

			})

		})
	},
	//用户信息
	user_person: function(_self, data) {
		return ajaxRequest(_self, 'user-person', 'post', data, function(data) {
			console.log(data)
			_self.info =jm(data)

		})
	},

}