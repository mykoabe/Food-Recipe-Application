import accountModule from "./modules/account.module";
import recipesModule from "./modules/recipes.module";
import bookmarksModule  from "./modules/bookmarks.module"
import { createStore } from "vuex";

const store = createStore({
  modules: {
    account: accountModule,
    recipes: recipesModule,
    carts: bookmarksModule
  },
});
export default store;
