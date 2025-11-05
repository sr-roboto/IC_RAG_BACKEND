import type { FastifyInstance } from 'fastify';

export class App {
  private instance: FastifyInstance;

  constructor(instance: FastifyInstance) {
    this.instance = instance;
  }

  public getInstance(): FastifyInstance {
    return this.instance;
  }

  public async start(port: number, host: string): Promise<void> {
    try {
      this.instance.ready();
      await this.instance.listen({ port, host });
      this.instance.log.info(`Starting server on http://localhost:${port}`);
    } catch (err) {
      console.error('Error starting server:', err);
      process.exit(1);
    }
  }
}
