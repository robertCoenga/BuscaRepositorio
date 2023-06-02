const repository = require("../../entidades/repository");
const actor = require("../atores/atoresServicos");

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
                    let responseOwner = repoId.map( async (repo) => {
                        let actorOwner = await actor.findById(repo.owner);
                        console.log(actorOwner)
                        return {
                            "id": repo.id,
                            "assignable_users": repo.assignable_users,
                            "code_of_conduct":repo.code_of_conduct,
                            "created_at": repo.created_at,
                            "database_id": repo.database_id,
                            "default_branch": repo.default_branch,
                            "delete_branch_on_merge": repo.delete_branch_on_merge,
                            "description": repo.description,
                            "disk_usage": repo.disk_usage,
                            "forks": repo.forks,
                            "has_issues_enabled": repo.has_issues_enabled,
                            "has_projects_enabled": repo.has_projects_enabled,
                            "has_wiki_enabled": repo.has_wiki_enabled,
                            "homepage_url": repo.homepage_url,
                            "is_archived": repo.is_archived,
                            "is_blank_issues_enabled": repo.is_blank_issues_enabled,
                            "is_disabled": repo.is_disabled,
                            "is_empty": repo.is_empty,
                            "is_fork": repo.is_fork,
                            "is_in_organization": repo.is_in_organization,
                            "is_locked": repo.is_locked,
                            "is_mirror": repo.is_mirror,
                            "is_private": repo.is_private,
                            "is_security_policy_enabled": repo.is_security_policy_enabled,
                            "is_template": repo.is_template,
                            "is_user_configuration_repository": repo.is_user_configuration_repository,
                            "issues": repo.issues,
                            "labels": repo.labels,
                            "languages": repo.languages,
                            "license_info": repo.license_info,
                            "mentionable_users": repo.mentionable_users,
                            "merge_commit_allowed": repo.merge_commit_allowed,
                            "milestones": repo.milestones,
                            "name": repo.name,
                            "name_with_owner": repo.name_with_owner,
                            "open_graph_image_url": repo.open_graph_image_url,
                            "owner": actorOwner,
                            "primary_language": repo.primary_language,
                            "pushed_at": repo.pushed_at,
                            "pull_requests": repo.pull_requests,
                            "rebase_merge_allowed": repo.rebase_merge_allowed,
                            "releases": repo.releases,
                            "repository_topics": repo.repository_topics,
                            "squash_merge_allowed": repo.squash_merge_allowed,
                            "stargazers": repo.stargazers,
                            "tags": repo.tags,
                            "updated_at": repo.updated_at,
                            "url": repo.url,
                            "uses_custom_open_graph_image": repo.uses_custom_open_graph_image,
                            "vulnerability_alerts": repo.vulnerability_alerts,
                            "watchers": repo.watchers
                        }
                    })
                    //console.log( await Promise.all(responseOwner))
                    res.status(200).json( await Promise.all(responseOwner)); 
                   
                }     
            } catch (error) {
                return res.status(500).send(error);
            }
        }
    }
}

module.exports = repositoriosServicos;