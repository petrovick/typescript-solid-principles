export default class UsersController {
  public async create(request, response) {
    const { name, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({ name, email, password });

    delete user.password;

    return response.json(user);
  }
}
