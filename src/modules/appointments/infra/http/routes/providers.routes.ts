import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import ProvidersController from '@modules/appointments/infra/http/controllers/ProvidersController';

const appointmentsRouter = Router();
const providersController = new ProvidersController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', providersController.create);

export default appointmentsRouter;
