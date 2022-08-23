import mongoose from 'mongoose';
import Game from '../models/gameModel.js';

export const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();

    res.status(200).json({
      data: games,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createGame = async (req, res) => {
  const game = req.body;

  const newGame = new Game({
    ...game,
    createdAt: new Date().toISOString(),
  });

  try {
    await newGame.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateGame = async (req, res) => {
  const { id } = req.params;

  console.log('ID: ', id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No game with that id');
  }
  const game = req.body;

  try {
    const updatedGame = await Game.findByIdAndUpdate(
      id,
      { ...game, id },
      { new: true }
    );
    res.status(200).json(updatedGame);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const deleteGame = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No game with that id');
  }

  try {
    await Game.findByIdAndRemove(id);
    res.status(200).json({ message: 'Game deleted successfully' });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
