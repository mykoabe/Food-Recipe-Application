<template>
  <section>
    <div class="grid md:grid-cols-4 gap-9 mt-8 grid-cols-1">
      <div id="first_col" class="col-span-3">
        <div class="grid-rows-2">
          <div id="row_one">
            <div id="header">
              <h2 class="text-2xl font-bold">Trending Recipes</h2>
              <div class="w-full bg-gray-200 rounded-full h-0.5 my-5">
                <div
                  class="bg-red-600 h-0.5 rounded-full"
                  style="width: 10%"
                ></div>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-12 mt-8 grid-cols-1">
              <div v-if="isLoading">Is Loading</div>
              <recipe-item
                v-for="(recipe, index) in trending"
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
              ></recipe-item>
            </div>
          </div>
        </div>

        <div id="second_row">
          <EditorsChoice />
        </div>
      </div>

      <div id="second_col">
        <div class="grid grid-rows-3 my-10">
          <MostRatedRecipe />
        </div>
        <div class="grid grid-rows-3">
          <SubscribeAndFollow />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MostRatedRecipe from "./MostRatedRecipe.vue";
import EditorsChoice from "./EditorsChoice.vue";
import SubscribeAndFollow from "./SubscribeAndFollow.vue";
import RecipeItem from "../../views/recipes/RecipeItem.vue";
import { mapState } from "vuex";
export default {
  components: {
    MostRatedRecipe,
    EditorsChoice,
    SubscribeAndFollow,
    RecipeItem,
  },
  computed: {
    ...mapState("recipes", {
      trending: "trending",
      isLoading: "isLoading",
    }),
  },
  mounted() {
    this.$store.dispatch("recipes/findTrendingRecipes");
  },
  methods: {
    goToRecipe($event) {
      this.$store.dispatch("recipes/selectRecipe", +$event);
    },
  },
};
</script>

<style></style>
