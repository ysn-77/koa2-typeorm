import config from '../../config';
import * as ctrl from '../controllers/heroes';
import * as compose from 'koa-compose';
import * as Router from 'koa-router';
import authenticationMiddleware from '../middlewares/authentication';

const router = new Router({
  prefix: `${config.api.baseURL}/heroes`,
});

router.use(authenticationMiddleware()).get('/', ctrl.getAll);
router.use(authenticationMiddleware()).post('/', ctrl.addHero);
router.use(authenticationMiddleware()).patch('/', ctrl.updateHero);
router.use(authenticationMiddleware()).delete('/', ctrl.deleteHero);

const routes = router.routes();
export default compose([routes]);
