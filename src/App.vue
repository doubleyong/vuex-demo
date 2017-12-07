<template>
  <div id="app">
    <img src="./assets/logo.png">
    count值为:{{count}} <button @click="increment">+</button><button @click="decrement">-</button>
    <!--<router-view/>-->
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  computed:mapGetters(['count']),
  methods:{
     ...mapActions(['increment','decrement'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
