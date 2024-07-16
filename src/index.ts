import Fastify from 'fastify';
import routes from './routes';
import '../db/migrator';

const fastify = Fastify({
  logger: true,
});

fastify.register(routes, {
  prefix: '/api/v1',
});

fastify.listen({ port: 8080 }, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});
