<template>
    <div>我是child1数据
    <router-link :to="{path:'/child1/xi'}">二级路由</router-link>
    <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Child1"
    }
</script>

<style scoped>

</style>
