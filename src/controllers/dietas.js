const Dieta = require('../modules/Dieta')

// READ
async function obtenerDietas(req, res){
    data = await Dieta.find()
    res.status(200).send(data)
}

// CREATE
async function crearDieta(req, res){
    const info = req.body;
    const diet = new Dieta(info)
    const name = req.body.nombre;
    const paso = await Dieta.findOne({nombre : name});
    if(paso) return res.status(401).send({mensaje:"La dieta con ese nombre ya existe"});
    await diet.save();
    res.status(200).send(diet);
}

// DELETE
async function eliminarDieta(req,res){
    const did = req.params.did;
    const diet = await Dieta.findById(did);
    if(!diet) return res.status(404).send({mensaje:"No encontramos una dieta con ese id"});

    await diet.delete();
    res.status(200).send(diet)
}

// UPDATE
async function modificarDieta(req, res){
    const did = req.params.did;
    const nuevaInfo = req.body;
    const diet = await Dieta.findById(did);
    if(!diet) return res.status(404).send({mensaje:"No encontramos una dieta con ese id"});
    for(const key in nuevaInfo){
        diet[key] = nuevaInfo[key];
    }
    await diet.save();
    res.status(200).send(diet);
}

module.exports = {
    obtenerDietas,
    crearDieta,
    modificarDieta,
    eliminarDieta
}