import { Router } from 'express';
import { CategoryRoutes } from '../modules/category/category.route';
import { AnimalRoutes } from '../modules/animal/animal.route';

type TModuleRoutes = {
  path: string;
  route: Router;
};

const router = Router();

const moduleRoutes: TModuleRoutes[] = [
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/animals',
    route: AnimalRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
