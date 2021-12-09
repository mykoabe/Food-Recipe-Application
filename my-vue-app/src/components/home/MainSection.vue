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
        <TheFooter />
    </div>
  </section>
</template>
<script>
import BaseCard from "../ui/BaseCard.vue";
import CategorySection from "./CategorySection.vue";
import TrendingRecipes from "./TrendingRecipes.vue";
import TheFooter from "../shared/TheFooter.vue";
export default {
  components: {
    BaseCard,
    CategorySection,
    TrendingRecipes,
    TheFooter,
  },
};
</script>

<style></style>
