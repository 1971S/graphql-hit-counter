const express = require('express');
const { ApolloServer } = require('apollo-server-express');

import Redis from "ioredis";
 
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const redis = new Redis()
 
const server = new ApolloServer({ typeDefs, resolvers, context: {redis} });
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
