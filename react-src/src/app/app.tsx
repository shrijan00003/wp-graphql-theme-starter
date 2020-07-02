import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import AppRoute from "./app.route";

import "../asset/app.scss";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <AppRoute />
      </ApolloHooksProvider>
    </ApolloProvider>
  );
};

export default App;
