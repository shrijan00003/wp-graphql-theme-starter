import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import Main from "./main";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Main />
      </ApolloHooksProvider>
    </ApolloProvider>
  );
};

export default App;
