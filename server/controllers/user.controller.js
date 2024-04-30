const User_model = require('../models/user.model')
const { isEmpty, sanitizeString, isTimeStampValid, isTimeValid, isDateValid } = require('../utils/utilsFunctions')
const moment = require('moment')
moment.locale('es')
const User_controller = {
  signup: async (req, res) => {
    try {
      // 1. Recibir la información enviada desde el formulario de registro.
      const formData = req.body

      const userRegisterData = {
        employee_id: formData.employee_id,
        username: sanitizeString(formData.username),
        password: formData.password,
        // avatar: formData.avatar,
        phone_number: formData.phone_number,
        // created_at: formData.created_at,
        // last_login: formData.last_login,
        // gender: formData.gender,
        // updated_at: formData.updated_at
      }

      // 2. Verificar si el usuario ya existe en la base de datos.
      const userExist = (await UserModel.read(['COUNT(employee_id) as count'], ['employee_id = ?'], [''], [userRegisterData.employee_id]))[0].count > 0
      if (!userExist) {
        // 3. Validad que los campos obligatorios no esten vacíos.
        const requiredFields = ['username', 'password', 'phone_number']
        for (const field of requiredFields) {
          if (isEmpty(userRegisterData[field])) {
            errors.push({ success: false, formField: field, message: 'Campo Obligatorio' })
          }
        }

        if (errors.length > 0) {
          if (errors.length > 0) {
            res.status(400).json(errors)
            errors.length = 0
            return
          }
        }
      } else {
        res.status(200).json({ type: 'success', message: 'Registro exitoso.' })
      }
      // 4. Verificar que las contraseñas brindadas coincidan (sean iguales).
      // 5. Validar si no ha ocurrido ningun error en el registro.
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, error: 'Error en la consulta a la base de datos.' })
    }
  },

  signin: async () => { },

  punchTime: async (req, res) => {
    try {
      const errors = {}

      const currentTimestamp = moment().format('YYYY-MM-DD HH:mm:ss')
      const { punch_date, employee_id, clockIn, clockOut, activity } = req.body
      const created_at = currentTimestamp
      const updated_at = currentTimestamp

      //Valida si los datos que envía el usuario no son vacíos o nulos
      !employee_id && (errors.employee_id = 'employee_id es requerido')
      !clockIn && (errors.clockIn = 'Es obligatorio una hora de entrada')
      !clockOut && (errors.clockOut = 'Es obligatorio una hora de salida')
      !activity && (errors.activity = 'Es obligatorio una descripción en la marcación')

      // Valida si la hora es válida
      !isTimeValid(clockIn) && (errors.clockIn = 'La hora especificada no es válida')
      !isTimeValid(clockOut) && (errors.clockOut = 'La hora especificada no es válida')

      // Valida si la fecha es válida
      !isDateValid(punch_date) && (errors.punch_date = 'La fecha especificada no es válida')


      if (Object.keys(errors).length > 0) {
        return res.status(200).json({ type: 'error', message: 'Datos de entrada no válidos', errors })
      }

      const result = await User_model.createTimePunch({ punch_date, employee_id, clock_in: clockIn, clock_out: clockOut, activity, created_at, updated_at })

      return res.send(result)

    } catch (error) {
      console.log(error)
      res.status(500).json({ message: `Error en la consulta a la base de datos: ${error.message}` })
    }
  },

  getTimePunches: async (req, res) => {
    try {
      //Prueba na más
      req.body.date_range = { start: '2024-04-01', end: '2024-04-14' }
      
      const { employee_id, date_range } = req.body;
      const result = await User_model.read('time_punches', ['*'], ['employee_id = ?', 'punch_date BETWEEN ? AND ?'], [], [employee_id, date_range.start, date_range.end], 'punch_date', 'ASC')
      console.log(result)
      return res.json(result)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: `Error en la consulta a la base de datos: ${error.message}` })
    }
  }

}

module.exports = User_controller