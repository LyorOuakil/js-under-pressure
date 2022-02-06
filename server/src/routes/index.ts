import { Application, Response, NextFunction, Request } from 'express';
import { Exercise } from '../data/exerciseSet';
import { getAll } from '../data/exerciseSet';

export const routes = (app: Application) => {
  app.get('/healthcheck', (req, res) => {
    return res.sendStatus(200);
  });
  app.get('/exercices', async (req, res) => {
    const exercices: Exercise[] = await getAll();
    return res.status(200).json(exercices);
  });
};
