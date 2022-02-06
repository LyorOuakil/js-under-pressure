import 'mocha';
import { initServer } from '../src/server/index';
import express from 'express';
import { expect } from 'chai';

describe('Server testing', () => {
  it('Should listen on server', () => {
    const app = express();
    const server = initServer(app);
    const address = server.address();
    expect(address).to.be.an('object');
    expect(address).to.have.property('port');
  });
});
