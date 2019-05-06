<template>
    <div>
      嘻嘻嘻
      <button @click="xixixi">三级路由</button>
      <RouterView></RouterView>
    </div>
</template>

<script>
    export default {
        name: "Xi",
      methods:{
          xixixi(){
            this.$router.push({name:'three'})
          }
      }
    }
</script>

<style scoped>

</style>
