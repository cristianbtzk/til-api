import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { UserRepository } from '../infra/kysely/UserRepository';
import { v4 } from 'uuid';
import { genSalt, hash } from 'bcrypt';

const createUserService = async ({ email, name, password }: CreateUserDTO) => {
  const id = v4();

  const saltRounds = 10;

  const salt = await genSalt(saltRounds);

  const passwordHash = await hash(password, salt);

  const user = await UserRepository.create({
    id,
    email,
    name,
    password: passwordHash,
  });

  return user;
};

export { createUserService };
