<template>
  <section>
    <div id="container">
      <div
        id="top-nav"
        class="
          hidden
          sm:flex
          space-y-1
          bg-gray-900
          items-baseline
          text-white
          h-10
        "
      >
        <div id="nav-menu" class="flex-1 space-x-3 md:ml-36 ml-6">
          <a href="#" class="text-sm hover:font-medium md:mx-4"
            ><router-link to="/home">Home</router-link></a
          >
          <a href="#" class="text-sm hover:font-medium md:mx-4"
            ><router-link to="/recipes">Recipes</router-link></a
          >
          <a href="#" class="text-sm hover:font-medium md:mx-4"
            ><router-link to="/categories">Category</router-link></a
          >
        </div>

        <div id="nav-menu-right" class="space-x-4 mr-16">
          <a href="#" class="text-sm hover:font-medium">
            <router-link to="/bookmarks">
              <i class="fas fa-shopping-bag fa-2x relative"
                ><span class="absolute text-xl bottom-2 text-white-500">{{
                  cartQuantity
                }}</span></i
              >
            </router-link>
          </a>
          <button class="btn btn-account">MyAcount</button>
        </div>
      </div>

      <!-- Bottom Navigation -->
      <div id="bottom-nav" class="flex space-y mx-4 lg:mx-32 sm:mt-6 md:mx-6">
        <div class="">
          <a
            href="#"
            class="
              text-gray-800
              sm:text-xl
              text-sm
              font-bold
              hover:text-gray-700
              md:text-2xl
              flex-1
            "
            ><img class="w-20 md:w-32" src="../../assets/icon.ico" alt=""
          /></a>
        </div>

        <div
          class="
            hidden
            sm:flex-1 sm:flex
            justify-center
            rounded-full
            border-grey-light border
            h-12
            mx-16
          "
        >
          <input
            class="w-full rounded-l-full pl-8 mr-4 mt-2 outline-none"
            type="text"
            placeholder="Search Recipes"
          />
          <button
            class="
              w-auto
              justify-end
              items-center
              text-white
              bg-gray-800
              rounded-r-full
            "
          >
            <span class="w-auto justify-end items-center pr-5 text-white">
              <i class="fas fa-search w-12"></i>
            </span>
          </button>
        </div>

        <div id="nav-menu-right" class="space-x-4 sm:md-10">
          <button v-if="!isAuthenticated" @click="login" class="btn btn-login">
            Login
          </button>
          <button v-if="isAuthenticated" @click="logout" class="btn btn-login">
            Logout
          </button>
          <button class="btn btn-submit">
            <i class="fas fa-plus mr-3"></i
            ><router-link to="/submit">Submit Recipe</router-link>
          </button>
        </div>
      </div>
      <!-- Bottom Navigation endes here -->
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState("recipes", {
      isLoading: "isLoading",
    }),
    ...mapGetters("account", {
      isAuthenticated: "userIsAuthenticated",
    }),
    cartQuantity() {
      return this.$store.getters["carts/quantity"];
    },
  },
  methods: {
    goToRecipe($event) {
      this.$store.dispatch("recipes/selectRecipe", +$event);
    },
    login() {
      this.$store.dispatch("account/login");
    },
    logout() {
      this.$store.dispatch("account/logout");
    },
  },
};
</script>

<style scoped lang="postcss">
.btn {
  @apply px-4 py-1 text-sm text-white font-semibold rounded-full focus:outline-none;
}
.btn-account {
  @apply bg-red-500 hover:bg-red-300;
}
.btn-login {
  @apply bg-gray-200 py-3 px-5 text-gray-900 invisible  md:visible;
}

.btn-submit {
  @apply md:bg-red-500 md:py-3 md:px-5 md:text-white bg-red-300;
}
</style>
