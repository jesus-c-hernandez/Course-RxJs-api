import { Router } from 'express';
import { getAllCourses, getCourseById, saveCourse } from '../controllers';

const router = Router();

router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.put('/:id', saveCourse);

export default { router };
