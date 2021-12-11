<template>
  <section>
    <!-- Content [Main and right side bar]-->
    <h2 v-if="isLoading">IsLoading</h2>
    <div v-if="!isLoading" class="max-w-7xl mx-auto grid grid-cols-3 gap-6">
      <!-- Main content -->
      <div class="col-span-2">
        <div class="flex justify-between pt-2">
          <div class="flex space-x-5">
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
              Sep 8, 2019
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
              Sep 8, 2019
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
              Sep 8, 2019
            </div>
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <p>0/5</p>
            </div>
          </div>

          <div class="flex divide-x-2 divide-gray-300">
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
          </div>
        </div>
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
            Sep 8, 2019
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
            Sep 8, 2019
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
            Sep 8, 2019
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
                <p>20 Mins</p>
              </div>
            </div>
          </div>
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
                <p>20 Mins</p>
              </div>
            </div>
          </div>
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
                <p>20 Mins</p>
              </div>
            </div>
          </div>
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
                <p>20 Mins</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Description -->
        <div class="my-8">
          <p class="text-justify text-gray-500 text-lg">
            The doner is a Turkish creation of meat, often lamb, but not
            necessarily so, that is seasoned, stacked in a cone shape, and
            cooked slowly on a vertical rotisserie. As the outer layers of the
            meat cooks, it’s shaved off and served in a pita or other flatbread
            with vegetables and sauce. Doner is the “mother,” as it were, of
            Arabic shawarma, Mexican al pastor, and the popular Greek gyros.
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
              <div>
                <input type="checkbox" />
                <span>4 kg Garlic</span>
              </div>
              <div>
                <input type="checkbox" />
                <span>4 kg Garlic</span>
              </div>
              <div>
                <input type="checkbox" />
                <span>4 kg Garlic</span>
              </div>
              <div>
                <input type="checkbox" />
                <span>4 kg Garlic</span>
              </div>
              <div>
                <input type="checkbox" />
                <span>4 kg Garlic</span>
              </div>
              <div>
                <input type="checkbox" />
                <span>4 kg Garlic</span>
              </div>
              <div>
                <input type="checkbox" />
                <span>4 kg Garlic</span>
              </div>
            </div>
          </div>
          <div class="bg-red-50">
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
            <div class="pl-7 py-3">Per Serving: 250 gm</div>
            <div
              class="
                bg-white
                flex flex-col
                m-4
                shadow-md
                space-y-4
                p-5
                divide-y-2 divide-dashed
              "
            >
              <p class="flex justify-end text-sm text-gray-400">Daily Value*</p>
              <div class="flex justify-between">
                <p>Total Fat: 45.8g</p>
                <p>32 %</p>
              </div>
              <div class="flex justify-between">
                <p>Total Fat: 45.8g</p>
                <p>32 %</p>
              </div>
              <div class="flex justify-between">
                <p>Total Fat: 45.8g</p>
                <p>32 %</p>
              </div>
              <div class="flex justify-between">
                <p>Total Fat: 45.8g</p>
                <p>32 %</p>
              </div>
              <div class="flex justify-between">
                <p>Total Fat: 45.8g</p>
                <p>32 %</p>
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
          Sep 8, 2019
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
          Sep 8, 2019
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
          Sep 8, 2019
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
          Sep 8, 2019
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
          Sep 8, 2019
          {{recipe.name}}
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
