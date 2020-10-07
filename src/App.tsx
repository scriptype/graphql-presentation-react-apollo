import React from 'react';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ApolloClient  from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import theme from './theme'
import Layout from './Layout'
import Stations from './modules/stations';

const apolloClient = new ApolloClient({
  uri: process.env.GRAPHQL_API_BASE_URL
})

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/stations" />
              </Route>
              <Route path="/stations">
                <Stations />
              </Route>
            </Switch>
          </Router>
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
