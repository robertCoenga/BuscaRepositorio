const router = require("express").Router();
const repository = require("../entidades/repository");


router.get('/repos/findByName', async (req, res)=>{
    let queryRepoName = req.query.name;

    if(queryRepoName==null)
    {
        return res.status(400).send({"mensagem":"O campo nome é obrigatório!"});
    }
    else{
        try {
            const repoName = await repository.find({"name":req.query.name});
            if(repoName=='')
            {
                res.status(404).send();
            }
            else{
                res.status(200).send(repoName);
            }       
        } catch (error) {
            res.status(500).send(error);
        }
    }
})
router.get('/repos/findById', async (req,res)=>{
    let queryRepoId = req.query.id;

    if(queryRepoId==null)
    {
        return res.status(400).send({"mensagem":"O campo id é obrigatório!"});
    }
    else{
        try {
            const repoId = await repository.find({"id":req.query.id});
            if(repoId=='')
            {
                res.status(404).send();
            }
            else{
                res.status(200).send(repoId);
            }     
        } catch (error) {
            return res.status(500).send(error);
        }
    }
});

module.exports = router;