const { promisify } = require('util')
const connection = require('../connection')
const queryAsync = promisify(connection.query).bind(connection)

const {cleanSpaces} = require('../utils/utilsFunctions')

const Base_model = {

  promise: async (query, data) => {
    try {
      const result = await queryAsync(query, data)
      return result
    } catch (error) {
      console.log(error)
    }
  },

  create: async (table, data) => {

    // Validación de los datos de entrada
    if (typeof table !== 'string' || !table.trim() || typeof data !== 'object' || Object.keys(data).length === 0) {
      throw new Error('Parámetros no válidos para la operación de inserción.');
    }

    // Construcción de la consulta preparada
    const columns = Object.keys(data).join(',')
    const placeholders = Object.values(data).map(() => '?').join(',')

    const query = `INSERT INTO ${table} (${columns}) VALUES(${placeholders})`

    // Ejecución de la consulta
    const query_data = Object.values(data)
    return Base_model.promise(cleanSpaces(query), query_data)
  },

  read: async (table, columns, whereClauses, joinClauses, data) => {
    // Validación de los datos de entrada

    let tableColumns = ''
    if (columns) {
      if (!Array.isArray(columns)) {
        throw new Error('Las columnas debe ser proporcionadas comoun array.');
      }

      if (columns.length > 1) {
        tableColumns = `${columns.join(', ')}`;
      } else {
        tableColumns = columns[0];
      }
    }

    let whereClause = '';
    if (whereClauses) {
      if (!Array.isArray(whereClauses)) {
        throw new Error('Las cláusulas WHERE deben ser proporcionadas como un array.');
      }

      if (whereClauses.length > 1) {
        whereClause = `WHERE ${whereClauses.join(' AND ')}`;
      } else {
        whereClause = `WHERE ${whereClauses[0]}`;
      }
    }

    let joinStatements = '';
    if (joinClauses) {
      if (!Array.isArray(joinClauses)) {
        throw new Error('Las cláusulas JOIN deben ser proporcionadas como un array.');
      }

      joinStatements = joinClauses.join(' ');
    }

    let placeholders = '';
    if (data) {
      if (!Array.isArray(data)) {
        throw new Error('Los datos deben ser proporcionados como un array.');
      }
      placeholders = data.length > 0 ? Array(data.length).fill('?').join(', ') : '';
    }

    // Construcción de la consulta preparada
    const query = `SELECT ${columns} FROM ${table} ${joinStatements} ${whereClause}`;

    // Ejecución de la consulta
    return Base_model.promise(cleanSpaces(query), data);
  },


  update: async (table, data) => {

  },

  delete: async (table, data) => {

  }
}

module.exports = Base_model

// const mydata = {
//   employee_id: 1,
//   time_stamp: now.format('YYYY-MM-DD HH:MM:SS'),
//   punch_type: 'clock_in',
//   updated_at: moment().format('YYYY-MM-DD HH:MM:SS')
// }

// Base_model.create('time_punches', mydata)
//   .then(result => {
//     console.log('Inserción exitosa.')
//   })
//   .catch(error => {
//     console.log('Error en la inserción:', error.message)
//   })

// try {
//   // tabla,columnas, where, join, data

//   const table = 'employees AS e'
//   const columns = ['e.name', 'e.last_name', 'd.department_name', 'p.position_name']
//   const where = ['e.name LIKE ?']
//   const join = ['JOIN departments AS d ON e.department_id = d.department_id','JOIN positions AS p ON e.position_id = p.position_id']
//   const data = ['%a%']

// Base_model.read(table,columns,where,join,data)
//   .then(result => {
//     result.forEach(employee => {
//       console.log(employee.name + ' ' + employee.last_name)
//     });
//   })

// } catch (error) {
//   console.log(error)
// }