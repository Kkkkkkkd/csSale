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
//编辑分类
import classfiy from './components/goods/classfiy' 
//新增分类
import add_classfiy from './components/goods/add_classfiy'
//新增商品
import add_goods from './components/goods/add_goods'
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
export default
//路由配置
[{
    path: '/',
    redirect: '/loginRegis/login'
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
    path: '/goods/classfiy', 
    name: 'classfiy',
    component: classfiy
  },
  {
    path: '/goods/add_classfiy', 
    name: 'add_classfiy',
    component: add_classfiy
  },
  {
    path: '/goods/add_goods', 
    name: 'add_goods',
    component: add_goods
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
];
