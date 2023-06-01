const router = require("express").Router();
const repository = require("./repositorios/repositoriosServicos");



router.get('/repos/find', async (req, res)=>{
    let queryRepoName = req.query.nome;
    let queryPage = req.query.pagina;
    let queryRepoPage = req.query.por_pagina;
    
    repository.findByName(req,res,queryRepoName,queryPage,queryRepoPage);
})
router.get('/repos/:repoId', async (req,res)=>{
    repository.findById(req,res);
});

module.exports = router;