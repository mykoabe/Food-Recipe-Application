<template>
  <section>
    <div
      class="
        grid
        mt-4
        flex-1
        sm:gap-5
        gap-9
        md:grid-cols-6
        grid-cols-1
        sm:grid-cols-2
      "
    >
      <div
        class="
          max-w-sm
          rounded-lg
          overflow-hidden
          shadow-xl
          hover:bg-red-500 hover:text-white
        "
        v-for="category in categories"
        :key="category.id"
      >
        <div class="mx-16 my-4 border-b border-gray-light">
          <div class="font-medium text-base text-gray-darker mb-4 block">
            <img :src="category.imageUrl" />
          </div>

          <p class="font-bold text-lg text-gray-dark mb-4 ml-2">
            {{ category.name }}
          </p>
        </div>
        <div class="flex-grow text-center">
          {{ category.count }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          imageUrl:
            "https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-breakfast-hotel-essentials-justicon-lineal-color-justicon.png",
          name: "Beakfast",
          count: "(3)",
        },
        {
          id: 1,
          imageUrl:
            "https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-dinner-new-years-eve-justicon-flat-justicon.png",
          name: "Dinner",
          count: "(2)",
        },
        {
          id: 1,
          imageUrl:
            "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-salad-food-levitation-icongeek26-linear-colour-icongeek26.png",
          name: "Salad",
          count: "(3)",
        },
        {
          id: 1,
          imageUrl:
            "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-lunch-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
          name: "Lunch",
          count: "(4)",
        },
        {
          id: 1,
          imageUrl:
            "https://img.icons8.com/color-glass/50/000000/street-food.png",
          name: "Desert",
          count: "(6)",
        },
        {
          id: 1,
          imageUrl:
            "https://img.icons8.com/external-linector-flat-linector/64/000000/external-drink-horror-decoration-linector-flat-linector.png",
          name: "Drink",
          count: "(5)",
        },
      ],
    };
  },
};
</script>

<style></style>
