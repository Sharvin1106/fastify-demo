const fastify = require("fastify")({ logger: true });
const fastifySwagger = require("fastify-swagger");
const PORT = 5000;
const itemRoutes = require("./routes/items");

fastify.register(fastifySwagger, {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "fastify-api",
    },
  },
});
fastify.register(itemRoutes);

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
