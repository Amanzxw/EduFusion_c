

import express from 'express';
import { getCourse } from '../controller/course.controller.js';

const router = express.Router();

// Example route definition
router.get('/courses', getCourse);

export default router;

