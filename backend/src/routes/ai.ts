import { Router } from 'express';
import { aiAssistant } from '../services/mockData';

const router = Router();

router.post('/itinerary', (req, res) => {
  const { timeAvailable } = req.body;
  const result = aiAssistant(timeAvailable);
  res.json(result);
});

export default router;
