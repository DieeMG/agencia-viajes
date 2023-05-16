import { Testimonial } from '../models/Testimoniales.js';
import { Viaje } from '../models/Viaje.js';

const paginaInicio = async (req, res) => {

    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({limit: 3}));

    try {

        const resultado = await Promise.all(promiseDB);

        res.render("inicio", {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error)
    }

}

const paginaNosotros = (req, res) => {
    res.render("nosotros", {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {

    const viajes = await Viaje.findAll();

    res.render("viajes", {
        pagina: 'Próximos viajes',
        viajes,
    });
}

const paginaSingleViaje = async (req, res) => {
    
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug }}) 

        res.render('viaje', {
            pagina: 'Información del viaje',
            viaje
        })

    } catch (error) {
        console.log(error);        
    }
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales =  await Testimonial.findAll();

        res.render("testimoniales", {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error)
    }

}

const paginaContacto = (req, res) => {
    res.render("contacto", {
        pagina: 'Contacto'
    });
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaContacto,
    paginaSingleViaje
}