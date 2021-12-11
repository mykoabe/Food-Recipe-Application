<template>
  <section>
    <div
      class="
        grid
        flex-1
        sm:gap-5
        gap-9
        md:grid-cols-4
        grid-cols-1
        sm:grid-cols-2
      "
    >
      <div class="" v-for="images in imageUrls" :key="images.id">
        <!--Card 1-->
        <div
          class="
            w-md
            h-md
            sm:h-sm
            hover:bg-gray-400
            rounded-lg
            overflow-hidden
            shadow-lg
            bg-center
          "
          :style="{ backgroundImage: `url(${images.image1})` }"
        >
          <div class="px-6 pt-60 space-y-3 pb-5">
            <div class="font-bold text-md mb-2 text-white">Dinner</div>
            <p class="text-white-700 text-2xl text-white font-bold font-sans">
              Lemon Dijon Vina igrette
            </p>
            <div class="space-y-4">
              <i class="fas fa-star text-white text-sm"></i>
              <i class="fas fa-star text-white text-sm"></i>
              <i class="fas fa-star text-white text-sm"></i>
              <i class="fas fa-star text-white text-sm"></i>
              <i class="fas fa-star text-white text-sm"></i>
              <span class="text-xl mx-2 text-bold text-white">0</span>
            </div>
            <div class="pt-5">
              <i class="far fa-clock text-white"
                ><span class="mx-3">{{images.time_to_prepare}}</span></i
              >
              <i class="far fa-user text-white"
                ><span class="mx-2">{{images.user}}</span></i
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firstImage from "../../assets/images/ranna-wordpress-theme-radiustheme.com-11-630x517.jpg";
import secondImage from "../../assets/images/blog16-630x650.jpg";
import thirdImage from "../../assets/images/ranna_wordpress_theme_radiustheme.com_1-425x710.jpg";
import fourthImage from "../../assets/images/ranna_wordpress_theme_radiustheme.com_1-530x338.jpg";
import { mapState } from "vuex";
export default {
  data() {
    return {
      imageUrls: [
        {
          image1: firstImage,
          id: 1,
          time_to_prepare: 6,
          user: "mekuanint"
        },
        {
          image1: secondImage,
          id: 2,
          time_to_prepare: 4,
          user: "alemu"
        },
        {
          image1: thirdImage,
          id: 3,
          time_to_prepare: 4,
          user: "kebded"
        },
        {
          image1: fourthImage,
          id: 4,
          time_to_prepare: 4,
          user: "yibeltal"
        },
      ],
    };
  },
  computed: {
    ...mapState("recipes", {
      homeRecipes: "home",
      isLoading: "isLoading",
    }),
  },
  mounted() {
    this.$store.dispatch("recipes/findForHome");
  },
  methods: {
    goToRecipe($event) {
      this.$store.dispatch("recipes/selectRecipe", +$event);
    },
  },
};
</script>
