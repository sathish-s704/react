import express from 'express';
import {fetch,create,update, deleteuser}from '../controller/usercontroller.js';

const router = express.Router();
router.get('/fetch',fetch);
router.post('/create',create);
router.put('/update/:id',update);
router.delete('/delete/:id',deleteuser);
export default router;