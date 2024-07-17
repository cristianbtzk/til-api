import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { parseCreateTopicBody } from './schemas/createTopic';
import { createTopicService } from '../../services/CreateTopicService';

async function topicRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.post('/', async (request, reply) => {
    const parsedBody = parseCreateTopicBody(request.body);

    if (!parsedBody.success) {
      return reply.code(409).send({
        error: true,
      });
    }

    const topic = await createTopicService(parsedBody.data);
    return topic;
  });
}

export { topicRoutes };
