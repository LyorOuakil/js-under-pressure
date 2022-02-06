import { Application } from 'express';

export const initServer = (app: Application, port = 8080) => {
  return app.listen(port, () => {
    console.log(`server is listening on ${port}`);
  });
};