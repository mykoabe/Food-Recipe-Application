<template>
  <section>
    <!-- Content [Main and right side bar]-->
    <div v-if="isLoading" class="flex justify-center items-center">
      <div
        class="
          animate-spin
          rounded-full
          h-32
          w-32
          border-t-2 border-b-2 border-purple-500
        "
      ></div>
    </div>
    <div v-if="!isLoading" class="max-w-7xl mx-auto grid grid-cols-3 gap-6">
      <!-- Main content -->
      <div class="col-span-2">
        <div class="flex justify-start py-4 space-x-4">
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            December 10 2021
          </div>
        </div>
        <!-- image -->
        <img
          class="rounded-md"
          src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/07/blog17.jpg"
          alt=""
        />
        <!-- Four square boxed under the image -->
        <div class="flex justify-between space-x-1 py-1">
          <div class="bg-gray-200 flex-1 py-6 px-2">
            <div class="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p>Prep Time</p>
                <p>{{ recipe.time_to_perpare }} Mins</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Description -->
        <div class="my-8">
          <p class="text-justify text-gray-500 text-lg">
            {{ recipe.description }}
          </p>
          <p class="text-justify text-gray-500 text-lg py-5">
            Although the sliced meat can be served on a platter with rice and
            cooked vegetables, it’s most popular as a sandwich eaten as fast
            street food. You might find tomatoes, lettuce, cucumbers, red onion,
            cucumbers, or pickles inside the pita, and the sauce might be Greek
            yogurt-based tzatziki or Middle Eastern tahini. <br /><br />
            Making an authentic doner kebab at home can be a bit tricky although
            still possible if you have the set up for a slow cooking vertical
            rotating spit. For most home kitchens, however, some improvisation
            will be required. But the flavors and spices will be easier to
            recreate than the exact shape. You can form ground lamb into balls
            and thread them on skewers, but the easiest way to get the sliced
            look of a street doner kebab is to make a sort of meatloaf.
          </p>
        </div>
        <!-- [Ingredientes and Nutrition] -->
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-gray-100">
            <div class="flex justify-start pl-7 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Ingredients
            </div>
            <div class="bg-white flex flex-col m-4 shadow-md space-y-4 p-5">
              <div
                v-for="(ingredient, i) in recipe.recipe_ingredients"
                :key="i"
              >
                <input type="checkbox" />
                <span>{{ ingredient.ingredient.name }}</span>
              </div>
              <div>
                <input type="checkbox" />
                <span>4 kg Garlic</span>
              </div>
              <div>
                <input type="checkbox" />
                <span>1 injera</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Directions -->
        <div class="my-12">
          <p class="py-4 font-bold text-3xl">Directions</p>
          <p>
            You can make the kebab at home. The homemade version of your
            favourite Chicken Doner Kebab! Tastes remarkably similar to the
            diner kebab meat from your favourite takeout store. I've baked it,
            but imagine it rotisserie style over the BBQ or charcoal! You will
            need 4 long metal skewers for this, around 30cm / 12" long.
          </p>
          <div class="grid grid-cols-9 gap-9 pt-4">
            <div class="col-span-2">
              <div class="bg-red-600 p-3 text-center row-span-1 rounded-lg">
                <p class="text-white font-bold">Step 1</p>
              </div>
            </div>
            <div class="bg-yellow-50 col-span-7 space-y-7">
              <img
                src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/07/bread-brunch-candle-1345190-1240x578.jpg"
                alt=""
              />
              <p>
                You can make the kebab at home. The homemade version of your
                favourite Chicken Doner Kebab! Tastes remarkably similar to the
                diner kebab meat from your favourite takeout store. I've baked
                it, but imagine it rotisserie style over the BBQ or charcoal!
                You will need 4 long metal skewers for this, around 30cm / 12"
                long.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-9 gap-9 pt-4">
            <div class="col-span-2">
              <div class="bg-red-600 p-3 text-center row-span-1 rounded-lg">
                <p class="text-white font-bold">Step 1</p>
              </div>
            </div>
            <div class="bg-yellow-50 col-span-7 space-y-7">
              <img
                src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/07/bread-brunch-candle-1345190-1240x578.jpg"
                alt=""
              />
              <p>
                You can make the kebab at home. The homemade version of your
                favourite Chicken Doner Kebab! Tastes remarkably similar to the
                diner kebab meat from your favourite takeout store. I've baked
                it, but imagine it rotisserie style over the BBQ or charcoal!
                You will need 4 long metal skewers for this, around 30cm / 12"
                long.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-9 gap-9 pt-4">
            <div class="col-span-2">
              <div class="bg-red-600 p-3 text-center row-span-1 rounded-lg">
                <p class="text-white font-bold">Step 1</p>
              </div>
            </div>
            <div class="bg-yellow-50 col-span-7 space-y-7">
              <img
                src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/07/bread-brunch-candle-1345190-1240x578.jpg"
                alt=""
              />
              <p>
                You can make the kebab at home. The homemade version of your
                favourite Chicken Doner Kebab! Tastes remarkably similar to the
                diner kebab meat from your favourite takeout store. I've baked
                it, but imagine it rotisserie style over the BBQ or charcoal!
                You will need 4 long metal skewers for this, around 30cm / 12"
                long.
              </p>
            </div>
          </div>
          <div class="ml-36 mt-8">
            <span v-if="!liked"
              ><i
                @click.prevent="likeRecipe"
                class="far fa-heart fa-2x px-3"
              ></i
              >{{ recipe.likes }} like
            </span>
            <span v-if="liked"
              ><i
                @click.prevent="likeRecipe"
                class="fas fa-heart fa-2x px-3 text-red-500 font-bold"
              ></i
              >{{ recipe.likes }} unlike
            </span>
          </div>
        </div>
      </div>

      <!-- Right side bar -->
      <div class="space-y-4">
        <!-- categories -->
        <p class="py-4 font-semibold text-1xl">Directions</p>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Dec 7, 2021
        </div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Dec 7, 2021
        </div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Dec 7, 2021
        </div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Dec 7, 2021
        </div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Dec 7, 2021
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Waiting from "../shared/Waiting.vue";

export default {
  name: "EditRecipe",
  data() {
    return {
      recipe_ingredient: {
        ingredient_id: "",
        quantity: 0,
        comments: "",
      },
      liked: false,
    };
  },
  components: {
    Waiting,
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
    console.log(this.recipe.likes);
  },
  methods: {
    likeRecipe() {
      if (!this.liked) {
        this.recipe.likes = this.recipe.likes + 1;
        this.liked = true;
      } else {
        this.recipe.likes = this.recipe.likes - 1;
        this.liked = false;
      }

      console.log(this.recipe.likes);
    },
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
