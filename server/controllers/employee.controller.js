const EmployeeModel = require('../models/employee_model')


const Employee_controller = {

  getEmployee: async (req, res) => {
    try {

      const { employee_code } = req.body

      const result = (await EmployeeModel.read(['*'], ['employee_code = ?'], [''], [employee_code]))[0]

      if (result) {
        console.log('Éxito')
        res.status(200).json({ success: true, message: 'Consulta exitosa', data: result });
      } else {
        console.log('Error')
        res.status(200).json({ success: false, message: `No se encontró al empleado con el código ${employee_code.toUpperCase()} en la base de datos`, data: {} })
      }



    } catch (error) {

    }
  }

}

module.exports = Employee_controller