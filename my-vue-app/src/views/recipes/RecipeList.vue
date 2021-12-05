<template>
  <section>
    <h1>Hello</h1>
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
    this.$store.dispatch("recipes/findAll");
  },
  methods: {
    goToRecipe($event) {
      this.$store.dispatch("recipes/selectRecipe", +$event);
    },
  },
};
</script>

<style></style>
