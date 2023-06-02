const actor = require("../../entidades/actor");

const atoresServicos={
    findById: async (id) =>
    {
        try{
            const actorId = await actor.find({"id": id});
                let response = actorId.map( (actor) => {
                    return {"id" : actor.id, "type" : actor.type, "login": actor.login, "avatar_url":actor.avatar_url}
                })
                return response[0];
            }
            catch(err){
                console.log(err)
            }
   
    }
}

module.exports = atoresServicos;

