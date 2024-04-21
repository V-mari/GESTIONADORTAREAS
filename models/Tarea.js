const mongoose = require('mongoose');

const tareaEsquema = new mongoose.Schema({
    titulo : String,
    descripcion : String,
    prioridad : Number
})

const TareaModel = mongoose.model('Tarea',tareaEsquema,'tarea');
module.exports = TareaModel;