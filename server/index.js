const express = require('express');
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser')

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}

const Redis = require('ioredis');
 
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const redis = new Redis({host: 'redis'});
 
const server = new ApolloServer({ typeDefs, resolvers, context: {redis} });
 
const app = express();
app.use(bodyParser.json())
app.use(cors(corsOptions))
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
