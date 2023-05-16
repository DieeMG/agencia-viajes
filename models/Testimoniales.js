import { Sequelize } from "sequelize";
import db from '../config/db.js';

//nombre de tabla
export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },

});