import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { userRoutes } from './modules/user/infra/controller/UserController';
import { topicRoutes } from './modules/topic/infra/controller/TopicController';

async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.register(topicRoutes, {
    prefix: '/topics',
  });

  fastify.register(userRoutes, {
    prefix: '/users',
  });
}

export default routes;
