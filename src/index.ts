import fastify from 'fastify';
import { App } from './app';

async function bootstrap() {
  const app = new App(fastify({ logger: true }));
  await app.start(3000, '0.0.0.0');
}

(() => {
  bootstrap();
})();
