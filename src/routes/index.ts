import { Router } from 'express';
import course from './course';
import lesson from './lesson';
import login from './login';

const router = Router();

router.use('/api/courses', course.router);
router.use('/api/lessons', lesson.router);
router.use('/api/login', login.router);

export { router };
