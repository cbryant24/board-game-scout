'use strict';
const dateFormat = require('dateformat');
const { concat, shuffle } = require('lodash');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const QuestionChoice = sequelize.define(
    'gameEvent',
    {
      gameName: DataTypes.STRING,
      generalDetails: DataTypes.STRING,
      streetAddress: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip: DataTypes.INTEGER,
      lat: DataTypes.FLOAT,
      lng: DataTypes.FLOAT,
      date: DataTypes.DATE, 
      time: DataTypes.DATETIME
    });
}