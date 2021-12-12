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
            <div class="font-bold text-md mb-2 text-white">
              {{ images.category }}
            </div>
            <p class="text-white-700 text-2xl text-white font-bold font-sans">
              {{ images.description }}
            </p>
            <div class="space-y-4">
              <span v-if="images.rating <= 1">
                <span
                  ><i class="fas fa-star text-gray-300 text-sm pl-3"></i
                ></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span class="text-xl mx-2 text-bold text-white">{{
                  images.rating
                }}/5</span>
              </span>

              <span v-if="images.rating === 2">
                <span
                  ><i class="fas fa-star text-red-500 text-sm pl-3"></i
                ></span>
                <span><i class="fas fa-star text-red-500 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span class="text-xl mx-2 text-bold text-white">{{
                  images.rating
                }}/5</span>
              </span>

              <span v-if="images.rating === 3">
                <span><i class="fas fa-star text-red-500 text-sm"></i></span>
                <span><i class="fas fa-star text-red-500 text-sm"></i></span>
                <span><i class="fas fa-star text-red-500 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span class="text-xl mx-2 text-bold text-white">{{
                  images.rating
                }}/5</span>
              </span>

              <span v-if="images.rating === 4">
                <span><i class="fas fa-star text-red-500 text-sm"></i></span>
                <span><i class="fas fa-star text-red-500 text-sm"></i></span>
                <span><i class="fas fa-star text-red-500 text-sm"></i></span>
                <span><i class="fas fa-star text-red-500 text-sm"></i></span>
                <span><i class="fas fa-star text-gray-300 text-sm"></i></span>
                <span class="text-xl mx-2 text-bold text-white">{{
                  images.rating
                }}/5</span>
              </span>

              <span v-if="images.rating > 4">
                <span><i class="fas fa-star text-red-500 text-sm"></i></span>
                <span><i class="fas fa-star text-red-500 text-sm"></i></span>
                <span><i class="fas fa-star text-red-500 text-sm"></i></span>
                <span><i class="fas fa-star text-red-500 text-sm"></i></span>
                <span><i class="fas fa-star text-red-500 text-sm"></i></span>
                <span class="text-xl mx-2 text-bold text-white">{{
                  images.rating
                }}</span>
              </span>
            </div>
            <div class="pt-5">
              <i class="far fa-clock text-white"
                ><span class="mx-3">{{ images.time_to_prepare }}min</span></i
              >
              <i class="far fa-user text-white"
                ><span class="mx-2">{{ images.user }}</span></i
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
          category: "BreakFast",
          id: 1,
          time_to_prepare: 6,
          user: "Mekuanint",
          rating: 5,
          description:
            "This recipe made with traditional wot and injera used for children",
        },
        {
          image1: secondImage,
          category: "Lunch",
          id: 2,
          time_to_prepare: 4,
          user: "Izop",
          rating: 4,
          description:
            "International pizza made with integration of modern bread",
        },
        {
          image1: thirdImage,
          id: 3,
          category: "Lunch",
          time_to_prepare: 4,
          user: "Intern",
          rating: 2,
          description:
            "Locally made pizza which is mainly used for adults and old people",
        },
        {
          image1: fourthImage,
          id: 4,
          category: "Dinner",
          time_to_prepare: 4,
          user: "Andinet",
          rating: 3,
          description: "Most rated recipe made used for adults and old people",
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
