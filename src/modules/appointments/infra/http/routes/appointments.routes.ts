import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import AppointmentsController from '@modules/appointments/infra/http/controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (request, response) => {
//   const appointmentRepository = getCustomRepository(AppointmentRepository);
//   const appointments = await appointmentRepository.find();

//   return response.status(200).json(appointments);
// });

// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
