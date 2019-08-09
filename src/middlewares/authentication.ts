import * as jwt from 'jsonwebtoken';
import * as compose from 'koa-compose';
import { Context } from 'koa';
import config from '../../config';


const handler = async (ctx: Context, next: () => void) => {
  const token = ctx.headers.token;
  const decodedToken = jwt.verify(token, config.api.secretKey) as any;
  ctx.state.currentUserId = decodedToken.id;
  await next();
};

export default () => compose([handler]);
