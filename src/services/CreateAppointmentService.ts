import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import Appointment from '../models/Appointment';
import AppointmentRepository from '../repositories/AppointmentsRepository';
/**
 * [x] Recebimento das informações
 * [x] Tratativa de erros e exceções
 * [x] Acesso ao Repositório
 */

// DRY: Don't Repeat Yourself
interface RequestDTO {
  provider: string;
  date: Date;
}

/**
 * Dependency Inversion (SOLID)
 * Single Responsability Principle (SOLID)
 */
class CreateAppointmentService {
  public async execute({
    provider_id,
    date,
  }: RequestDTO): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This Appointment is already booked.');
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
