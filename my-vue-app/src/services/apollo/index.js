import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat, split } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { authService } from '../auth/auth';

const httpLink = new HttpLink({
  uri: 'http://hasura-food-recipe-application.herokuapp.com/v1/graphql'
});

// const authMiddleware = new ApolloLink((operation, forward) => {
//   const token = authService.getAccessToken();

//   // add the authorization to the headers
//   operation.setContext({
//     headers: {
//       authorization: token ? `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtMDYwNy1tMDkudXMuYXV0aDAuY29tLyJ9` : null
//     }
//   });
//   return forward(operation);
// });
const getHeaders = () => {
  const headers = {};
  const token = authService.getAccessToken();

  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return headers;
};

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all'
  }
};
const apolloClient = authToken => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "http://hasura-food-recipe-application.herokuapp.com/v1/graphql",
      headers: getHeaders()
    }),
    cache: new InMemoryCache(),
  })
}

export default apolloClient;