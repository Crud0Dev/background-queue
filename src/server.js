import 'dotenv/config';
import express from 'express';
import userController from './app/controllers/userController';

const app = express();

app.use(express.json());

app.post('/users', userController.store);

app.listen(3333, () => {
  console.log('Server running on port 3333')
});
