const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-docs/users_swagger.json');
const swaggerPokemonDocument = require('../swagger-docs/pokemon_swagger.json');
const swaggerEldenRingDocument = require('../swagger-docs/eldenring_swagger.json');

router.use('/api-docs', swaggerUi.serve);

router.get('/api-docs/users', (req, res) => {
  res.send(swaggerUi.generateHTML(swaggerDocument, { routePrefix: '/api-docs/users' }));
});

router.get('/api-docs/pokemon', (req, res) => {
  res.send(swaggerUi.generateHTML(swaggerPokemonDocument, { routePrefix: '/api-docs/pokemon' }));
});

router.get('/api-docs/eldenring', (req, res) => {
  res.send(swaggerUi.generateHTML(swaggerEldenRingDocument, { routePrefix: '/api-docs/eldenring' }));
});

module.exports = router;
