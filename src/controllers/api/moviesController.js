const {Movie} = require("../../database/models");

module.exports = {
    create: (req, res) => {
        Movie.create(req.body)
        .then(movie => {
            return res.status(200).json({
                data: movie,
                status: 200,
                created: 'ok'
            })
        })

    },
    destroy: (req, res) => {

        Movie.destroy({
            where: {id: req.params.id}})
            .then(response => {
                return res.json(response)
            })
    },
    update: (req,res) => {
        let movieId = req.params.id;
        Movie.update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            },
            {
                where: {id: movieId}
        })
        .then(confirm => {
            return res.status(200).json({
                data: confirm,
                status: 200,
                created: 'ok',
                total: confirm.length,
                url: 'api/movies/update/:id'
            })

        })    
        .catch(error => res.send(error))
    },

}
