const mongoose = require('mongoose');

const LibraryModel =  new mongoose.Schema(
            {
                author : [String],
                description : String,
                ISBN : String,
                publishedDate : String,
                title : String,
                thumbnail : String,
                createdAt : { type : Date, default : Date.now }
            }
          );


module.exports =  mongoose.model('library', LibraryModel)