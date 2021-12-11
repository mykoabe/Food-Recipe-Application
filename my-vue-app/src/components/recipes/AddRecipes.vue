<template>
  <section>
    <div id="trending_recipes" class="lg:mx-32 sm:mt-6 md:mx-6 mx-6">
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6 font-serif">
          <div class="mt-5 md:mt-0 md:col-span-3">
            <form @submit.prevent="submitForm" action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md bg-red-500">
                <div class="px-4 py-5 bg-gray-100 sm:p-6">
                  <div class="font-bold text-5xl text-center my-10">
                    Add Recipe
                  </div>
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="recipe_name"
                        class="block text-xl font-bold text-gray-700"
                        >Recipe Name</label
                      >
                      <input
                        v-model.trim="recipeName.val"
                        @blur="clearValidity('recipeName')"
                        type="text"
                        name="recipe_name"
                        id="recipe_name"
                        autocomplete="recipe-name"
                        placeholder="enter recipe name"
                        class="
                          mt-1
                          h-8
                          block
                          w-full
                          shadow-sm
                          sm:text-sm
                          rounded-md
                          outline-none
                          pl-4
                        "
                      />
                      <p v-if="!recipeName.isValid" class="text-red-500">
                        Recipe Name must not be empty
                      </p>
                    </div>

                    <div class="col-span-6 w-60 sm:col-span-3">
                      <label
                        for="prep_time"
                        class="block text-xl text-black font-bold"
                        >Preparation time</label
                      >
                      <input
                        v-model.trim="prep_time.val"
                        @blur="clearValidity('prep_time')"
                        type="text"
                        name="prep_time"
                        id="prep_time"
                        autocomplete="preparation-time"
                        class="
                          mt-1
                          h-8
                          block
                          w-full
                          shadow-sm
                          sm:text-sm
                          rounded-md
                          outline-none
                          pl-4
                        "
                      />
                      <p v-if="!prep_time.isValid" class="text-red-500">
                        Preparation time must not be empty
                      </p>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="country"
                        class="block text-xl font-bold text-black"
                      >
                        Ingredients</label
                      >
                      <select
                        v-model.trim="ingredients.val"
                        @blur="clearValidity('ingredients')"
                        id="ingredients"
                        name="ingredients"
                        autocomplete="ingredients"
                        class="
                          mt-1
                          block
                          w-full
                          py-2
                          px-3
                          border border-gray-300
                          bg-white
                          rounded-md
                          shadow-sm
                          focus:outline-none
                          focus:ring-indigo-500
                          focus:border-indigo-500
                          sm:text-sm
                        "
                      >
                        <option class="my-8">Bread</option>
                        <option class="my-8">Injera</option>
                        <option>Slices</option>
                      </select>
                      <p v-if="!ingredients.isValid" class="text-red-500">
                        Ingredient must not be empty
                      </p>
                    </div>

                    <div class="col-span-6">
                      <label
                        for="street_address"
                        class="inline text-xl font-bold text-black"
                        >Description</label
                      >
                      <textarea
                        v-model.trim="description.val"
                        @blur="clearValidity('description')"
                        name="description"
                        class="
                          resize
                          mt-1
                          h-8
                          block
                          shadow-sm
                          sm:text-sm
                          rounded-md
                          outline-none
                          pl-4
                        "
                      ></textarea>
                      <p class="mt-2 text-md text-black">
                        Brief description for your Recipe.
                      </p>
                      <p v-if="!description.isValid" class="text-red-500">
                        Description must not be empty
                      </p>
                    </div>
                    <div class="col-span-6">
                      <label
                        for="instruction"
                        class="inline text-xl font-bold text-black"
                        >Instructions</label
                      >
                      <textarea
                        v-model.trim="instruction.val"
                        name="instruction"
                        class="
                          resize
                          mt-1
                          h-8
                          block
                          shadow-sm
                          sm:text-sm
                          rounded-md
                          outline-none
                          pl-4
                        "
                      ></textarea>
                    </div>

                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        for="no_of_serving"
                        class="block text-xl font-bold text-black"
                        >No of Servings</label
                      >
                      <input
                        v-model.trim="no_of_servings.val"
                        type="text"
                        name="no_of_serving"
                        id="city"
                        class="
                          mt-1
                          h-8
                          block
                          w-full
                          shadow-sm
                          sm:text-sm
                          rounded-md
                          outline-none
                          pl-4
                        "
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2 ml-10">
                      <label class="inline-flex items-center">
                        <input
                          v-model.trim="vegiterian.val"
                          type="checkbox"
                          class="form-checkbox h-5 w-5"
                          checked
                        />
                        <span class="block text-xl font-bold text-black ml-4"
                          >Vegetarian</span
                        >
                      </label>
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2 ml-10">
                      <label
                        for="calories"
                        class="block text-xl font-bold text-black"
                        >Calories</label
                      >
                      <input
                        v-model.trim="calories.val"
                        type="text"
                        name="calories"
                        id="calories"
                        class="
                          mt-1
                          h-8
                          block
                          w-full
                          shadow-sm
                          sm:text-sm
                          rounded-md
                          outline-none
                          pl-4
                        "
                      />
                    </div>
                  </div>
                  <div>
                    <label class="block text-xl text-black font-bold md:mt-8">
                      Recipe Image
                    </label>
                    <div
                      class="
                        mt-1
                        flex
                        justify-center
                        px-6
                        pt-5
                        pb-6
                        border-2 border-gray-300 border-dashed
                        rounded-md
                      "
                    >
                      <div class="space-y-1 text-center">
                        <svg
                          class="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="True"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                          <label
                            for="file-upload"
                            class="
                              relative
                              cursor-pointer
                              bg-white
                              rounded-md
                              font-medium
                              text-indigo-600
                              hover:text-indigo-500
                              focus-within:outline-none
                              focus-within:ring-2
                              focus-within:ring-offset-2
                              focus-within:ring-indigo-500
                            "
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              class="sr-only"
                            />
                          </label>
                          <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 class="text-red-500 bg-white" v-if="!formIsValid">
                  Please fix the above errors and submit again
                </h1>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    class="
                      inline-flex
                      justify-center
                      py-2
                      px-4
                      border border-transparent
                      shadow-sm
                      text-sm
                      font-medium
                      rounded-md
                      text-white
                      bg-indigo-600
                      hover:bg-indigo-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-indigo-500
                    "
                  >
                    Submit Recipe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      recipeName: {
        val: "",
        isValid: true,
      },
      prep_time: {
        val: "",
        isValid: true,
      },
      ingredients: {
        val: "",
        isValid: true,
      },
      description: {
        val: "",
        isValid: true,
      },
      no_of_servings: {
        val: 0,
        isValid: true,
      },
      vegiterian: {
        val: false,
        isValid: true,
      },
      calories: {
        val: 0,
        isValid: true,
      },
      instruction: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.recipeName.val === "") {
        this.recipeName.isValid = false;
        this.formIsValid = false;
      }
      if (this.prep_time.val === "") {
        this.prep_time.isValid = false;
        this.formIsValid = false;
      }
      if (this.ingredients.val === "") {
        this.ingredients.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        recipe: this.recipeName.val,
        prep: this.prep_time.val,
        ingr: this.ingredients.val,
        descr: this.description.val,
        instruction: this.instruction.val,
        no_of_servings: this.no_of_servings.val,
        vegiterian: this.vegiterian.val,
        calories_per_serving: this.calories.val,
      };
      const realData = {
        name: formData.recipe,
        description: formData.descr,
        time_to_perpare: formData.prep,
        number_of_servings: formData.no_of_servings,
        instructions: formData.instruction,
        food_category_id: 1,
        vegetarian: formData.vegiterian,
        calories_per_serving: formData.calories_per_serving,
      };
      console.log(realData);
      this.$store.dispatch("recipes/insertRecipes", realData);
    },
  },
};
</script>

<style></style>
