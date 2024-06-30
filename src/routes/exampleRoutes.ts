import { Router } from 'express';
import { getExample } from '../controllers/exampleController';

const router = Router();

router.get('/', getExample);

export default router;
