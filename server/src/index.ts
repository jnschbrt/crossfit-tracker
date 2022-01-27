import 'dotenv/config';
import express, { Application, Request, Response, NextFunction } from 'express';
import { connect, disconnect } from './db/conn';

// boot express
const app: Application = express();
const port = process.env.PORT;

// connect to databse
connect();

// app routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello from my express server' });
});

// start server
app.listen(port, () => console.log(`Server is listening on port ${port}`));
