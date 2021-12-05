import accountModule from "./modules/account.module";
import recipesModule from "./modules/recipes.module";
import { createStore } from "vuex";

const store = createStore({
  modules: {
    account: accountModule,
    recipes: recipesModule,
  },
});
export default store;
