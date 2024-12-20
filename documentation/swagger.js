const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',  
      info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'API for managing clients, users, and admin operations',
      },
      servers: [
        {
          url: 'http://localhost:5000',
          description: 'Local server',
        },
        {
          url: 'https://firstfloortaskmanager.onrender.com/',
          description: 'render server',
        }
      ],
    },
    apis: ['./documentation/*.js'],  
  };
  
const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = swaggerDocs;
