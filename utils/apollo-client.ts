import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://qu0rx9c1.api.sanity.io/v1/graphql/production/default',
  cache: new InMemoryCache()
});
