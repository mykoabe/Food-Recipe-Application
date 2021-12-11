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
          <div
            v-for="(recipe, index) in editorChoice"
            :key="index"
            class="rounded overflow-hidden shadow-lg"
          >
            <img
              class="w-md"
              src="../../assets/images/ranna_wordpress_theme_radiustheme.com_1-530x338.jpg"
              alt="River"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-md mb-2 text-red-600 text-center">
                {{ recipe.food_category.name }}
              </div>
              <p class="text-gray-700 text-center">
                {{ recipe.name }}
              </p>
            </div>
            <div class="text-center">
              <span><i class="far fa-user pr-2"></i>meku</span>
              <span
                ><i class="far fa-clock py-5 px-2"></i
                >{{ recipe.time_to_prepare }}min</span
              >
              <span
                ><i class="far fa-heart px-3"></i>{{ recipe.likes }} like</span
              >
              <span v-if="recipe.rating <= 2">
                <span
                  ><i class="fas fa-star text-yellow-300 text-sm pl-3"></i
                ></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
              </span>
              <span v-if="recipe.rating < 1">
                <span
                  ><i class="fas fa-star text-gray-300 text-sm pl-3"></i
                ></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
              </span>
              <span v-if="recipe.rating === 3">
                <span
                  ><i class="fas fa-star text-yellow-300 text-sm pl-3"></i
                ></span>
                <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
                <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
              </span>
              <span v-else>
                <span
                  ><i class="fas fa-star text-yellow-300 text-sm pl-3"></i
                ></span>
                <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
                <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
                <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
                <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
              </span>
            </div>
            <div class="text-center mx-7">
              {{ recipe.description }}
            </div>
            <div class="flex ml-24 mt-8">
              <button
                class="
                  bg-red-500
                  hover:bg-red-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  border border-red-700
                  rounded
                  mb-8
                "
              >
                Continue Reading
              </button>
            </div>
          </div>
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
import { mapState } from "vuex";
export default {
  components: { MostRatedRecipe },
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
