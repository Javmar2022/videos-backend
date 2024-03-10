const { Schema, model } = require('mongoose');

const TipoSchema = Schema({

    nombre: { type: String, required: true, enum: ['Serie', 'Pelicula'] },
    fechaCreacion: { type: Date, required: true },
    fechaActualizacion: { type: Date, required: true },
    descripcion: { type: String, required: true}

});


module.exports = model('Tipo', TipoSchema);

