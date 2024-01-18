const router = require("express").Router();
const repository = require("./repositorios/repositoriosServicos");



router.get('/repos/find', async (req, res)=>{
    await repository.findByName(req,res,req.query.nome, req.query.pagina, req.query.por_pagina);
})
router.get('/repos/:repoId', async (req,res)=>{
    await repository.findById(req,res);
});

module.exports = router;