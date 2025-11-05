import fastify from 'fastify';
import { App } from './app';
import { mainRoutes } from './routes/hello-route';

async function bootstrap() {
  const app = new App(fastify({ logger: true }));
  mainRoutes(app.getInstance());
  await app.start(3000, '0.0.0.0');
}

(() => {
  bootstrap();
})();
