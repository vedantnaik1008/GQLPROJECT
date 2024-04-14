import './App.css';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from '@apollo/client';
import Home from './components/Home';
import Search from './components/Search';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Search />
      <Home />
    </ApolloProvider>
  );
}

export default App;
