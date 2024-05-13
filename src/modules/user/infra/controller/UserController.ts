import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { IUserRepository } from '../../repositories/IUserRepository';

async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.post('/', async (request, reply) => {
    return { hi: 'me' };
  });
}

export default routes;
