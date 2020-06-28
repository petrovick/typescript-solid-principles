import AppError from '@shared/errors/AppError';
import 'reflect-metadata';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUserRepository: FakeUsersRepository;
let listProvidersService: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();
    listProvidersService = new ListProvidersService(fakeUserRepository);
  });
  it('Should be able to list the providers.', async () => {
    const user1 = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com.br',
      password: '123456',
    });
    const user2 = await fakeUserRepository.create({
      name: 'John Doe 2',
      email: 'johndoe2@example.com.br',
      password: '123456',
    });
    const loggedUser = await fakeUserRepository.create({
      name: 'John Doe 3',
      email: 'johndoe3@example.com.br',
      password: '123456',
    });

    const providers = await listProvidersService.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
