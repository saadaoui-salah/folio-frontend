
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";


const client = new ApolloClient({
    uri: "http://127.0.0.1:8000/graphql/",
    cache: new InMemoryCache(),
});

client.link = createHttpLink({

    uri: "http://127.0.0.1:8000/graphql/",
  headers: {
    ...client.link.options.headers,
  },
});

export default client;