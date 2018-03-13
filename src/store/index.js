/**
 * Created by Administrator on 2016/11/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from '../config'

Vue.use(Vuex)

Vue.prototype._GLOBAL = config

const store = new Vuex.Store({
  state: {
    projectCount:0,
    year:0,
    month:0,
    day:0,
    isPlay: true,
    listInfo: {
      songList: [],
      songIndex: 0
    },

    test:'我是初始化数据',
    daysObj:[],
    scrollLeft:0, // 左边的位移
    selectProjectObj:{}, // 营业线选中的项目名称
    businessLineSelectProjectCount:0,

    businessLineSearch: {
      xmmc:'',
      dj:'',
      xingbie:'',
      sglc:'',
      sglx:'',
      sgksrq:'',
      sgjsrq:'',
      daysIndex:0 ,// 当前选中对象('哪一天')的下标
      infiniteLoading:false, // 是否加载中状态设置
      imgCount:'',
      selectProObj:{}
    },
    nearBusinessLineSearch: {
      xmmc:'',
      dj:'',
      xingbie:'',
      sglx:'',
      sgksrq:'',
      sgjsrq:'',
      selectProObj:{}
    },

    nonBusinessLineSearch: {
      xmmc:'',
      sgksrq:'',
      sgjsrq:'',
      selectProObj:{}
    }
  },
  getters: {
    isPlay: state => state.isPlay,
    listInfo: state => state.listInfo,
    businessLineSearch: state => state.businessLineSearch,
    projectCount:state => state.projectCount,
    year:state => state.year,
    month:state => state.month,
    day:state =>state.day,
    daysObj:state =>state.daysObj,
    scrollLeft:state => state.scrollLeft,
    selectProjectObj:state => state.selectProjectObj,
    businessLineSelectProjectCount:state => state.businessLineSelectProjectCount,

    nearBusinessLineSearch: state => state.nearBusinessLineSearch,
    nonBusinessLineSearch: state => state.nonBusinessLineSearch
  },
  mutations: {
    isPlay: (state, flag) => {
      state.isPlay = flag
    },
    setListInfo: (state, {list, index}) => {
      state.listInfo.songList = list
      state.listInfo.songIndex = index
    },

    setInfiniteLoading:(state,{infiniteLoading}) =>{
      state.businessLineSearch.infiniteLoading = infiniteLoading
    },

    setDaysIndex:(state,{daysIndex})=>{ // 一个月的天数选中的那天

      state.businessLineSearch.daysIndex = daysIndex
    },
    // 营业线
    setBusinessLineSearch: (state, { xmmc, dj, xingbie, sglc, sglx, sgksrq, sgjsrq,imgCount,selectProObj}) => {
      state.businessLineSearch.xmmc = xmmc
      state.businessLineSearch.dj = dj
      state.businessLineSearch.xingbie = xingbie
      state.businessLineSearch.sglc = sglc
      state.businessLineSearch.sglx = sglx
      state.businessLineSearch.sgksrq = sgksrq
      state.businessLineSearch.sgjsrq = sgjsrq
      state.businessLineSearch.imgCount = imgCount

      console.log("营业线store存储的选中项目对象为：" + JSON.stringify(selectProObj));
      state.businessLineSearch.selectProObj = selectProObj

    },
    // 邻近营业线
    setNearBusinessLineSearch: (state, { xmmc, dj, xingbie, /*sglc,*/ sglx, sgksrq, sgjsrq,selectProObj}) => {
      state.nearBusinessLineSearch.xmmc = xmmc
      state.nearBusinessLineSearch.dj = dj
      state.nearBusinessLineSearch.xingbie = xingbie
      /*state.nearBusinessLineSearch.sglc = sglc*/
      state.nearBusinessLineSearch.sglx = sglx
      state.nearBusinessLineSearch.sgksrq = sgksrq
      state.nearBusinessLineSearch.sgjsrq = sgjsrq

      console.log("邻近营业线store存储的选中项目对象为：" + JSON.stringify(selectProObj));
      state.nearBusinessLineSearch.selectProObj = selectProObj

    },
    // 非营业线
    setNonBusinessLineSearch: (state, { xmmc,sgksrq, sgjsrq, selectProObj}) => {
      state.nonBusinessLineSearch.xmmc = xmmc
      /*state.nearBusinessLineSearch.dj = dj
            state.nearBusinessLineSearch.xingbie = xingbie
            /!*state.nearBusinessLineSearch.sglc = sglc*!/
            state.nearBusinessLineSearch.sglx = sglx*/
      state.nonBusinessLineSearch.sgksrq = sgksrq
      state.nonBusinessLineSearch.sgjsrq = sgjsrq
      console.log("store存储的选中项目对象为：" + JSON.stringify(selectProObj));
      state.nonBusinessLineSearch.selectProObj = selectProObj

    },

    // 选中的项目对象
    setSelectProjectObj: (state, { selectProjectObj}) => { // setBusinessLineSelectProjectName
      console.log("store选中的项目对象：" +JSON.stringify(selectProjectObj));
      state.selectProjectObj = selectProjectObj
    },

    setBusinessLineSelectProjectCount: (state, {count}) => {
       state.businessLineSelectProjectCount = count
    },

    // 营业线首页传值给日期组件
    setProjectCount:(state,{count,year,month,day}) =>{
      // 根据父组件传过来的年、月、和当前月的天数，循环遍历转换成汉字格式追加到 days 对象中。
      var tempArr=[];
      for (var i=1;i<=count;i++){
        var obj={};
        var dt = new Date(year,parseInt(month-1), i);
        var weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
        var monthDay = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
        let bjDay =i>9?i:'0'+i; // <10号日期前面加零处理

        obj.day = i;
        obj.weekDay =weekDay[dt.getDay()];
        obj.monthDay = monthDay[month-1];
        obj.showBg = (i==day)?true:false; //判断是都是今天，是为showBg=true,反之，showBg=false。

        tempArr.push(obj);
      }

      state.projectCount = count,
      state.year = year,
      state.month = month,
      state.day = day,
      state.daysObj = tempArr,
      state.scrollLeft = (day-1)*66;// 设置默认滚动距离
    }
  },
  actions: {
    getSong({commit, state}, hash){
      commit('toggleAudioLoadding', true)
      axios.get(`/bproxy/yy/index.php?r=play/getdata&hash=${hash}`).then(({data}) => {
        data = data.data
        const songUrl = data.play_url
        const imgUrl = data.img
        const title = data.audio_name
        const songLength = data.timelength / 1000
        const singer = data.author_name
        const currentLength = 0;
        const lrc = data.lyrics
        const	audio = {songUrl, imgUrl, title, singer, songLength, currentLength}
        commit('setAudio', audio)
        commit('setLrc', lrc)
        commit('toggleAudioLoadding', false)
      })
    },
    prev({dispatch, state}){
      var list = state.listInfo.songList
      if (state.listInfo.songIndex == 0) {
        state.listInfo.songIndex = list.length
      } else {
        state.listInfo.songIndex--
      }
      var hash = list[state.listInfo.songIndex].hash
      dispatch('getSong', hash)
      dispatch('getLrc', hash)
    },
    next({dispatch, state}){
      var list = state.listInfo.songList
      if (state.listInfo.songIndex == list.length - 1) {
        state.listInfo.songIndex = 0
      } else {
        ++state.listInfo.songIndex
      }
      var hash = list[state.listInfo.songIndex].hash
      dispatch('getSong', hash)
      dispatch('getLrc', hash)
    }
  }
})

export default store
