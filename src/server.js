const express = require("express");
const graphqlHTTP = require("express-graphql");
// const { buildSchema } = require('graphql')
const schema = require("./api/schema");
const knex = require("./config/database")

knex.migrate.latest()
const app = express();
app.use(
  "/api",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

startServer(4000);

function startServer(port) {
    app.listen(port, () => console.log(`Starting server at port ${port}`));
}
