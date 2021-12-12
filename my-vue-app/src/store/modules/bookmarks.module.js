export default {
  namespaced: true,
  state() {
    return {
      items: [],
      qty: 0,
    };
  },
  mutations: {
    removeRecipeFromCart(state, payload) {
      const recipeId = payload.bookId;
      const recipeInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.bookId === recipeId
      );
      const recipeData = state.items[recipeInCartIndex];
      state.items.splice(recipeInCartIndex, 1);
      state.qty -= 1;
    },
    addRecipesToBookmark(state, payload) {
      const recipeData = payload;
      const recipeInCartIndex = state.items.findIndex(
        (bi) => bi.bookId === recipeData.id
      );

      if (recipeInCartIndex >= 0) {
        state.items[recipeInCartIndex].rating++;
      } else {
        const newItem = {
          bookId: recipeData.id,
          name: recipeData.name,
          description: recipeData.description,
          time_to_perpare: recipeData.time_to_perpare,
          number_of_servings: recipeData.number_of_servings,
          vegetarian: recipeData.vegetarian,
          instructions: recipeData.instructions,
          calories_per_serving: recipeData.calories_per_serving,
        };
        state.items.push(newItem);
      }
      state.qty++;
    },
  },
  actions: {
    addToBookmark(context, payload) {
      context.commit("addRecipesToBookmark", payload);
    },
    removeFromCart(context, payload) {
      context.commit("removeRecipeFromCart", payload);
    },
  },
  getters: {
    cartItems(state) {
      return state.items;
    },
    quantity(state) {
      return state.qty;
    },
  },
};
