const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    role: {
        type: String,
        enum: {
            values: ["Admin", "Docente", "Estudiante"],
            message: '{VALUE} no es un rol válido'
        },
        default: "Estudiante"
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('User', userSchema);