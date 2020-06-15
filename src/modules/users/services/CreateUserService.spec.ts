import AppError from '@shared/errors/AppError';
import 'reflect-metadata';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

describe('CraeteUser', () => {
  it('Should be able to create a new user.', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createAppointment = new CreateUserService(
      fakeUserRepository,
      fakeHashProvider,
    );

    const user = await createAppointment.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123',
    });
    expect(user).toHaveProperty('id');
  });

  it('Should not be able to create a new user with same email.', async () => {
    const fakeUserRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUserRepository,
      fakeHashProvider,
    );

    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123',
    });

    expect(
      createUser.execute({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
