const mongoose = require("mongoose");

const DietaSchema = mongoose.Schema({
    nombre : {type: String, require: true, unique: true},
    calorias: Number,
    desc : String
  },{
    collection: "Alimentos",
    timestamps: true
})

const Dieta = mongoose.model("Alimento", DietaSchema);

module.exports = Dieta