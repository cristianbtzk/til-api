import { FastifyInstance, FastifyPluginOptions } from 'fastify';

async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/', async (request, reply) => {
    return { hi: 'me' };
  });
}

export default routes;
