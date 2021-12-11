import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CallBack from "../views/CallBack.vue";
import Category from "../components/category/Category.vue";
import RecipeList from "../views/recipes/RecipeList.vue";
import RecipeDetail from "../views/recipes/RecipeDetail.vue";
import NotFound from "../views/NotFound.vue";
import SubmitRecipe from "../views/SubmitRecipe.vue";
import { authService } from "../services/auth/auth";
import EditRecipe from "../components/recipes/EditRecipe.vue"
import store from "../store";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/categories",
    name: "Category",
    component: Category,
  },
  {
    path: "/recipes",
    name: "Recipe",
    component: RecipeList,
  },
  {
    path: "/recipes/:recipeId",
    name: "recipeDetail",
    component: EditRecipe,
  },
  {
    path: "/submit",
    name: "Submit",
    component: SubmitRecipe,
  },
  {
    path: "/callback",
    name: "Callback",
    component: CallBack,
  },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/", "/recipeList", "/home", "/callback"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.getters["account/getUser"];

  if (authRequired && !loggedIn) {
    authService.setReturnUrl(to.fullPath);
    store.dispatch("account/login");
  }
  next();
});

export default router;
