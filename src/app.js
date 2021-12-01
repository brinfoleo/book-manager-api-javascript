const express = require('express');
const app = express();
const routes = require('./routes');
// Swagger JS Doc and Swagger UI for Express
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');


// Swagger Configuration
const swaggerConfiguration = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: '📖 Minimalist Book Manager API',
            version: '0.1.0',
            description:
                'Need a helping hand to manage your books 😺?' +
                'Well, you\'re in luck! This API will let you manage your books with ease! 😻',
        },
     },
    apis: ['src/routes/index.js',"src/documentation/swagger-doc.yaml"],
};
const swaggerDocs = swaggerJSDoc(swaggerConfiguration);

app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerDocs),
);

app.use(express.json());

app.use('/api/v1', routes);


module.exports = app;
