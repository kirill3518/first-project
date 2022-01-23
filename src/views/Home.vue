<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Здесь могла быть ваша реклама" /> -->
    <Calculator />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Calculator from "@/components/Calculator.vue";

export default {
  name: "Home",
  components: {
    Calculator,
  },
};
</script>
