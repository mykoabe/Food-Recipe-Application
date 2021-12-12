<template>
  <div class="container">
    <div class="recipe">
      <Waiting v-if="isLoading" />
      <div class="recipe-body" v-if="!isLoading">
        <MainAndRightSide />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Waiting from "../shared/Waiting.vue";
import MainAndRightSide from "./MainAndRightSide.vue";
export default {
  name: "EditRecipe",
  data() {
    return {
      recipe_ingredient: {
        ingredient_id: "",
        quantity: 0,
        comments: "",
      },
    };
  },
  components: {
    Waiting,
    MainAndRightSide,
  },
  computed: {
    ...mapState("recipes", {
      foodCategoryList: "foodCategoryList",
      ingredientList: "ingredientList",
      isLoading: "isLoading",
    }),
    ...mapGetters("recipes", { recipe: "selectedRecipe" }),
  },
  mounted() {
    this.$store.dispatch("recipes/fetchFoodCategoryList");
    this.$store.dispatch("recipes/fetchIngredientList");
  },
  methods: {
    updatRecipe($event) {
      const {
        id,
        name,
        description,
        instructions,
        food_category_id,
        number_of_servings,
        time_to_prepare,
        calories_per_serving,
        source,
        vegetarian,
      } = this.recipe;

      this.$store.dispatch("recipes/updateRecipe", {
        id,
        name,
        description,
        instructions,
        food_category_id,
        number_of_servings,
        time_to_prepare,
        calories_per_serving,
      });
    },
    addIngredient($event) {
      const payload = {
        ...this.recipe_ingredient,
        quantity: +this.recipe_ingredient.quantity,
        recipe_id: this.recipe.id,
      };

      this.$store.dispatch("recipes/insertRecipeIngredient", payload);

      this.recipe_ingredient = {
        ingredient_id: "",
        quantity: 0,
        comments: "",
      };
    },
  },
};
</script>
