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
              <div
                v-for="(trending, index) in trending"
                :key="index"
                id="first_inline"
              >
                <div class="rounded overflow-hidden shadow-lg">
                  <img
                    class="w-md"
                    src="../../assets/images/ranna_wordpress_theme_radiustheme.com_1-530x338.jpg"
                    alt="River"
                  />
                  <div class="px-6 py-4">
                    <div
                      class="font-bold text-md mb-2 text-red-600 text-center"
                    >
                      {{ trending.food_category.name }}
                    </div>
                    <p class="text-gray-700 text-center">
                      {{ trending.description }}
                    </p>
                  </div>
                  <div class="text-center">
                    <span><i class="far fa-user pr-2"></i>by</span>
                    <span><i class="far fa-clock py-5 px-2"></i>44min</span>
                    <span><i class="far fa-heart px-3"></i>4 like</span>
                    <span
                      ><i class="fas fa-star text-gray-300 text-sm pl-3"></i
                    ></span>
                    <span
                      ><i class="fas fa-star text-gray-300 text-sm"></i
                    ></span>
                    <span
                      ><i class="fas fa-star text-gray-300 text-sm"></i
                    ></span>
                    <span
                      ><i class="fas fa-star text-gray-300 text-sm"></i
                    ></span>
                    <span
                      ><i class="fas fa-star text-gray-300 text-sm"></i
                    ></span>
                  </div>
                  <div class="text-center mx-7">
                    The doner is a Turkish creation of meat, often lamb, but not
                    necessarily so, that is seasoned, stacked in a
                  </div>
                  <div class="flex ml-24 mt-8">
                    <button
                      @click.prevent="goToRecipe(trending.id)"
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
import { mapState } from "vuex";
export default {
  components: { MostRatedRecipe, EditorsChoice, SubscribeAndFollow },
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
