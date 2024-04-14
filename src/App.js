import './App.css';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from '@apollo/client';
import Home from './components/Home';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
