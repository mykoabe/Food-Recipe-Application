<template>
  <section>
    <TheHeader />
    <div id="category_section" class="lg:mx-32 sm:mt-6 md:mx-6 mx-6">
      <div class="grid md:grid-cols-3 gap-12 mt-8 grid-cols-1">
        <div v-if="isLoading">
          <div class="flex justify-center items-center">
            <div
              class="
                animate-spin
                rounded-full
                h-32
                w-32
                border-t-2 border-b-2 border-purple-500
              "
            ></div>
          </div>
        </div>
        <recipe-item
          v-for="(recipe, index) in recipes"
          :key="index"
          :id="recipe.id"
          :name="recipe.name"
          :description="recipe.description"
          :time_to_perpare="recipe.time_to_perpare"
          :number_of_servings="recipe.number_of_servings"
          :vegetarian="recipe.vegetarian"
          :calories_per_serving="recipe.calories_per_serving"
          :instructions="recipe.instructions"
          :likes="recipe.likes"
          :rating="recipe.rating"
          class=""
        >
        </recipe-item>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import TheHeader from "../../components/shared/TheHeader.vue";
import RecipeItem from "./RecipeItem.vue";

export default {
  name: "RecipeList",
  components: { TheHeader, RecipeItem },
  computed: {
    ...mapState("recipes", { recipes: "all", isLoading: "isLoading" }),
  },
  mounted() {
    this.$store.dispatch("recipes/findAll");
  },
};
</script>
