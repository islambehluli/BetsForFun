const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Bets = mongoose.model("bets", new Schema(
    {
        sport_key: String,
        teams: Array,
        sites: Array,
        commence_time:Number,
        sport_nice: String
    }, {
        timestamps: true
    }))

module.exports = Bets

//createOrUpdate