import assert from 'assert';
import app from '../../src/app';

describe('\'signatures\' service', () => {
  it('registered the service', () => {
    const service = app.service('signatures');

    assert.ok(service, 'Registered the service');
  });
});
