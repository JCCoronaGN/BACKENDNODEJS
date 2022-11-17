const Alimento = require('../modules/Alimento')

// READ
async function obtenerAlimentos(req, res){
    data = await Alimento.find()
    res.status(200).send(data)
}

// CREATE
async function crearAlimento(req, res){
    const info = req.body;
    const aliment = new Alimento(info)
    const name = req.body.nombre;
    const paso = await Alimento.findOne({nombre : name});
    if(paso) return res.status(401).send({mensaje:"El allimento con ese nombre ya existe"});
    await aliment.save();
    res.status(200).send(aliment);
}

// DELETE
async function eliminarAlimento(req,res){
    const aid = req.params.aid;
    const aliment = await Alimento.findById(aid);
    if(!aliment) return res.status(404).send({mensaje:"No encontramos el alimento con ese id"});

    await aliment.delete();
    res.status(200).send(aliment)
}

// UPDATE
async function modificarAlimento(req, res){
    const aid = req.params.aid;
    const nuevaInfo = req.body;
    const aliment = await Alimento.findById(aid);
    if(!aliment) return res.status(404).send({mensaje:"No encontramos el alimento con ese id"});
    for(const key in nuevaInfo){
        aliment[key] = nuevaInfo[key];
    }
    await aliment.save();
    res.status(200).send(aliment);
}

module.exports = {
    obtenerAlimentos,
    crearAlimento,
    modificarAlimento,
    eliminarAlimento
}