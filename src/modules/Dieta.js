const mongoose = require("mongoose");

const DietaSchema = mongoose.Schema({
    nombre : {type: String, require: true, unique: true},
    precio: Number,
    cat : {type : String, enum:['Intercambiables', 'Fijas', 'Pre‐fabricadas']},
    desc : String
  },{
    collection: "Dietas",
    timestamps: true
})

const Dieta = mongoose.model("Dieta", DietaSchema);

module.exports = Dieta