import express from 'express'
import {createProperty,getProperties,getPropertyById,updateProperty,deleteProperty} from '../controller/properties.js';

const router = express.Router();

router.post('/property', createProperty);
router.get('/properties', getProperties);
router.get('/property/:id', getPropertyById);
router.put('/property/:id', updateProperty);
router.delete('/property/:id', deleteProperty);
export default router;