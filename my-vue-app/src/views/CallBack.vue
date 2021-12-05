<template>
  <h1>Loading...</h1>
</template>

<script>
export default {
  name: "callback",
  mounted() {
    this.$store.dispatch("account/handleAuthenticationResponse");
  },
};
</script>

<style scoped></style>
