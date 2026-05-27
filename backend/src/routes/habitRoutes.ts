import { Router } from 'express';
import { HabitController } from '../controllers/habitController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.use(authMiddleware);

router.post('/', HabitController.createHabit);
router.get('/', HabitController.listHabitsByUser);
router.get('/:id', HabitController.getHabitById);
router.put('/:id', HabitController.updateHabit);
router.delete('/:id', HabitController.deleteHabit);

export default router;
