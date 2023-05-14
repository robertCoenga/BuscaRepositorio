const express = require("express");

//FAKE DATABASE:
let repos = [];
//services
const app = express();

app.use(express.json());

app.get('/repos/findByName', (req, res)=>{
    return res.status(200).send("Olá Mundo");
});
app.get('repos/findById',(req,res)=>{
    return res.status(200).send('Teste');
});
//Rodar o servidor
app.listen(3333, ()=> console.log("Server is running"))