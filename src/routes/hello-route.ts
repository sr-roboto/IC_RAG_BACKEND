import { FastifyInstance } from 'fastify';
import { helloController } from '../controllers/hello.controller';

export const mainRoutes = (app: FastifyInstance) => {
  app.get('/hello', helloController);
};
