import apolloClient from "../../services/apollo";
import { authService } from "../../services/auth/auth";
import router from "../../router";

import {
  RECIPES_QUERY,
  RECIPES_QUERY_EDITOR,
  RECIPES_QUERY_SUGGESTION,
  RECIPES_QUERY_RATED,
  RECIPES_QUERY_TRENDING,
  RECIPES_QUERY_HOME,
  FOOD_CATEGORY_RECIPE_QUERY,
  INGREDIENTS_QUERY,
  RECIPE_INGREDIENT_MUTATION,
  RECIPE_INSERT_MUTATION,
} from "../../queries";

let state = {
  all: [],
  editor: [],
  home: [],
  suggestion: [],
  rated: [],
  trending: [],
  one: "",
  foodCategoryList: [],
  ingredientList: [],
  isLoading: false,
};
const idToken = authService.getAccessToken();

const actions = {
  async findAll({ commit }) {
    commit("setLoading", true);
    const response = await apolloClient(idToken).query({
      query: RECIPES_QUERY,
    });
    console.log(response);
    commit("setRecipeList", response.data.recipe);
  },
  async findEditorsChoice({ commit }) {
    commit("setLoading", true);
    const response = await apolloClient(idToken).query({
      query: RECIPES_QUERY_EDITOR,
    });
    commit("setEditorsChoice", response.data.recipe);
  },
  async findEditorSuggestions({ commit }) {
    commit("setLoading", true);
    const response = await apolloClient(idToken).query({
      query: RECIPES_QUERY_SUGGESTION,
    });
    commit("setEditorSuggestion", response.data.recipe);
  },
  async findMostRated({ commit }) {
    commit("setLoading", true);
    const response = await apolloClient(idToken).query({
      query: RECIPES_QUERY_RATED,
    });
    commit("setMostRated", response.data.recipe);
  },
  async findTrendingRecipes({ commit }) {
    commit("setLoading", true);
    const response = await apolloClient(idToken).query({
      query: RECIPES_QUERY_TRENDING,
    });
    commit("setTrendingRecipe", response.data.recipe);
  },
  async findForHome({ commit }) {
    commit("setLoading", true);
    const response = await apolloClient(idToken).query({
      query: RECIPES_QUERY_HOME,
    });
    commit("setHomeRecipes", response.data.recipe);
  },
  selectRecipe({ commit }, recipeId) {
    commit("setRecipe", recipeId);
    router.push({ name: "recipeDetail", params: { recipeId: recipeId } });
  },

  async fetchFoodCategoryList({ commit }) {
    const response = await apolloClient(idToken).query({
      query: FOOD_CATEGORY_RECIPE_QUERY,
    });
    commit("setFoodCategoryList", response.data.food_category);
  },
  async fetchIngredientList({ commit }) {
    const response = await apolloClient(idToken).query({
      query: INGREDIENTS_QUERY,
    });
    console.log(response.data.ingredient);
    commit("setIngredientList", response.data.ingredient);
  },
  async insertRecipeIngredient({ dispatch, commit }, recipeIngredient) {
    const response = await apolloClient(idToken).mutate({
      mutation: RECIPE_INGREDIENT_MUTATION,
      variables: {
        ...recipeIngredient,
      },
    });

    dispatch("findAll");
  },

  async insertRecipes({ dispatch, commit }, recipe) {
    const response = await apolloClient(idToken).mutate({
      mutation: RECIPE_INSERT_MUTATION,
      variables: {
        ...recipe,
        user_id: authService.getUserId(),
      },
    });
    window.location.assign("/recipes");
  },
  
  // async addRecipes(context, recipe){
  //   const recipeData = {
  //     name: recipe.recipe,
  //     description: recipe.descr,
  //     time_to_prepare: recipe.prep,
  //     number_of_servings: recipe.no_of_servings,
  //     vegiterian: recipe.vegiterian,
  //     instructions: recipe.instruction,
  //     rating: 0,
  //   }
  //   const response = await apolloClient(idToken).mutate({
  //     mutation: RECIPE_UPDATE_MUTATION,
  //     variables: {
  //       ...recipe,
  //       created_by: authService.getUserId(),
  //     },
  //   });
  //   context.commit("addRecipe", recipeData)
  // }
};

const mutations = {
  setRecipeList(state, recipeList) {
    state.all = [...recipeList];
    state.isLoading = false;
  },
  setEditorsChoice(state, editorRecipe) {
    state.editor = [...editorRecipe];
    state.isLoading = false;
  },
  setEditorSuggestion(state, editorSuggestion) {
    state.suggestion = [...editorSuggestion];
    state.isLoading = false;
  },
  setMostRated(state, mostRated) {
    state.rated = [...mostRated];
    state.isLoading = false;
  },
  setTrendingRecipe(state, trending) {
    state.trending = [...trending];
    state.isLoading = false;
  },
  setHomeRecipes(state, home) {
    state.home = [...home];
    state.isLoading = false;
  },
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
  addRecipe(state, payload){
    state.all.push(payload) 
  }
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
