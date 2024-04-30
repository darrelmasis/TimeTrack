const router = require('express').Router()
const path = require('path')
const { user, employee } = require('./controllers/base.controller')

// router.route('*').get((req, res) => {
//   res.sendFile(path.join(__dirname, '../client', 'index.html'))
// })

router.route('/signup').post(user.signup)
router.route('/getEmployee').post(employee.getEmployee)

router.route('/getTimePunches').post(user.getTimePunches)
router.route('/timepunches').post(user.punchTime)


module.exports = router
