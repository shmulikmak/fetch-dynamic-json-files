import express from 'express';
import cors from 'cors';
import fileRoutes from './routes/file.routes';

const app = express();

app.use(cors());
// app.use(express.json());
app.use('/api', fileRoutes);

const host = process.env.HOST ?? 'http://localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3333;
const server = app.listen(port, () => {
  console.log(`Listening at ${host}:${port}/api`);
});
server.on('error', console.error);