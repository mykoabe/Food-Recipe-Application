import gql from 'graphql-tag';

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
      food_category {
        id
        name
      }
      created_by
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
  mutation insert_recipe_ingredient(
    $recipe_id: Int!
    $ingredient_id: Int!
  ) {
    insert_recipe_ingredient(
      objects: [
        {
          ingredient_id: $ingredient_id
          recipe_id: $recipe_id
        }
      ]
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

export const RECIPE_UPDATE_MUTATION = gql`
  mutation updateRecipe(
    $id: Int!
    $name: String!
    $description: String
    $instructions: String
    $food_category_id: Int
    $number_of_servings: Int
    $calories_per_serving: Int
    $created_by: String
  ) {
    update_recipe(
      where: { id: { _eq: $id } }
      _set: {
        name: $name
        description: $description
        instructions: $instructions
        food_category_id: $food_category_id
        number_of_servings: $number_of_servings
        calories_per_serving: $calories_per_serving
        created_by: $created_by
      }
    ) {
      returning {
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
        created_by
        recipe_ingredients {
          id
          ingredient {
            id
            name
          }
        }
      }
    }
  }
`;
