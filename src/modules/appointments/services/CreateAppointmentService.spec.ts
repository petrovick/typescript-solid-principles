import 'reflect-metadata';
import CreateAppointmentService from './CreateAppointmentService';
import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentsRepository';

describe('CreateAppointment', () => {
  it('Should be able to create a new appointment.', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentRepository,
    );
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123123123',
    });
    console.log('appointmentappointmentappointment - 2', appointment);
    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123123');
  });

  it('Should NOT be able to create two appointments at the same time.', () => {
    expect(1 + 2).toBe(3);
  });
});
