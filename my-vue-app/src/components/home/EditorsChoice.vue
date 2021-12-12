<template>
  <section>
    <div id="editors_choice" class="mt-10">
      <div id="header">
        <h2 class="text-2xl font-bold">Editors Choice</h2>
        <div class="w-full bg-gray-200 rounded-full h-0.5 my-5">
          <div class="bg-red-600 h-0.5 rounded-full" style="width: 10%"></div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-12 mt-8 grid-cols-1">
        <!-- First card left column -->
        <div id="first_inline">
          <div v-if="isLoading">Is Loading</div>

          <recipe-item
            v-for="(recipe, index) in editorChoice"
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

        <!-- second column starts here -->
        <div id="second_inline">
          <div class="grid grid-rows-4 space-y-4">
            <div
              v-for="(recipe, index) in suggestion"
              :key="index"
              class="grid grid-cols-2 gap-9"
            >
              <div class="">
                <img
                  class="w-full rounded-lg"
                  src="../../assets/images/ranna_wordpress_theme_radiustheme.com_1-530x338.jpg"
                  alt="River"
                />
              </div>

              <div>
                <p>{{ recipe.name }}</p>

                <span v-if="recipe.rating <= 1">
                  <span
                    ><i class="fas fa-star text-gray-300 text-sm pl-3"></i
                  ></span>
                  <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                  <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                  <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                  <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                </span>

                <span v-if="recipe.rating === 2">
                  <span
                    ><i class="fas fa-star text-yellow-300 text-sm pl-3"></i
                  ></span>
                  <span
                    ><i class="fas fa-star text-yellow-300 text-sm"></i
                  ></span>
                  <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                  <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                  <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                </span>

                <span v-if="recipe.rating === 3">
                  <span
                    ><i class="fas fa-star text-yellow-300 text-sm pl-3"></i
                  ></span>
                  <span
                    ><i class="fas fa-star text-yellow-300 text-sm"></i
                  ></span>
                  <span
                    ><i class="fas fa-star text-yellow-300 text-sm"></i
                  ></span>
                  <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                  <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                </span>

                <span v-if="recipe.rating === 4">
                  <span
                    ><i class="fas fa-star text-yellow-300 text-sm pl-3"></i
                  ></span>
                  <span
                    ><i class="fas fa-star text-yellow-300 text-sm"></i
                  ></span>
                  <span
                    ><i class="fas fa-star text-yellow-300 text-sm"></i
                  ></span>
                  <span
                    ><i class="fas fa-star text-yellow-300 text-sm"></i
                  ></span>
                  <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                </span>

                <span v-if="recipe.rating > 4">
                  <span
                    ><i class="fas fa-star text-yellow-300 text-sm pl-3"></i
                  ></span>
                  <span
                    ><i class="fas fa-star text-yellow-300 text-sm"></i
                  ></span>
                  <span
                    ><i class="fas fa-star text-yellow-300 text-sm"></i
                  ></span>
                  <span
                    ><i class="fas fa-star text-yellow-300 text-sm"></i
                  ></span>
                  <span
                    ><i class="fas fa-star text-yellow-300 text-sm"></i
                  ></span>
                </span>
                <span class="pl-1">({{ recipe.rating }}/5)</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Second Column ends here -->
      </div>
    </div>
  </section>
</template>

<script>
import MostRatedRecipe from "./MostRatedRecipe.vue";
import RecipeItem from "../../views/recipes/RecipeItem.vue";
import { mapState } from "vuex";
export default {
  components: { MostRatedRecipe, RecipeItem },
  computed: {
    ...mapState("recipes", {
      recipes: "all",
      editorChoice: "editor",
      suggestion: "suggestion",
      isLoading: "isLoading",
    }),
  },
  mounted() {
    this.$store.dispatch("recipes/findEditorsChoice");
    this.$store.dispatch("recipes/findEditorSuggestions");
  },
  methods: {
    goToRecipe($event) {
      this.$store.dispatch("recipes/selectRecipe", +$event);
    },
  },
};
</script>

<style></style>
