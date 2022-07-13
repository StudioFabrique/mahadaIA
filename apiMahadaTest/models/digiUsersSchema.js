const { Schema, model } = require('mongoose');
// import mongoose from "mongoose"



const usersSchema = new Schema({
    id: { type: String, required: true, unique: true},
    Nom: { type: String, required: true },
    Prenom: { type: String, required: true },
    Nationalité: { type: String },
    Telephone: { type: String },
    Nee: { type: Date },
    adresse: { type: String },
    status: { type: String },
    handicape: { type: String },
    diplome: { type: String },
    formations: { type: Object },
    
});

module.exports = model('Channels', usersSchema);
// export usersSchema  = modelDigiData