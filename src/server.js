const express = require("express");
const fs = require('fs');
const app = express();
const repositorie = JSON.parse(fs.readFileSync('src/data/repositories_202305081745.json','utf-8'));
const repos = repositorie.repositories;
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')
//services
app.use(express.json());

//Rodar o servidor
app.listen(3000, ()=> console.log("Server is running"))
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


app.get('/repos/findByName', (req, res)=>{
    let queryRepoName = req.query.name;

    if(queryRepoName==null)
    {
        return res.status(400).send({"mensagem":"O campo nome é obrigatório!"});
    }
    else{
        let repo = repos.find(resp => resp.name === queryRepoName);       
        if (repo!=null)
        {
            return res.status(200).send(repo);
        }
        else
        {
            return res.status(404).send({});
        }
    }
})
app.get('/repos/findById', (req,res)=>{
    let queryRepoId = req.query.id;

    if(queryRepoId==null)
    {
        return res.status(400).send({"mensagem":"O campo nome é obrigatório!"});
    }
    else{
        let repo = repos.find(resp => resp.id === queryRepoId);       
        if (repo!=null)
        {
            return res.status(200).send(repo);
        }
        else
        {
            return res.status(404).send({});
        }
    }
});

module.exports = app;
