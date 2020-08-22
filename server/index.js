const path = require('path');

const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// configure logger
const logConfig = {
  level: process.env.LOG_LEVEL || 'error',
  prettyPrint: !!process.env.NODE_ENV === 'development',
  serializers: {
    res(reply) {
      return {
        statusCode: reply.statusCode,
      };
    },
  },
};

const fastify = require('fastify')({
  logger: logConfig,
});

// Configure port
const port = process.env.PORT || 5000;

// Serve public folder files
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '..', 'public'),
});

// Run the server
const start = async () => {
  try {
    await fastify.listen(port);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
