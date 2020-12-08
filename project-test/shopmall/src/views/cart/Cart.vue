<template>

  <div>
    <nav-bar class="cart-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <h2>Cart</h2>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "Cart",
      components: {
          NavBar
      }
    }
</script>

<style scoped>

</style>
