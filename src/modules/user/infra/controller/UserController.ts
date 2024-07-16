import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { parseCreateUserBody } from './schemas/createUser';
import { createUserService } from '../../services/CreateUserService';

async function userRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.post('/', async (request, reply) => {
    const parsedBody = parseCreateUserBody(request.body);

    if (!parsedBody.success) {
      return reply.code(409).send({
        error: true,
      });
    }

    const user = await createUserService(parsedBody.data);
    return user;
  });
}

export { userRoutes };
