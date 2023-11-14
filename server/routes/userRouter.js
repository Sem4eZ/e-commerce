const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/registration', userController.registration)
router.post('/login', checkRole('ADMIN'), userController.login) // УБРАТЬ checkRole('ADMIN') ТАК КАК НЕ ЗНАЮ, НУЖНО ЛИ СЮДА ДОБАВЛЯТЬ ЭТО!!!
router.get('/auth', authMiddleware, userController.check)

module.exports = router