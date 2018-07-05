const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vacationsSchema = new Schema({
    // fullName: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true
    // },
    location: {
        type: String,
        required: true
    },
    targetDate: Date,
    costOfVacation: Number,
    currentMoney: Number,
    priority: Number,
    purpose: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Vacations", vacationsSchema);