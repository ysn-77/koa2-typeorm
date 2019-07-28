
import { Context } from 'koa';
import * as service from '../services/user';

export const index = async (ctx: Context, next: () => void) => {
  ctx.state.data = await service.getAll();
  await next();
};