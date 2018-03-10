import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
import Index from '../components/Index/Index'
// 营业线
import BusinessLine from '../components/BusinessLine/Index'
import BusinessDetail from '../components/BusinessLine/ListDetail'
import BusinessLineSearch from '../components/BusinessLine/BusinessLineSearch'
import BusinessLineSearchDetail from '../components/BusinessLine/BusinessLineSearchDetail'
import BusinessLineSearchDetailList from '../components/BusinessLine/BusinessLineSearchDetailList'
// 邻近营业线
import NearIndex from '../components/NearBusinessLine/Index'
import NearListDetail from '../components/NearBusinessLine/ListDetail'
import NearBusinessLineSearch from '../components/NearBusinessLine/NearBusinessLineSearch'
import NearBusinessLineSearchDetail from '../components/NearBusinessLine/NearBusinessLineSearchDetail'
import NearBusinessLineSearchDetailList from '../components/NearBusinessLine/NearBusinessLineSearchDetailList'
// 非营业线
import NonBusinessLine from '../components/NonBusinessLine/Index'
import NonListDetail from '../components/NonBusinessLine/ListDetail'
import NonBusinessLineSearch from '../components/NonBusinessLine/NonBusinessLineSearch'
import NonBusinessLineSearchDetail from '../components/NonBusinessLine/NonBusinessLineSearchDetail'
import NonBusinessLineSearchDetailList from '../components/NonBusinessLine/NonBusinessLineSearchDetailList'
// 统计
import Statistics from '../components/Statistics/Statistics'
// 待办流程
import ToDoWork from '../components/todowork/ToDoWork'
import ToDoWorkSearch from '../components/todowork/ToDoWorkSearch'
import ToDoWorkScreen from '../components/todowork/ToDoWorkScreen'
// 已办流程
import DoWork from '../components/dowork/DoWork'
import DoWorkSearch from '../components/dowork/DoWorkSearch'
import DoWorkScreen from '../components/dowork/DoWorkScreen'
// 我发起的流程
import ICreate from '../components/icreate/ICreate'
import ICreateSearch from '../components/icreate/ICreateSearch'
import ICreateScreen from '../components/icreate/ICreateScreen'


Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
    // 首页
	  {
		path: '/Index',
    name: 'Index',
		component: Index
	  },
    // 营业线
    {
		path: '/BusinessLine',
    name: 'BusinessLine',
		component: BusinessLine
    },
    {
      path: '/BusinessLine/BusinessLineSearchDetailList',
      name: 'BusinessLineSearchDetailList',
      component: BusinessLineSearchDetailList
    },{
      path: '/BusinessLine/BusinessLineSearchDetail',
      name: 'BusinessLineSearchDetail',
      component: BusinessLineSearchDetail
    },{
      path: '/BusinessLine/BusinessLineSearch',
      name: 'BusinessLineSearch',
      component: BusinessLineSearch
    },{
      path: '/BusinessLine/Detail',
      name: 'BusinessDetail',
      component: BusinessDetail
    },
    // 邻近营业线
    {
      path: '/NearBusinessLine',
      name: 'NearIndex',
      component: NearIndex
    },
    {
      path: '/NearBusinessLine/NearListDetail',
      name: 'NearListDetail',
      component: NearListDetail
    },
    {
      path: '/NearBusinessLine/NearBusinessLineSearchDetail',
      name: 'NearBusinessLineSearchDetail',
      component: NearBusinessLineSearchDetail
    },
    {
      path: '/NearBusinessLine/NearBusinessLineSearch',
      name: 'NearBusinessLineSearch',
      component: NearBusinessLineSearch
    },
    // 非营业线
    {
      path: '/NonBusinessLine',
      name: 'NonBusinessLine',
      component: NonBusinessLine
    },
    {
      path: '/NearBusinessLine/NonListDetail',
      name: 'NonListDetail',
      component: NonListDetail
    },{
      path: '/NearBusinessLine/NearBusinessLineSearchDetailList',
      name: 'NearBusinessLineSearchDetailList',
      component: NearBusinessLineSearchDetailList
    },
    {
      path: '/NonBusinessLine/NonBusinessLineSearch',
      name: 'NonBusinessLineSearch',
      component: NonBusinessLineSearch
    },{
      path: '/NonBusinessLine/NonBusinessLineSearchDetail',
      name: 'NonBusinessLineSearchDetail',
      component: NonBusinessLineSearchDetail
    },{
      path: '/NonBusinessLine/NonBusinessLineSearchDetailList',
      name: 'NonBusinessLineSearchDetailList',
      component: NonBusinessLineSearchDetailList
    },
    // 统计
    {
      path: '/Statistics',
      name: 'Statistics',
      component: Statistics
    },
    // 待办流程
    {
      path: '/ToDoWork',
      name: 'ToDoWork',
      component: ToDoWork
    },
    {
      path: '/ToDoWorkScreen',
      name: 'ToDoWorkScreen',
      component: ToDoWorkScreen
    },
    {
      path: '/ToDoWorkSearch',
      name: 'ToDoWorkSearch',
      component: ToDoWorkSearch
    },
    // 已办流程
    {
      path: '/DoWork',
      name: 'DoWork',
      component: DoWork
    },
    {
      path: '/DoWorkScreen',
      name: 'DoWorkScreen',
      component: DoWorkScreen
    },
    {
      path: '/DoWorkSearch',
      name: 'DoWorkSearch',
      component: DoWorkSearch
    },
    // 我发起的流程
    {
      path: '/ICreate',
      name: 'ICreate',
      component: ICreate
    },
    {
      path: '/ICreateScreen',
      name: 'ICreateScreen',
      component: ICreateScreen
    },
    {
      path: '/ICreateSearch',
      name: 'ICreateSearch',
      component: ICreateSearch
    },{
		path: '*',
    redirect: '/Index'
	}]
})

export default router
