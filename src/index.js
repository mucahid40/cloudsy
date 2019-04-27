import schema from './schema';
import Koa from 'Koa';
import koaRouter from 'Koa-router';
import koaBody from 'Koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-Koa';

const app = new Koa();
const router = new koaRouter();
const PORT = process.env.PORT || 4000;

console.clear();
console.log(
  '   :{) Welcome!\n',
  '  ---------------------------------------\n');

// Setup the graphql server routes with the Schema
router.post('/graphql', koaBody(), graphqlKoa({ schema }));
router.get('/graphql', graphqlKoa({ schema }));

// Setup the /graphiql route to show the GraphiQL UI
router.get('/graphiql', graphiqlKoa({
  endpointURL: '/graphql',
  // passHeader: `'Authorization': 'Bearer <test token>'`,
}));

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`   GraphQL server started on:\n   ${url}\n\n`,
    `➜ Open ${url}/graphiql to\n   start querying your API.\n\n`,
    `➜ Point your GraphQL client apps to\n   ${url}/graphql\n`,
    ' ---------------------------------------\n');
});