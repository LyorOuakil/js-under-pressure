import 'mocha';
import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import express, { Application } from 'express';
import { initServer } from '../src/server';
import { routes } from '../src/routes';
import { afterEach, beforeEach } from 'mocha';
import { Exercise, getAll } from '../src/data/exerciseSet';
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

  // Testing /healthcheck Route
  it('/healthcheck should get a 200 response', () => {
    chai
      .request(server)
      .get('/healthcheck')
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
  });
  it('/healtcheck should get a 404 status response on wrong path', () => {
    chai
      .request(server)
      .get('/healthchecks')
      .end((err, res) => {
        expect(res).to.have.status(404);
      });
  });

  // Test /exercice Route
  it('/exercices API should get an array of object', () => {
    chai
      .request(server)
      .get('/exercices')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        expect(res.body[0]).to.have.property('name');
        expect(res.body[0]).to.have.property('description');
        expect(res.body[0]).to.have.property('baseCode');
        expect(res.body[0]).to.have.property('tests');
      });
  });

  it('/exercices API should get a 404 status on wrong path', () => {
    chai
      .request(server)
      .get('/exercice')
      .end((err, res) => {
        expect(res).to.have.status(404);
      });
  });
});
