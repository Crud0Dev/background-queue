import 'dotenv/config';
import express from 'express';
import userController from './app/controllers/userController';
import Bullboard from 'bull-board';
import Queue from './app/lib/Queue';


const app = express();
Bullboard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.post('/users', userController.store);

app.use('/admin/queues', Bullboard.UI)

app.listen(3333, () => {
  console.log('Server running on port 3333')
});
