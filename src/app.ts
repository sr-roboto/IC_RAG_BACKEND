import type { FastifyInstance } from 'fastify';

export class App {
  private instance: FastifyInstance;

  constructor(instance: FastifyInstance) {
    this.instance = instance;
  }

  public async start(port: number, host: string): Promise<void> {
    try {
      await this.instance.listen({ port, host });
      console.log(`Server is running at http://${host}:${port}`);
    } catch (err) {
      console.error('Error starting server:', err);
      process.exit(1);
    }
  }
}
