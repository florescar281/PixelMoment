const express = require('express');
const app = express();

const initBD = require('./config/bd');

const routerUser = require('./app/routes/user');

app.use(routerUser);

app.listen(3000, () => {
        console.log('Servidor corriendo en el puerto 3000');
});

initBD();
