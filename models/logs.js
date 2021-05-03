const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logSchema = new Schema(
    {
        username: { type: String, required: true },
        title: { type: String, unique: true, required: true },
        moodScale: { type: Number, min: 0, max: 10 },
        moodWords: { type: [String], required: true },
        entry: { type: String },
        globalPrivacy: { type: Number, required: true } // 0 = share nothing, 1 = share only summary, 2 = share full entries. Defaults to user's setting.
    },
    {
        timestamps: true
    }
)

const Log = mongoose.model('Log', logSchema)

module.exports = Log
