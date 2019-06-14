module.exports = {
    getHouses: (req, res) => {
        let db = req.app.get('db')
        db.get_houses()
        .then(resp => {res.status(200).send(resp)
        })
        .catch(err => {res.status(500).send(err)})
    },
    addHouse: (req, res) => {
        let db = req.app.get('db')
        db.add_house(req.body)
        .then(resp => {res.send(resp).status(200)
        })
        .catch(err => {res.send(err).status(500)})
    },
    deleteHouse: (req, res) => {
        let db = req.app.get('db')
        db.delete_house(req.params.id)
        .then(resp => {res.send(resp).status(200)
        })
        .catch(err => {res.send(err).status(500)})
    }
}