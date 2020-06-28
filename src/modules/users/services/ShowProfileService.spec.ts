import ShowProfileService from '@modules/users/services/ShowProfileService';
import AppError from '@shared/errors/AppError';
import 'reflect-metadata';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

let fakeUserRepository: FakeUsersRepository;
let showProfileService: ShowProfileService;

describe('UploadProfile', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();
    showProfileService = new ShowProfileService(fakeUserRepository);
  });
  it('Should be able to show the profile.', async () => {
    const user = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com.br',
      password: '123456',
    });

    const profile = await showProfileService.execute({
      user_id: user.id,
    });

    expect(profile.name).toBe('John Doe');
    expect(profile.email).toBe('johndoe@example.com.br');
  });

  it('Should not be able to show the profile from a unexisting user.', async () => {
    expect(
      showProfileService.execute({
        user_id: `non-existing-user-id`,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
