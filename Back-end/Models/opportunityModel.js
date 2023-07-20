const mongoose = require('mongoose');
const Profile = require("../Models/profileModel");

// create schema
const opportunitySchema = mongoose.Schema({
    title: {
        type: String, trim: true,
        required: [true, "Title is required"],
        minlength: [3, "too short title name"],
    },
    description: {
        type: String, trim: true,
        required: [true, 'Description is required'],
    },
    certificate: {
        type: Boolean,
        default: false
    },
    duration: {
        type: Number,
        required: [true, 'Duration in days required']
    },
    location: {
        type: String, trim: true,
        lowercase: true,
        required: [true, 'Location required']
    },
    getHired: {
        type: Boolean,
        default: false
    },
    paid: {
        isPaid: { type: Boolean, default: false },
        amount: { type: Number, default: 0 },
        currency: { type: String, default: "EGP" }
    },
    responsibilities: [{ type: String }],
    requirements: [{ type: String }],
    expOutcome: [{ type: String }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    progress: {
        type: String, default: "open",
        enum: ["open", "in progress", "close"],
    },
    acceptedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamp: true }
);

opportunitySchema.methods.isBusy = function () {
}
// create model
const Opportunity = mongoose.model('opportunity', opportunitySchema);
module.exports = Opportunity;