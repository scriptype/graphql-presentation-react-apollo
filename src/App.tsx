import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import SVG from 'react-inlinesvg';

import theme from 'theme';
import Layout from 'Layout';
import Stations from 'modules/stations';
import icons from 'assets/icons.svg';

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

function App() {
  console.log('pre-demo test');
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
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
          <div style={{ display: 'none' }}>
            <SVG cacheRequests={true} src={icons} />
          </div>
        </HelmetProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
