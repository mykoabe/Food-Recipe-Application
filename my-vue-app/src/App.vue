<script>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default {
  setup() {
    const { result, loading, error } = useQuery(gql`
      query getRecipes {
        recipe {
          id
          name
          description
        }
      }
    `);

    return {
      result,
      loading,
      error,
    };
  },
};
</script>

<template>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <ul v-if="result && result.recipe">
      <li v-for="user of result.recipe" :key="user.id">
        {{ user.name }} {{ user.description }}
      </li>
    </ul>
</template>
