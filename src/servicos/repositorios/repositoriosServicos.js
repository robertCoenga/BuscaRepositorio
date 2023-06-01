const repository = require("../../entidades/repository");

const repositoriosServicos = {

    findByName: async(req,res,queryRepoName,queryPage,queryRepoPage) =>
    {

        if(!queryPage)
        {
            queryPage=1;
        }
        if(!queryRepoPage)
        {
            queryRepoPage=10;
        }

        if(queryRepoName==null)
        {
            return res.status(400).send({"mensagem":"O campo nome é obrigatório!"});
        }
        else if(queryRepoName.length<3)
        {
            return res.status(400).send({"mensagem":"Adicione ao menos 3 caracteres"});
        }
        else{
            try {
                const repoName = await repository.find({"name": {$regex: req.query.nome}}).sort({_id:-1}).skip(queryPage).limit(queryRepoPage);
                if(repoName=='')
                {
                    res.status(404).send();
                }
                else{
                    let response = repoName.map( (repo) => {
                        return {"id" : repo.id, "name" : repo.name_with_owner}
                    })
                    res.status(200).json(response);
                }       
            } catch (error) {
                res.status(500).send(error);
            }
        }
    },
    findById: async (req,res) =>
    {
        let queryRepoId = req.params.repoId;

        if(queryRepoId==null)
        {
            return res.status(400).send({"mensagem":"O campo id é obrigatório!"});
        }
        else{
            try {
                const repoId = await repository.find({"id":req.params.repoId});
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
    }
}

module.exports = repositoriosServicos;