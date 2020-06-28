import ListProvidersService from '@modules/appointments/services/ListProvidersService';
import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

export default class ProvidersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listProvidersService = container.resolve(ListProvidersService);

    const providers = await listProvidersService.execute({
      user_id: id,
    });

    return response.json(providers);
  }
}
