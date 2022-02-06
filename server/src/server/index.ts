import { Application } from 'express';
import Logger from '../common/Logger';

export const initServer = (app: Application, port = 8080) => {
  return app.listen(port, () => {
    const logger = new Logger(`server is listening on ${port}`).log();
  });
};
