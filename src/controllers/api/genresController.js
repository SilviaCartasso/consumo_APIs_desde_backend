const {Genre} = require("../../database/models");

module.exports = {
    list: (req, res) => {
        Genre.findAll()
        .then(genres => {
            const RESPONSE = {
                meta: {
                    status: 200,
                    total: genres.length,
                    url: "/genres",
                },
                data: genres
            }
            res.json(RESPONSE);
        })
    },
    detail: (req, res) => {
        Genre.findByPk(req.params.id)
        .then(genre => {
    const RESPONSE = {
        meta: {
            status: 200,
            total: genre.length,
            url: "/genres/detail/:id",
        },
        data: genre
    }
    res.json(RESPONSE);       
        })
    },
};