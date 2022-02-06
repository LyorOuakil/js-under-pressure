import 'mocha';
import chai, { expect } from 'chai';
import Logger from '../src/common/Logger';

describe('test common methods', () => {
  it('should have property message', () => {
    const logger = new Logger('Good morning Masteos');
    expect(logger).to.be.an('object');
    expect(logger).to.have.property('message');
  });

  it('should return a string', () => {
    const logger = new Logger('Good morning guys');
    expect(logger.log()).to.be.a('string');
    expect(logger.log()).to.be.eq('Good morning guys');
  });
});
