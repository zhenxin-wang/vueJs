<template>
  <div>
    <nav-bar class="category-nav">
      <div slot="center">分类</div>
    </nav-bar>
    <h2>Category</h2>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "Category",
      components: {
          NavBar
      }
    }
</script>

<style scoped>

</style>
