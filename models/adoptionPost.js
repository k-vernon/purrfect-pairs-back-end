'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdoptionPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdoptionPost.init({
    photo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    species: {
      type: DataTypes.ENUM('Cat', 'Dog'),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM('Male', 'Female'),
      allowNull: false
    },
    coatColor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adoptionFee: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'AdoptionPost',
  });
  return AdoptionPost;
};