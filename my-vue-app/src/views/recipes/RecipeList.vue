<template>
<section>
  <div class="recipes">
    <div class="container">
      <div class="row content">
        <div class="col-md-12"><h2 class="text-center">Recipes</h2></div>
      </div>
      <h1 v-if="isLoading">IsLoading</h1>
      <div class="row" v-for="(recipe, index) in recipes" :key="index">
        <div class="col-md-12 reset-padding">
          <div class="one-recipe">
            <div class="recipe-header">
              <div class="recipe-title" @click="goToRecipe(recipe.id);">
                <h3>{{ recipe.name }}</h3>
              </div>
              <p class="recipe-description">{{ recipe.description }}</p>
            </div>
            <div class="recipe-body">
              <div class="recipe-servings">
                <span class="label">Servings: </span
                ><span>{{ recipe.number_of_servings }}</span>
              </div>
              <div class="recipe-calories">
                <span class="label">Calories: </span
                ><span>{{ recipe.calories_per_serving }}</span>
              </div>
              <div class="recipe-time">
                <span class="label">Time to prepare: </span
                ><span>{{ recipe.time_to_prepare }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';


export default {
  name: 'RecipeList',
  computed: {
    ...mapState('recipes', { recipes: 'all', isLoading: 'isLoading' })
  },
  mounted() {
    this.$store.dispatch('recipes/findAll');
  },
  methods: {
    goToRecipe($event) {
      this.$store.dispatch('recipes/selectRecipe', +$event);
    }
  }
};
</script>
