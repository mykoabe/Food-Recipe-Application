import gql from "graphql-tag";

export const ALL_RECIPES_SEARCH_QUERY = gql`
  query AllRecipesSearchQuery($searchText: String!) {
    recipe(filter: {
      OR: [{
        name_contains: $searchText
      }, {
        description_contains: $searchText
      }]
    }) {
      id
      name
      description
      createdAt
    }
  }
`
export const RECIPES_QUERY = gql`
  query getRecipes {
    recipe(order_by: { id: asc }) {
      id
      name
      description
      instructions
      number_of_servings
      vegetarian
      calories_per_serving
      food_category_id
      time_to_perpare
      likes
      rating
    }
  }
`;
export const RECIPES_QUERY_EDITOR = gql`
  query getRecipes {
    recipe(
      limit: 1
      order_by: { id: desc, user_id: asc, time_to_perpare: asc }
    ) {
      id
      name
      description
      instructions
      number_of_servings
      vegetarian
      calories_per_serving
      recipe_ingredients {
        ingredient {
          name
        }
      }
      food_category {
        name
      }
      rating
      likes
    }
  }
`;

export const RECIPES_QUERY_SUGGESTION = gql`
  query getRecipes {
    recipe(
      limit: 3
      order_by: { id: desc, user_id: asc, time_to_perpare: asc }
    ) {
      id
      name
      description
      instructions
      number_of_servings
      vegetarian
      calories_per_serving
      recipe_ingredients {
        ingredient {
          name
        }
      }
      food_category {
        name
      }
      rating
      likes
    }
  }
`;
export const RECIPES_QUERY_RATED = gql`
  query getRecipes {
    recipe(
      where: { rating: { _gt: 2 } }
      limit: 3
      order_by: { rating: desc }
    ) {
      id
      name
      description
      instructions
      number_of_servings
      vegetarian
      calories_per_serving
      recipe_ingredients {
        ingredient {
          name
        }
      }
      food_category {
        name
      }
      rating
      likes
    }
  }
`;
export const RECIPES_QUERY_TRENDING = gql`
  query getRecipes {
    recipe(
      where: { rating: { _gt: 2 } }
      limit: 3
      order_by: { rating: desc }
    ) {
      id
      name
      description
      instructions
      number_of_servings
      vegetarian
      calories_per_serving
      recipe_ingredients {
        ingredient {
          name
        }
      }
      food_category {
        name
      }
      rating
      likes
    }
  }
`;

export const RECIPES_QUERY_HOME = gql`
  query getRecipes {
    recipe(
      where: { rating: { _gt: 1 } }
      limit: 4
      order_by: { rating: desc }
    ) {
      id
      name
      description
      instructions
      number_of_servings
      vegetarian
      calories_per_serving
      recipe_ingredients {
        ingredient {
          name
        }
      }
      food_category {
        name
      }
      rating
      likes
    }
  }
`;
export const RECIPES_MUATION = gql`
  mutation {
    insert_recipe_one(
      object: {
        instructions: "this is the best recipe"
        name: "Pizza be injera"
        rating: 0
        number_of_servings: "8"
        vegetarian: false
        calories_per_serving: 9
        description: "this is the best recipe"
      }
    ) {
      name
    }
  }
`;

export const FOOD_CATEGORY_RECIPE_QUERY = gql`
  query foodCategory {
    food_category(order_by: { id: asc }) {
      id
      name
    }
  }
`;

export const INGREDIENTS_QUERY = gql`
  query allIngredients {
    ingredient(order_by: { id: asc }) {
      id
      name
    }
  }
`;

export const RECIPE_INGREDIENT_MUTATION = gql`
  mutation insert_recipe_ingredient($recipe_id: Int!, $ingredient_id: Int!) {
    insert_recipe_ingredient(
      objects: [{ ingredient_id: $ingredient_id, recipe_id: $recipe_id }]
    ) {
      returning {
        id
        ingredient_id
        recipe_id
        ingredient {
          id
          name
        }
      }
    }
  }
`;

export const RECIPE_INSERT_MUTATION = gql`
  mutation insertRecipe(
    $id: Int
    $name: String!
    $description: String
    $time_to_perpare: String
    $instructions: String
    $food_category_id: Int
    $vegetarian: Boolean
    $calories_per_serving: Int
    $number_of_servings: Int
    $user_id: String
  ) {
    insert_recipe_one(
      object: {
        name: $name
        description: $description
        instructions: $instructions
        food_category_id: $food_category_id
        number_of_servings: $number_of_servings
        calories_per_serving: $calories_per_serving
        user_id: $user_id
        vegetarian: $vegetarian
        time_to_perpare: $time_to_perpare
      }
    ) {
        id
        name
        description
        instructions
        number_of_servings
        vegetarian
        calories_per_serving
        food_category_id
        food_category {
          id
          name
        }
        user_id
        recipe_ingredients {
          id
          ingredient {
            id
            name
          }
        }
    }
  }
`;
