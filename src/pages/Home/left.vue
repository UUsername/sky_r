<template>
<div>
<div class="Home_Top" ref="asd">
</div>
  <el-col :span="4">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <router-link to="conten1"><el-menu-item index="2"><i class="el-icon-setting"></i>表单1</el-menu-item></router-link>
      <router-link to="conten2"><el-menu-item style="border-top:2px solid #99A9BF" index="3"><i class="el-icon-setting"></i>表单2</el-menu-item></router-link>
      <el-menu-item style="border-top:2px solid #99A9BF" index="4"><i class="el-icon-setting"></i>表单3</el-menu-item> 
      <el-menu-item style="border-top:2px solid #99A9BF" index="5"><i class="el-icon-setting"></i>表单4</el-menu-item>
      <el-menu-item style="border-top:2px solid #99A9BF" index="6"><i class="el-icon-setting"></i>表单5</el-menu-item>
      <el-menu-item style="border-top:2px solid #99A9BF" index="7"><i class="el-icon-setting"></i>表单1</el-menu-item>
      <el-menu-item style="border-top:2px solid #99A9BF" index="8"><i class="el-icon-setting"></i>表单2</el-menu-item>
      <el-menu-item style="border-top:2px solid #99A9BF" index="9"><i class="el-icon-setting"></i>表单3</el-menu-item>
      <el-menu-item style="border-top:2px solid #99A9BF" index="10"><i class="el-icon-setting"></i>表单4</el-menu-item>
      <el-menu-item style="border-top:2px solid #99A9BF" index="11"><i class="el-icon-setting"></i>表单5</el-menu-item>
    </el-menu>
  </el-col>
  </div>
</template>
<script>
import Contentone from '../../components/contentone.vue';
  export default {
    data(){
      return {

      }
    },
    methods: {
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) { 
      },
      colorG(){
      }
    },
    mounted: function () {
        var i=0;
        setInterval(()=>{
          var colo = ['#8492A6','#475669'];
          if(i>colo.length){i=0}
            this.$refs.asd.style.background=(colo[i]);   
            i++;
        },2000)
    },
    components:{
      Contentone
    }
  }
</script>
<style lang="">
    .Home_Top{
        width: 100%;
        height:40px;
        background:#98FB98;
        transition: 3s;
    }
</style>