<template>
  <section>
    <TheHeader />
    <AddRecipes />
  </section>
</template>

<script>
import AddRecipes from "../components/recipes/AddRecipes.vue";
import TheHeader from "../components/shared/TheHeader.vue";
export default {
  components: {
    AddRecipes,
    TheHeader,
  },
};
</script>

<style></style>
