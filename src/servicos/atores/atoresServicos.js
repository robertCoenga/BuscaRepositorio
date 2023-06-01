const actor = require("../../entidades/actor");

const atoresServicos={
    findById: async (id) =>
    {
            const actorId = await repository.find({"id": id});
                let response = actorId.map( (actor) => {
                    return {"id" : actor.id, "type" : actor.type, "login": actor.login, "avatar_url":actor.avatar_url}
                })
                return JSON.parse(response);
   
    }
}

module.exports = atoresServicos;

