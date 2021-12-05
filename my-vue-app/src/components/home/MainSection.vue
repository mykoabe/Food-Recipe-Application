<template>
  <section>
    <div id="main_section" class="flex sm:h-24 lg:mx-32 sm:mt-6 md:mx-6 mx-6">
      <div class="grid sm:gap-5 gap-9 md:grid-cols-4 grid-cols-1 sm:grid-cols-2">
        <BaseCard />
        <BaseCard />
        <BaseCard />
        <BaseCard />
      </div>
    </div>
  </section>
</template>
<script>
import BaseCard from "../ui/BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
};
</script>

<style></style>
