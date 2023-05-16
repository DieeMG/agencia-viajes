import express from "express";
import { paginaInicio, paginaNosotros, paginaViajes, paginaSingleViaje, paginaTestimoniales, paginaContacto} from "../controllers/paginaController.js";
import { guardarTestimonio } from "../controllers/testimonialController.js";


const router = express.Router();

router.get('/', paginaInicio ); 
router.get('/nosotros', paginaNosotros ); 
router.get('/viajes', paginaViajes ); 
router.get('/viajes/:slug', paginaSingleViaje ); 

router.get('/testimoniales', paginaTestimoniales ); 
router.post('/testimoniales', guardarTestimonio ); 
router.get('/contacto', paginaContacto ); 



export default router;