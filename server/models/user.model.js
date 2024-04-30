const Base_model = require('./base.model')
const { validateUserData } = require('../utils/utilsFunctions')


const User_model = {

  create: async (userData) => {

    validateUserData(userData)

    try {
      return await Base_model.create('tableName', userData)
    } catch (error) {
      throw new Error(`Error al crear usuario: ${error.message}`)
    }
  },

  read: async (tableName, columns, whereClauses, joinClauses, data, orderByColumn,orderByDirection) => {

    validateUserData(data)

    try {
      console.log(tableName)
      return await Base_model.read(tableName, columns, whereClauses, joinClauses, data, orderByColumn, orderByDirection)
    } catch (error) {
      throw new Error(`Error al leer datos del usuario: ${error.message}`)
    }
  },

  createTimePunch: async timePunchData => {

    validateUserData(timePunchData)

    try {
      console.log(timePunchData)
      return await Base_model.create('time_punches', timePunchData)
    } catch (error) {
      throw new Error(`Error al registrar la marcación del usuario: ${error.message}`)
    }
  }
}

module.exports = User_model