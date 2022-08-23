import express from 'express';
import {
  createGame,
  deleteGame,
  getAllGames,
  updateGame,
} from '../controllers/game.js';

const router = express.Router();

router.get('/', getAllGames);
router.post('/', createGame);
router.patch('/:id', updateGame);
router.delete('/:id', deleteGame);

export default router;
