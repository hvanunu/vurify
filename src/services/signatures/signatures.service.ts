// Initializes the `signatures` service on path `/signatures`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Signatures } from './signatures.class';
import createModel from '../../models/signatures.model';
import hooks from './signatures.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'signatures': Signatures & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/signatures', new Signatures(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('signatures');

  service.hooks(hooks);
}
