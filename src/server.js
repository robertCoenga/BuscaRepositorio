const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');
const conn = require("./repositorios/conn");
const routes = require('./servicos/router');

app.use(cors());
app.use(express.json());
conn();
app.use("/",routes);
app.listen(3000, ()=> console.log("Server is running"))
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app;
