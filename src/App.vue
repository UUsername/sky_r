<template>
<div id="warp">

  <router-view></router-view>
</div>
</template>
<script>
export default {
    // data(){
    //   name:'app'
    // }
    watch:{
      $route(to,from){
        
      }
    }
}
</script>
<style>
  #warp{
    width:100%;
    height:100%;
    position:absolute;
    left: 0;
    top: 0;
  }
</style>
