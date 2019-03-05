// 首页组件
import home from './components/index/home'

//登录
import login from './components/loginRegis/login'

//待处理 
import redoing from './components/index/redoing'

//进行中 
import doing from './components/index/doing'
//已完成
import complete from './components/index/complete'
//商品
import goods from './components/goods/goods'
import goods_bar from './components/goods/goods_bar'
//个人中心
import mine from './components/mine/mine'
//营收数据
import yssj from './components/mine/yssj'
//营收历史
import ys_history from './components/mine/ys_history'
//关于我们
import aboutus from './components/mine/aboutus'
//意见反馈
import fk from './components/mine/fk'
//社区
import shequ from './components/shequ/shequ'
//订单物流
import wuliu from './components/shequ/wuliu'
//消息通知
import news from './components/shequ/news'
//优惠券
import youhui from './components/shequ/youhui'

import youhui_1 from './components/shequ/youhui_1'
//评测详情
import information from './components/goods/information'
//商品详情
import sp_info from './components/goods/sp_info'
//确认订单
import suredd from './components/goods/suredd'
//收货地址
import shouhuo from './components/goods/shouhuo'

//收货地址
import shouhuo_1 from './components/goods/shouhuo_1'
//新增地址
import add_dizhi from './components/goods/add_dizhi'
//购物车
import cart from './components/mine/cart'
//订单管理
import order from './components/mine/order'
//我的收藏
import minesc from './components/mine/minesc'
//购物车结算
import surecart from './components/goods/surecart'
export default
//路由配置
[{
    path: '/',
    redirect: '/index/home'
  },
  {
    path: '/index/home', //首页
    name: 'home',
    component: home
  },
  {
    path: '/loginRegis/login', //登录
    name: 'login',
    component: login
  },
  {
    path: '/index/redoing', //待处理
    name: 'redoing',
    component: redoing
  },
  {
    path: '/index/doing', //进行中
    name: 'doing',
    component: doing
  },
{
    path: '/index/complete', //已完成
    name: 'complete',
    component: complete
  },
  {
    path: '/goods/goods', 
    name: 'goods',
    component: goods
  },
  {
    path: '/goods/surecart', 
    name: 'surecart',
    component: surecart
  },
  {
    path: '/goods/goods_bar', 
    name: 'goods_bar',
    component: goods_bar
  },
  {
    path: '/mine/mine', 
    name: 'mine',
    component: mine
  },
  {
    path: '/mine/yssj', 
    name: 'yssj',
    component: yssj
  },
  {
    path: '/mine/ys_history', 
    name: 'ys_history',
    component: ys_history
  },{
    path: '/mine/aboutus', 
    name: 'aboutus',
    component: aboutus
  },
  {
    path: '/mine/fk', 
    name: 'fk',
    component: fk
  },
  {
    path: '/shequ/shequ', 
    name: 'shequ',
    component: shequ
  },
  {
    path: '/shequ/wuliu', 
    name: 'wuliu',
    component: wuliu
  },
  {
    path: '/shequ/news', 
    name: 'news',
    component: news
  },
  {
    path: '/shequ/youhui', 
    name: 'youhui',
    component: youhui
  },
  {
    path: '/shequ/youhui_1', 
    name: 'youhui_1',
    component: youhui_1
  },
    {
    path: '/goods/information', 
    name: 'information',
    component: information
  },
 {
    path: '/goods/sp_info', 
    name: 'sp_info',
    component: sp_info
  },
  {
    path: '/goods/suredd', 
    name: 'suredd',
    component: suredd
  },
  {
    path: '/goods/shouhuo', 
    name: 'shouhuo',
    component: shouhuo
  },
  {
    path: '/goods/shouhuo_1', 
    name: 'shouhuo_1',
    component: shouhuo_1
  },
  {
    path: '/goods/add_dizhi', 
    name: 'add_dizhi',
    component: add_dizhi
  },
  {
    path: '/mine/cart', 
    name: 'cart',
    component: cart
  },
   {
    path: '/mine/order', 
    name: 'order',
    component: order
  },
  {
    path: '/mine/minesc', 
    name: 'minesc',
    component: minesc
  },
];
