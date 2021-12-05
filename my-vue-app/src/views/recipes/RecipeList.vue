<template>
  <section>
    <div>
      <h3 v-if="isLoading">Is loading</h3>
      <div v-for="recipe in recipes" :key="recipe.id">
        <h2>{{ recipe.name }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "RecipeList",
  computed: {
    ...mapState("recipes", { recipes: "all", isLoading: "isLoading" }),
  },
  mounted() {
    return this.$store.dispatch("recipes/findAll");
  },
  methods: {
    goToRecipe($event) {
      this.$store.dispatch("recipes/selectRecipe", +$event);
    },
  },
};
</script>

<style></style>
