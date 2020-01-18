const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require(`../utils/parseStringAsArray`)

module.exports = {

    async index(req, res) {

        const devs = await Dev.find()

        return res.json(devs)
        
    },

    async store(req, res) {

        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username })

        if (!dev) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

            const { name = login, avatar_url, bio } = apiResponse.data

            const techsArray = parseStringAsArray(techs)

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })

        }

        return res.json(dev)

    },

    async show(req, res) {

        const { github_username } = req.params

        const dev = await Dev.findOne({ github_username })

        if (dev) {
            return res.json(dev)
        } else {
            return res.status(404).end()
        }

    },

    async update(req, res) {

        const { github_username } = req.params

        const { techs, latitude, longitude } = req.body

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }

        const techsArray = parseStringAsArray(techs)

        const result = await Dev.updateOne({ github_username }, { techs: techsArray, location })

        return result.n > 0 ? res.status(200).end() : res.status(404).end()

    },

    async destroy(req, res) {

        const { github_username } = req.params

        const result = await Dev.deleteOne({ github_username })

        return result.n > 0 ? res.status(204).end() : res.status(404).end()

    }

}