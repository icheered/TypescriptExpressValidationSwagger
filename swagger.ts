import {_schema} from './build/_schema';
const swaggerAutogen = require('swagger-autogen')();

require('dotenv').config()

const doc = {
  info: {
    version: '0.1.0',
    title: 'Your cool API',
    description: 'This is your cool API made by ICheered',
  },
  host: 'localhost:3000',      
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  schemas: _schema.definitions
  // tags: [
  //   {
  //     name: 'root',
  //     description: 'Application endpoints for testing',
  //   }, 
  //   {
  //     name: 'insurances',
  //     description: 'Insurance endpoints for retrieving information',
  //   },
  // ],
};

const outputFile = 'build/swagger.json';
const endpointsFiles = ['src/index.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc)