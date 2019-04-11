const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getCalls(key: String!): Int
  }

  type Mutation {
    incrCalls(key:String!): Int
  }
`;

module.exports = typeDefs