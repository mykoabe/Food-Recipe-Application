<template>
  <section>
    <TheHeader />
    <div id="category_section" class="lg:mx-32 sm:mt-6 md:mx-6 mx-6">
      <div class="grid md:grid-cols-3 gap-12 mt-8 grid-cols-1">
        <div v-if="isLoading">Is Loading</div>
        <bookmark-item
          v-for="(recipe, index) in cartItems"
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
        </bookmark-item>
      </div>
    </div>
  </section>
</template>

<script>
import TheHeader from "../shared/TheHeader.vue";
import TheFooter from "../shared/TheFooter.vue";
import BookmarkItem from "../bookmark/BookmarkItem.vue";
import { mapGetters, mapState } from "vuex";
export default {
  components: {
    TheHeader,
    TheFooter,
    BookmarkItem,
  },

  computed: {
    ...mapGetters("carts", { cartItems: "cartItems" }),
    ...mapState("recipes", {
      isLoading: "isLoading",
    }),
  },
  mounted() {
    console.log(this.cartItems);
  },
};
</script>
