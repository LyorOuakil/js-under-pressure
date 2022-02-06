import 'mocha';
import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import express, { Application } from 'express';
import { initServer } from '../src/server';
import { routes } from '../src/routes';
import { afterEach, beforeEach } from 'mocha';
import { isatty } from 'tty';

chai.should();
chai.use(chaiHttp);

describe('API routes', () => {
  let app: Application;
  let server: any;
  beforeEach(() => {
    app = express();
    server = initServer(app);
    routes(app);
  });

  afterEach(() => server.close());

  // Testing /healthcheck Routes
  it('should get a 200 response', () => {
    chai
      .request(server)
      .get('/healthcheck')
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
  });
  it('should get a 404 status response', () => {
    chai
      .request(server)
      .get('/healthchecks')
      .end((err, res) => {
        expect(res).to.have.status(404);
      });
  });
});
