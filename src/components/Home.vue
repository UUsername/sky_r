<template>
<div>
    <Left></Left>
    <router-view></router-view>
</div>
</template>

<script>
import Left from '../pages/Home/left.vue'

export default {
    components:{
        Left,
    }
}
</script>

<style>

</style>

