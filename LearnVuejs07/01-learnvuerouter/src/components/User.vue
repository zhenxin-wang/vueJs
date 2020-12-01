<template>
    <div>
      <h2>用户</h2>
      <p>eeeeeeeeeeeeeee</p>
      <p>{{userId}}</p>
      <p>{{$route.params.userId}}</p>
    </div>
</template>

<script>
    export default {
        name: "User",
      computed: {
          userId() {
            return this.$route.params.userId
          }
      }
    }
</script>

<style scoped>

</style>
