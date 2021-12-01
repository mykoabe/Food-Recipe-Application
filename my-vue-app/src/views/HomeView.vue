<template>
    <section>
        <h1 class="ml-24 text-2xl">Home</h1>
        <button class="btn btn-green">Click me</button>
    </section>
</template>

<script>
export default {}
</script>
<style lang="postcss" scoped>
.btn {
    @apply mx-24 py-2 px-4 font-semibold rounded-lg shadow-md;
}
.btn-green {
    @apply text-white bg-green-500 hover:bg-green-700;
}
</style>
