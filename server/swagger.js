const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'UserWiki',
    description: 'Wiki API'
  },
  host: 'localhost:3000',
  schemes: ['http']
};
const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// Run server after it gets generated
swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
  await import('./server.js');
});