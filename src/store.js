/**
 * Created by yang on 2017/12/7.
 */
// 仓库 - 状态管理
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//状态即是数据
var state = {
  count : 6
}

//定义getters 读取状态
var getters = {
  count:function(state){
    return state.count;
  }
}
//定义action,要执行的操作，如流程判断，异步请求等
var actions={
  increment({commit,state}){
    commit('increment');  //与mutations里的名称对应
  },
  decrement({commit,state}){
    commit('decrement');
  }
}
//处理状态的改变
var mutations={
  increment(state){
    state.count++;
  },
  decrement(state){
    state.count--;
  }
}
// 创建store的对象
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
  // 以上都是简写形式，类型与mutations:mutations
})



//导出store对象
export default store

