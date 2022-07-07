import assert from 'assert';
import app from '../../src/app';

describe('\'partners\' service', () => {
  it('registered the service', () => {
    const service = app.service('partners');

    assert.ok(service, 'Registered the service');
  });
});
