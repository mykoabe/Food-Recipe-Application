<template>
  <section>
    <TheHeader />
    <HeroComponent />
    <div class="px-10">
      <SingleRecipe />
    </div>

    <TheFooter />
  </section>
</template>
<script>
import SingleRecipe from "../../components/recipes/SingleRecipe.vue";
import TheHeader from "../../components/shared/TheHeader.vue";
import TheFooter from "../../components/shared/TheFooter.vue";
import HeroComponent from "../../components/recipes/HeroComponent.vue";
export default {
  components: {
    SingleRecipe,
    TheHeader,
    TheFooter,
    HeroComponent,
  },
};
</script>
