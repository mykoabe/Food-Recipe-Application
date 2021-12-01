import { createStore } from 'vuex'
import accountModule from './modules/account.module'
import recipeModule from './modules/recipes.module'

const store = createStore({
    modules: {
        account: accountModule,
        recipe: recipeModule,
    },
})

export default store;