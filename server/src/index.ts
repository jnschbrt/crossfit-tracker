import express, { Application, Request, Response, NextFunction } from 'express';

// boot express
const app: Application = express();
const port = 5000;

// app routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello from my express server' });
});

// start server
app.listen(port, () => console.log(`Server is listening on port ${port}`));
