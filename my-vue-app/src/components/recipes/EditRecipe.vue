<template>
  <section>
    <TheHeader />
    <HeroComponent />
    <MainAndRightSide />
    <TheFooter />
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Waiting from "../shared/Waiting.vue";
import TheFooter from "../shared/TheFooter.vue";
import TheHeader from "../shared/TheHeader.vue";
import HeroComponent from "./HeroComponent.vue";
import MainAndRightSide from "./MainAndRightSide.vue";

export default {
  name: "EditRecipe",
  components: {
    Waiting,
    HeroComponent,
    TheHeader,
    MainAndRightSide,
    TheFooter,
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

<style scoped>
.content {
  margin-top: 20px;
}
.actions {
  display: flex;
  justify-content: space-between;
}
.recipe .recipe-header {
  margin-top: 20px;
  text-align: center;
}
.recipe .recipe-body {
  margin-top: 20px;
}
form table {
  margin-top: 20px;
}
.ingredient-button {
  text-align: right;
}

@media screen and (min-width: 992px) {
  .ingredient-button {
    padding-top: 37px;
  }
}
</style>
