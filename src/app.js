const express = require('express');
const { userController, categoryController, blogPostController } = require('./controllers');
const authenticateToken = require('./middleware/authenticateToken');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', userController.login);

app.post('/user', userController.create);

app.get('/user', authenticateToken, userController.getAll);

app.get('/user/:id', authenticateToken, userController.getById);

app.post('/categories', authenticateToken, categoryController.create);

app.get('/categories', authenticateToken, categoryController.getAll);

// app.post('/post', authenticateToken, blogPostController.create);

app.get('/post', authenticateToken, blogPostController.getAll);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
