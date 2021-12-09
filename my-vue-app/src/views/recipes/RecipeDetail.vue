<template>
  <section>
    <TheHeader />
    <SingleRecipe />
    <TheFooter />
  </section>
</template>
<script>
import SingleRecipe from "../../components/recipes/SingleRecipe.vue";
import TheHeader from "../../components/shared/TheHeader.vue";
import TheFooter from "../../components/shared/TheFooter.vue";
export default {
  components: {
    SingleRecipe,
    TheHeader,
    TheFooter,
  },
};
</script>
