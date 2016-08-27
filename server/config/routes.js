var User = require('../controllers/users.js')

module.exports = function() {
  app.post('/login', User.login)
  
}
