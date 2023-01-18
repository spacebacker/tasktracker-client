import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const link = createHttpLink({
  uri: import.meta.env.VITE__GRAPHQL_API_URL,
  credentials: 'include',
});

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
