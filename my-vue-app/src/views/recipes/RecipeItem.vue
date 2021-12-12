<template>
  <section>
    <div class="rounded overflow-hidden shadow-lg">
      <img
        class="w-md"
        src="../../assets/images/ranna_wordpress_theme_radiustheme.com_1-530x338.jpg"
        alt="River"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-md mb-2 text-red-600 text-center">
          {{ name }}
        </div>
        <p class="text-gray-700 text-center">
          {{ description }}
        </p>
      </div>
      <div class="text-center">
        <span><i class="far fa-user pr-2"></i>by</span>
        <span
          ><i class="far fa-clock py-5 px-2"></i>{{ time_to_perpare }}min</span
        >
        <span><i class="far fa-heart px-3"></i>{{ likes }} like</span>
        <span v-if="rating <= 1">
          <span><i class="fas fa-star text-gray-300 text-sm pl-3"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
        </span>

        <span v-if="rating === 2">
          <span><i class="fas fa-star text-yellow-300 text-sm pl-3"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
        </span>

        <span v-if="rating === 3">
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
        </span>

        <span v-if="rating === 4">
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
        </span>

        <span v-if="rating > 4">
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
          <span><i class="fas fa-star text-yellow-300 text-sm"></i></span>
        </span>
      </div>
      <div class="text-center mx-7">
        {{ description }}
      </div>
      <div class="flex ml-8 space-x-3 mt-8">
        <button
          @click.prevent="goToRecipe(id)"
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

        <button
          @click.prevent="addToBookmark"
          class="bg-gray-300 hover:bg-gray-500 text-black rounded mb-8 px-3"
        >
          Add to bookmark
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RecipeItem",
  props: [
    "id",
    "name",
    "description",
    "time_to_perpare",
    "number_of_servings",
    "vegetarian",
    "instructions",
    "calories_per_serving",
    "rating",
    "likes",
  ],
  methods: {
    goToRecipe($event) {
      this.$store.dispatch("recipes/selectRecipe", +$event);
    },
    addToBookmark() {
      this.$store.dispatch("carts/addToBookmark", {
        id: this.id,
        name: this.name,
        description: this.description,
        time_to_perpare: this.time_to_perpare,
        number_of_servings: this.number_of_servings,
        vegetarian: this.vegetarian,
        instructions: this.instructions,
        calories_per_serving: this.calories_per_serving,
        likes: this.likes,
        rating: this.rating,
      });
    },
  },
};
</script>

<style></style>
