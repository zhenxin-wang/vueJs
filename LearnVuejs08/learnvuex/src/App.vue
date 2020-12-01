<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="subtraction">-</button>
    <button @click="addition">+</button>


    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改</button>

    <H2>{{$store.getters.powerCounter}}</H2>
    <hellovuex></hellovuex>

    <p>{{$store.state.a.name}}</p>
  </div>
</template>

<script>
import hellovuex from './components/Hellovuex'
import Hellovuex from "./components/Hellovuex";
export default {
  name: 'App',
  components: {Hellovuex},
  methods:{
    addition(){
      this.$store.commit('increment')
    },
    subtraction(){
      this.$store.commit('decrement')
    },
    updateInfo(){
      // this.$store.commit('updateInfo')
      this.$store.dispatch('aupdateInfo')
    }
  }
}
</script>

<style>

</style>
