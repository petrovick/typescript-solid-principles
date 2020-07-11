import { injectable, inject } from 'tsyringe';
import { getDaysInMonth, getDate } from 'date-fns';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequestDTO {
  provider_id: string;
  month: number;
  year: number;
}
/**
 * [ { day: 1, available: false }, { day: 2, available: true } ]
 */
type IResponse = Array<{
  day: number;
  available: boolean;
}>;

@injectable()
class ListProviderMonthAvailabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    provider_id,
    month,
    year,
  }: IRequestDTO): Promise<IResponse> {
    const appointments = await this.appointmentRepository.findAllInMonthFromProvider(
      {
        provider_id,
        month,
        year,
      },
    );

    const numberOfDaysInMonth = getDaysInMonth(new Date(year, month - 1));
    /**
     * [1, 2, 3, 4,...30]
     */
    const eachDayArray = Array.from(
      { length: numberOfDaysInMonth },
      (value, index) => index + 1,
    );

    const availability = eachDayArray.map(day => {
      const appointmentsInDay = appointments.filter(appointment => {
        return getDate(appointment.date) === day;
      });
      return {
        day,
        available: appointmentsInDay.length < 10, // 10 hora sdiscponíveis por dia
      };
    });
    console.log(eachDayArray);
    return availability;
  }
}

export default ListProviderMonthAvailabilityService;
