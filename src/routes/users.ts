import config from '../../config';
import * as ctrl from '../controllers/users';
import * as compose from 'koa-compose';
import * as Router from 'koa-router';

const router = new Router({
  prefix: `${config.api.baseURL}/users`,
});

router.get('/', ctrl.index);
router.post('/', ctrl.create);
router.post('/login/', ctrl.login);

const routes = router.routes();
export default compose([routes]);
