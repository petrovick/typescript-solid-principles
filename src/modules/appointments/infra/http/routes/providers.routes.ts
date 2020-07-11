import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import ProvidersController from '@modules/appointments/infra/http/controllers/ProvidersController';
import ProviderDayAvailabilityController from '@modules/appointments/infra/http/controllers/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from '@modules/appointments/infra/http/controllers/ProviderMonthAvailabilityController';

const appointmentsRouter = Router();
const providersController = new ProvidersController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', providersController.create);
appointmentsRouter.get(
  '/:id/month-availability',
  providerMonthAvailabilityController.index,
);
appointmentsRouter.get(
  '/:id/day-availability',
  providerDayAvailabilityController.index,
);

export default appointmentsRouter;
