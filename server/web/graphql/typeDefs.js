const { gql } = require('apollo-server-express');

//POSSIBLE RENAME QUESTION TO TRIVIA!!
const typeDefs = gql`
  type Query {
    user: User
    playerPublicInfo: PlayerPublicInfo
  }

  type Mutation {
    login(email: String!, password: String!): User!
    logout: User
    signup(email: String!, password: String!, firstName: String!, lastName: String!, phone: Int): User
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phone: Int
    favGenre: String
    aboutMe: String

  }

  type PlayerPublicInfo {
    firstName: String!
    favGenre: String
    aboutMe: String
  }

  type GameEvent {
    gameName: String!
    generalDetails: String!
    streetAddress: String!
    city: String!
    state: String!
    zip: Int!
    lat: Int!
    lng: Int!
    date: String!
    time: String!
  }


`;

module.exports = typeDefs;
