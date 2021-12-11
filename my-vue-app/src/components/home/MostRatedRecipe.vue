<template>
  <section>
    <div id="header">
      <h2 class="text-2xl font-bold">Most Rated Recipes</h2>
      <div class="w-full bg-gray-200 rounded-full h-0.5 my-5">
        <div class="bg-red-600 h-0.5 rounded-full" style="width: 10%"></div>
      </div>
    </div>

    <div
      v-for="(recipe, index) in mostRated"
      :key="index"
      class="grid grid-cols-2 gap-9 my-8"
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
          <span><i class="fas fa-star text-gray-300 text-sm pl-3"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
        </span>

        <span v-if="recipe.rating === 2">
          <span><i class="fas fa-star text-yellow-300 text-sm pl-3"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
        </span>

        <span v-if="recipe.rating === 3">
          <span><i class="fas fa-star text-yellow-300 text-sm "></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
        </span>

        <span v-if="recipe.rating === 4">
          <span><i class="fas fa-star text-yellow-300 text-sm "></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
        </span>

        <span v-if="recipe.rating > 4">
          <span><i class="fas fa-star text-yellow-300 text-sm "></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
        </span>
        <span class="pl-1">({{ recipe.rating }}/5)</span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("recipes", {
      mostRated: "rated",
      isLoading: "isLoading",
    }),
  },
  mounted() {
    this.$store.dispatch("recipes/findMostRated");
  },
  methods: {
    goToRecipe($event) {
      this.$store.dispatch("recipes/selectRecipe", +$event);
    },
  },
};
</script>

<style></style>
