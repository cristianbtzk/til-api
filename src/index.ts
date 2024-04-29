import Fastify from 'fastify';
import routes from './route';

const fastify = Fastify({
  logger: true,
});

fastify.register(routes);

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});
