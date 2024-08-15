const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
<<<<<<< HEAD

=======
>>>>>>> 44f80c9 (save)
router.get('/', (req, res, next) => {
  console.log('GET /api/users');
  userController.getAllUsers(req, res, next);
});
<<<<<<< HEAD

=======
>>>>>>> 44f80c9 (save)
router.post('/', (req, res, next) => {
  console.log('POST /api/users', req.body);
  userController.createUser(req, res, next);
});
<<<<<<< HEAD

router.post('/signin', userController.signinUser);

=======
router.post('/signin', userController.signinUser);
>>>>>>> 44f80c9 (save)
module.exports = router;

