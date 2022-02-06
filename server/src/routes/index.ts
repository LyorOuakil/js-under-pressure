import { Application, Response, NextFunction, Request } from 'express';

export const routes = (app: Application) => {
  app.get('/healthcheck', (req, res) => {
    return res.sendStatus(200);
  });
};
