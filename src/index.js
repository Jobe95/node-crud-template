import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import gameRoutes from './routes/games.js';
import { port, connectionString } from './settings.js';

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/game', gameRoutes);

mongoose
  .connect(connectionString)
  .then(() =>
    app.listen(port, () => console.log(`Server running on port: ${port}`))
  )
  .catch((err) => console.log(err.message));
