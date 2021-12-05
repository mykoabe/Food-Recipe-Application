import router from "../../router";
import apolloClient from "../../services/apollo/index";
import { authService } from "../../services/auth/auth";

import {
  RECIPES_QUERY,
  FOOD_CATEGORY_RECIPE_QUERY,
  INGREDIENTS_QUERY,
  RECIPE_INGREDIENT_MUTATION,
  RECIPE_UPDATE_MUTATION,
} from "../../queries/index";

let state = {
  all: [],
  one: "",
  foodCategoryList: [],
  ingredientList: [],
  isLoading: false,
};

const actions = {
  async findAll({ commit }) {
    commit("setLoading", true);
    const response = await apolloClient.query({
      query: RECIPES_QUERY,
    });
    console.log(response.errors[0].message);
  },
  selectRecipe({ commit }, recipeId) {
    commit("setRecipe", recipeId);
    router.push({ name: "editRecipe", params: { recipeId: recipeId } });
  },
  async fetchFoodCategoryList({ commit }) {
    const response = await apolloClient.query({
      query: FOOD_CATEGORY_RECIPE_QUERY,
    });
    commit("setFoodCategoryList", response.data.food_category);
  },
  async fetchIngredientList({ commit }) {
    const response = await apolloClient.query({ query: INGREDIENTS_QUERY });
    commit("setIngredientList", response.data.ingredient);
  },
  async insertRecipeIngredient({ dispatch, commit }, recipeIngredient) {
    const response = await apolloClient.mutate({
      mutation: RECIPE_INGREDIENT_MUTATION,
      variables: {
        ...recipeIngredient,
      },
    });

    dispatch("findAll");
  },
  async updateRecipe({ dispatch, commit }, recipe) {
    const response = await apolloClient.mutate({
      mutation: RECIPE_UPDATE_MUTATION,
      variables: {
        ...recipe,
        created_by: authService.getUserId(),
      },
    });

    window.location.assign("/recipes");
  },
};

const mutations = {
  setRecipe(state, recipeId) {
    state.one = recipeId;
  },
  setFoodCategoryList(state, foodCategoryList) {
    state.foodCategoryList = [...foodCategoryList];
  },
  setIngredientList(state, ingredientList) {
    state.ingredientList = [...ingredientList];
  },
  setLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
};

const getters = {
  selectedRecipe(state) {
    return state.all.find((item) => item.id == state.one);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
