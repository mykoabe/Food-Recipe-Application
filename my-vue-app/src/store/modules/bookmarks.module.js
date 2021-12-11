export default {
  state() {
    return {
      items: [],
      qty: 0,
    };
  },
  mutations: {
    addRecipesToBookmark(state, payload) {
      const recipeData = payload.recipe;
      const productInBookmarkIndex = state.items.findIndex(
        (bookmarkItem) => bookmarkItem.productId === recipeData.id
      );

      if (productInBookmarkIndex >= 0) {
        state.items[productInBookmarkIndex].rating++;
      } else {
        const newItem = {
          recipeId: recipeData.id,
          name: recipeData.name,
          description: recipeData.description,
        };
        state.items.push(newItem);
      }
      state.qty++;
    },
  },
  actions: {
      addToBookmark(context, payload){
          context.commit("addRecipesToBookmark", payload)
      }
  }
};
