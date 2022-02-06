import { Application } from 'express';

export const initServer = (app: Application, port = 8080) => {
  return app.listen(port, () => {
    if (!(process.env.NODE_ENV === 'TEST')) {
      console.log(`server is listening on ${port}`);
    }
  });
};
