import mongoose from 'mongoose';

const gameSchema = mongoose.Schema({
  title: String,
  players: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Game = mongoose.model('Game', gameSchema);

export default Game;
