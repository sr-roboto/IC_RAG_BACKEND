import { FastifyReply, FastifyRequest } from 'fastify';

export const helloController = (
  _request: FastifyRequest,
  reply: FastifyReply
) => {
  return reply.send({ message: 'Hello, World!' });
};
