/**
 * Routes plugin, registers all routes
 */

const fp = require('fastify-plugin');

module.exports = fp((fastify, options, done) => {
  fastify.get('/', async function (req, reply) {
    return reply.view('/layout/index.ejs', {
      pageTitle: 'Welcome',
      template: 'home',
    });
  });

  fastify.get('/blog', async function (req, reply) {
    return reply.view('/layout/index.ejs', {
      pageTitle: 'Blog',
      template: 'blog',
    });
  });

  fastify.get('/learn', async function (req, reply) {
    return reply.view('/layout/index.ejs', {
      pageTitle: 'Learning Resources',
      template: 'learn',
    });
  });

  fastify.get('/work', async function (req, reply) {
    return reply.view('/layout/index.ejs', {
      pageTitle: 'Work',
      template: 'work',
    });
  });

  fastify.get('/about', async function (req, reply) {
    return reply.view('/layout/index.ejs', {
      pageTitle: 'About',
      template: 'about',
    });
  });

  done();
}, '3.x');
