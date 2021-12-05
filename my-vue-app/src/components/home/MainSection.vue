<template>
  <section>
    <div id="collected" class="flex flex-col">
      <div id="main_section" class="flex lg:mx-32 sm:mt-6 md:mx-6 mx-6">
        <BaseCard />
      </div>

      <div id="category_section" class="lg:mx-32 sm:mt-6 md:mx-6 mx-6">
        <CategorySection />
      </div>

      <div id="trending_recipes" class="lg:mx-32 sm:mt-6 md:mx-6 mx-6">
        <TrendingRecipes />
      </div>
    </div>
  </section>
</template>
<script>
import BaseCard from "../ui/BaseCard.vue";
import CategorySection from "./CategorySection.vue";
import TrendingRecipes from "./TrendingRecipes.vue";
export default {
  components: {
    BaseCard,
    CategorySection,
    TrendingRecipes,
  },
};
</script>

<style></style>
