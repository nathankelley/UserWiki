const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-docs/users_swagger.json');
const swaggerPokemonDocument = require('../swagger-docs/pokemon_swagger.json');
const swaggerEldenRingDocument = require('../swagger-docs/eldenring_swagger.json');
const isLocal = process.env.NODE_ENV !== 'production';

// Function to update the host dynamically in the Swagger JSON
const updateSwaggerHost = (swagger, req) => {
  const host = isLocal ? `localhost:${3000}` : req.get('host');
  swagger.host = host;
};

router.use('/api-docs', swaggerUi.serve);

router.get('/api-docs/users', (req, res) => {
  updateSwaggerHost(swaggerDocument, req);
  res.send(swaggerUi.generateHTML(swaggerDocument, { routePrefix: '/api-docs/users' }));
});

router.get('/api-docs/pokemon', (req, res) => {
  updateSwaggerHost(swaggerPokemonDocument, req);
  res.send(swaggerUi.generateHTML(swaggerPokemonDocument, { routePrefix: '/api-docs/pokemon' }));
});

router.get('/api-docs/eldenring', (req, res) => {
  updateSwaggerHost(swaggerEldenRingDocument, req);
  res.send(swaggerUi.generateHTML(swaggerEldenRingDocument, { routePrefix: '/api-docs/eldenring' }));
});

module.exports = router;
