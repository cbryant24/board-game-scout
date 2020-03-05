const { ApolloServer } = require('apollo-server-express');
const  typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const { 
  User, 
  Question,
  QuestionChoice,
  UserQuestionChoice
} = require('../../models');
const { cookieSignup, cookieLogin } = require('../auth');

const db = {
  user: User,
  question: Question,
  questionChoice: QuestionChoice,
  userQuestionChoice: UserQuestionChoice
}
// debugger
const { app } = require('../initializer');
// debugger
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers,
  context: ({ req }) => {
    return { 
      ...db, 
      cookieSignup, 
      cookieLogin,
      req
    }
  }
});
// debugger
server.applyMiddleware({ app });

module.exports = {
  initializer: () => server
}
