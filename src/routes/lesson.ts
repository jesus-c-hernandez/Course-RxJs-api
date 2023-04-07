import { Router } from 'express';
import { searchLessons } from '../controllers';

const router = Router();

router.get('/', searchLessons);

export default { router };
