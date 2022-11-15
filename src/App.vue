<template>
<div class="app" :class="mode">
  <NavBar :mode="mode" @Toggle ="Toggle" />
<router-view/>
<WebFooter/>
</div>

</template>

<script>

import NavBar from './components/NavBar.vue';
import WebFooter from './components/WebFooter.vue';

export default {
  name: 'App',
  data() {
    return {
      mode: 'light'
    }
  },
  components: {
    NavBar,WebFooter
  },
  methods: {
    Toggle(){
      if(this.mode ==="dark"){
        this.mode = "light"
      }else{
        this.mode = "dark"
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital@1&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px; 
  max-width: 100%;
}
.app {
  background-color: #EDF2F4;
  color: #000000;
  transition: 0.5s;
}
a{
  text-decoration: none;
}

.dark{
  background:#1d1e25;
  color: white;
  transition: 0.5s;
}
.dark h1{
  color: white;
  transition: 0.5s;
}
.dark h2{
  color: white;
  transition: 0.5s;
}
.dark .box{
  border-image: linear-gradient(to bottom, #1d1e25, #EF233C, #1d1e25) 1 100%;
  transition: 0.5s;
}
.dark .box:hover{
  border-image: linear-gradient(to bottom, #1d1e25, rgb(255, 255, 255), #1d1e25) 1 100%;
  color:#EF233C ;
  transition: 0.5s;
}
.dark .title{
  color: white;
  transition: 0.5s;
}
.dark .bar-percent{
color: #000000;
transition: 0.5s;
}




</style>
