import express from 'express';
import { getEntidades, getSubListById } from '../../src/controller/entidad.js';

const router = express.Router();
router.get('/', async (req, res) => {
    const userList = await getEntidades();
    res.status(200).json(userList);
});

router.get('/:entidadid', async (req, res) => {
    const entidadIdToFind = req.params.entidadid;
    const subListResult = await getSubListById(entidadIdToFind);
    res.status(200).json(subListResult);
});

export default router;