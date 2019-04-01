const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const News = mongoose.model("news", new Schema(
    {
        title: String,
        description:   String,
        content: String,
        urlToImage: String,
    }, {
        timestamps: true
    }))

module.exports = News