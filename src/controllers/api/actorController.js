const {Actor} = require("../../database/models");

module.exports = {
    list: (req, res) => {
        Actor.findAll()
        .then(actors => {
            const RESPONSE = {
                meta: {
                    status: 200,
                    total: actors.length,
                    url: "/actors",
                },
                data: actors
            }
            res.json(RESPONSE);
        })

    },
    detail: (req, res) => {
        Actor.findByPk(req.params.id)
        .then(actor => {
    const RESPONSE = {
        meta: {
            status: 200,
            total: actor.length,
            url: "/actors/detail/:id",
        },
        data: actor
    }
    res.json(RESPONSE);       
        })

    },
    create: (req, res) => {
        Actor.create(req.body)
        .then(actor => {
            return res.status(200).json({
                data: actor,
                status: 200,
                created: 'ok'
            })
        })

    },
    destroy: (req, res) => {
        Actor.destroy({
            where: {id: req.params.id}})
            .then(response => {
                return res.json(response)
            })

    },

}
