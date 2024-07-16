import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { userRoutes } from './modules/user/infra/controller/UserController';

async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.register(userRoutes, {
    prefix: '/users',
  });
}

export default routes;
