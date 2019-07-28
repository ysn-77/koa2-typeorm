import config from '../../config';
import * as ctrl from '../controllers/heroes';
import * as compose from 'koa-compose';
import * as Router from 'koa-router';

const router = new Router({
  prefix: `${config.api.baseURL}/heroes`,
});

router.get('/', ctrl.getAll);
router.post('/', ctrl.addHero);
router.patch('/', ctrl.updateHero);

const routes = router.routes();
export default compose([routes]);
