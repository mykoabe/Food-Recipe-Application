<template>
  <section>
    <TheHeader />
    <add-recipes @save-data="saveData"></add-recipes>
    <TheFooter />
  </section>
</template>

<script>
import AddRecipes from "../components/recipes/AddRecipes.vue";
import TheHeader from "../components/shared/TheHeader.vue";
import TheFooter from "../components/shared/TheFooter.vue";
export default {
  components: {
    AddRecipes,
    TheHeader,
    TheFooter,
  },
  methods: {
    saveData(data){
      this.$store.dispatch("recipes/addRecipes", data)
    }
  }
 
};
</script>

<style></style>
