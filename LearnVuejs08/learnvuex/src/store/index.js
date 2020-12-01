import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state:{
    name:'www'
  },
  mutations:{

  },
  actions: {

  },
  getters: {

  }
}

const store = new Vuex.Store({
  state: {
    counter: 0,
    info: {
      name: 'aaa',
      age: 33
    }
  },
  mutations: {
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    updateInfo(state){
      state.info.name = 'bbb'
    }
  },
  actions: {
    aupdateInfo(context){
      setTimeout(()=>{
        context.commit("updateInfo")
      },1000)

    }
  },
  getters:{
    powerCounter(state){
      state.counter * 2
    }
  },
  modules: {
    a:moduleA
  }
})

export default store
