import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from './config/db.js';

import routes from './routes/index.js';

import { notFound, errorHandler } from './middleware/error.js';

const app = express();

dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send('API running');
});

app.use('/api/products', routes.products);
app.use('/api/users', routes.users);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port:${PORT} `.yellow
      .bold
  )
);
