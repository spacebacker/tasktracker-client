import { ApolloProvider } from '@apollo/client';
import { HashRouter } from 'react-router-dom';
import { apolloClient } from './services/ApolloClient';

import Layout from './components/Layout';
import RouterProvider from './providers/RouterProvider';
import CurrentUserProvider from './providers/CurrentUserProvider';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <CurrentUserProvider>
        <HashRouter>
          <Layout />
          <RouterProvider />
        </HashRouter>
      </CurrentUserProvider>
    </ApolloProvider>
  );
}

export default App;
