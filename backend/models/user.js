'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations if any
    }
  }

  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    familyName: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    tripCode: DataTypes.STRING,
    description: DataTypes.TEXT,
    dateOfTrip: DataTypes.DATEONLY,
    ratings: DataTypes.INTEGER,
    images: DataTypes.JSONB,
    vacationLocation: DataTypes.STRING // Added vacationLocation attribute
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
