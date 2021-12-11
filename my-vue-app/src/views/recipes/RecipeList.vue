<template>
  <section>
    <TheHeader />
    <div id="category_section" class="lg:mx-32 sm:mt-6 md:mx-6 mx-6">
      <div class="grid md:grid-cols-3 gap-12 mt-8 grid-cols-1">
        <div v-if="isLoading">Is Loading</div>
        <div
          v-for="(recipe, index) in recipes"
          :key="index"
          id="first_inline"
          class=""
        >
          <div class="rounded overflow-hidden shadow-lg">
            <img
              class="w-md"
              src="../../assets/images/ranna_wordpress_theme_radiustheme.com_1-530x338.jpg"
              alt="River"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-md mb-2 text-red-600 text-center">
                {{ recipe.name }}
              </div>
              <p class="text-gray-700 text-center">
                {{ recipe.description }}
              </p>
            </div>
            <div class="text-center">
              <span><i class="far fa-user pr-2"></i>by</span>
              <span><i class="far fa-clock py-5 px-2"></i>44min</span>
              <span><i class="far fa-heart px-3"></i>4 like</span>
              <span
                ><i class="fas fa-star text-gray-300 text-sm pl-3"></i
              ></span>
              <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
              <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
              <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
              <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
            </div>
            <div class="text-center mx-7">
              The doner is a Turkish creation of meat, often lamb, but not
              necessarily so, that is seasoned, stacked in a
            </div>
            <div class="flex ml-24 mt-8">
              <button
                @click.prevent="goToRecipe(recipe.id)"
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
  </section>
</template>

<script>
import { mapState } from "vuex";
import TheHeader from "../../components/shared/TheHeader.vue";

export default {
  name: "RecipeList",
  components: { TheHeader },
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
