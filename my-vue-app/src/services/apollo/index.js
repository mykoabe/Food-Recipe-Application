import { ApolloClient, HttpLink } from "@apollo/client/core";
import { ApolloLink, concat, split } from "apollo-link";
import { InMemoryCache } from "@apollo/client/cache";
import { authService } from "../auth/auth";

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = authService.getAccessToken();
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  });
  return forward(operation);
});
const httpLink = new HttpLink({
  uri: "http://hasura-food-recipe-application.herokuapp.com/v1/graphql",
  fetch,
  headers: authMiddleware
});

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "network-only",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "network-only",
    errorPolicy: "all",
  },
};

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

export default apolloClient;
