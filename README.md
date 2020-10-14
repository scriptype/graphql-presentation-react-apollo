# React-Apollo

This is the front-end for [GraphQL Presentation App](https://chargin.cf).

In short:

- It talks to a GraphQL API using Apollo to fetch data.
- UI is implemented using React with hooks and styled-components.
- Bootstrapped using [Create React App](https://github.com/facebook/create-react-app).
- Uses eslint, prettier, husky and lint-staged to ensure keeping coding standards intact.
- It's a read-only UI for demo purposes (manipulating data is not possible).
- Written in Typescript.
- It has a Dockerfile, so it can be `docker-compose`d in production.

## Development

I suggest first setting up [Node-GraphQL](https://github.com/scriptype/graphql-presentation-node-graphql) locally.
Because you may want the front-end to use it to fetch data during local development.

After you set up the Node-GraphQL, clone this repository and run these in the react-apollo directory:

```sh
# This URL should point to the locally running GraphQL API.
echo "REACT_APP_GRAPHQL_API_URL=<API_URL>" > .env.local

# Install dependencies
npm install

# Start file watchers and dev-server
npm start
```

## Deployment

Running:

```sh
npm run build
```

Will produce production-ready static assets into `build` folder. But this will be
handled by the [Hub](https://github.com/scriptype/graphql-presentation-hub).

## Tests

Not yet \_(ツ)_/¯

## Further docs

[Create React App](https://github.com/facebook/create-react-app) can be consulted
for further documentation.
