import * as joi from 'joi';
import * as bcrypt from 'bcryptjs';
import * as repo from '../repositories/users';
import * as interfaces from '../interfaces/user';
import * as jwt from 'jsonwebtoken';
import config from '../../config';
import { User } from '../entities/users';

export const getAll = async () => {
  return repo.getAll();
};

export const addUser = async (user: interfaces.IUserCreateRequest) => {
  await joi.validate(user, {
    userName: joi.string().required(),
    password: joi.string().required(),
  });
  const newUser = new User();
  newUser.userName = user.userName;
  newUser.password = bcrypt.hashSync(user.password);

  return repo.save(newUser);
};

export const findUserByUserName = async (userName: string) => {
  const user = await repo.findByUserName(userName);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

export const checkPassword = (password: string, user: User) => {
  const passwordMatches = bcrypt.compareSync(password, user.password);
  if (!passwordMatches) {
    throw new Error('Invalid password');
  }
};

export const generateToken = (user: User) => {
  return jwt.sign(
    {
      id: user.id,
    },
    config.api.secretKey,
    {
      expiresIn: '1d',
    }
  );
};
