module.exports = {
  Query: {
    user: (parent, args, { req }, info) => {
      return req.user;
    },
    playerPublicInfo: (parent, {playerId}, db, { user }, info) => {
      return user.findOne({ where: { id: playerId }});
    }

  },
  Mutation: {
    login: (parent, { email, password }, { cookieLogin, req }, info) => {
      return cookieLogin({ email, password, req });
    },
    signup: (parent, { email, name, password}, { cookieSignup, req }, info ) => {
      return cookieSignup({ email, name, password, req });
    },
    logout: (parent, args, { req }, info) => {
      req.logout();
      const { user } = req;
      return user;
    },
    // guess: (parent, { userId, questionId, questionChoiceId, guess}, { req, userQuestionChoice }, info) => {
    //   return userQuestionChoice.recordGuess({ userId, questionId, questionChoiceId, guess });
    // }
  }
}