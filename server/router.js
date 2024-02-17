const router = require('express').Router()
const path = require('path')
const { user, employee } = require('./controllers/base.controller')

router.route('*').get((req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'dist', 'index.html'))
})

router.route('/signup').post(user.signup)
router.route('/getEmployee').post(employee.getEmployee)

module.exports = router
