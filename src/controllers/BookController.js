const axios = require('axios');

const Library = require('../models/Library');

module.exports = {
    async index(req, res) {
        const book = await Library.find()
        return res.json(book);
    },
    async show(req, res) {
        const book = await Library.findById(req.params._id);
        return res.json(book);
    },
    async search(req, res) {
        const { title } = req.body
        let book = await Library.findOne({
            title
        });
        if(!book) {
            return res.json({'message' : 'livro não encontrado'})
        }
        return res.json(book);
    },

    async store(req, res) {
        const { ISBN } = req.body
        let book = await Library.findOne({
            ISBN
        });
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`)
        if(response.data.totalItems <= 0) {
            return res.json({
                "message": "não encontamos esse livro"
            });
        }
        const [volumeInfo] = response.data.items

       console.log('aqui', volumeInfo.volumeInfo)
        if (!book) {
            const book = await Library.create({
                author : volumeInfo.volumeInfo.authors,
                description : volumeInfo.volumeInfo.description,
                ISBN : ISBN,
                publishedDate : volumeInfo.volumeInfo.publishedDate,
                thumbnail : volumeInfo.volumeInfo.imageLinks.thumbnail,
                title : volumeInfo.volumeInfo.title,
             })
            return res.json({
                "message": "livro cadastrado com sucesso"
            });
        }
        return res.json({
            "message": "wow! já temos esse livro nos cadastros"
        });
    },
    async update(req, res) {
        const book = await Library.findByIdAndUpdate(req.params._id, req.body);
        return res.json([{
            "message": "book editado com sucesso"
        }, book]);
    },
    async destroy(req, res) {
        const book = await Library.findByIdAndDelete(req.params._id);

        return res.json({ "message": 'deletado com sucesso' });
    }

}