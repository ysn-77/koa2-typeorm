
import { Context } from 'koa';
import * as service from '../services/user';

export const index = async (context: Context, next: () => void) => {
  context.state.data = await service.getAll();
  await next();
};

export const create = async (context: Context, next: () => void) => {
  const user = {
    userName: context.request.body.userName,
    password: context.request.body.password,
  };
  context.state.data = await service.addUser(user);
  await next();
};

export const login = async (context: Context, next: () => void) => {
  const params = {
    userName: context.request.body.userName,
    password: context.request.body.password,
  };
  const user = await service.findUserByUserName(params.userName);
  service.checkPassword(params.password, user);
  const token = service.generateToken(user);
  context.state.data = { user, token };
  await next();
};
