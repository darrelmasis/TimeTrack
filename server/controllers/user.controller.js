const UserModel = require('../models/user.model')
const { isEmpty, sanitizeString } = require('../utils/utilsFunctions')

const errors = []

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

  signin: async () => {},
}

module.exports = User_controller
