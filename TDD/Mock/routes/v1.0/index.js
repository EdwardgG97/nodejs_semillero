import express from "express";
import entidad from './entidad.js';

const router = express.Router();
router.use('/entidades', entidad);

export default router;
