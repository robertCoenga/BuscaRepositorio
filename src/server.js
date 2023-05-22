const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

app.use(cors());
app.use(express.json());
//Conexão com o banco de dados
const conn = require("./repositorios/conn");
conn();

//Serviços
const routes = require('./servicos/router');
app.use("/",routes);

//Servidor e Swagger
app.listen(3000, ()=> console.log("Server is running"))
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))



module.exports = app;
