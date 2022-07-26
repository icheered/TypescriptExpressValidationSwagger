import express, { Express, Request, Response } from "express";
const morgan = require('morgan')

// Create app and add middleware
const app: Express = express()
app.use(morgan('tiny'))   // Log requests to console
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// Ping endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript + Validation + Swagger Server')
})

// Enable documentation
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../build/swagger.json');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Include routes
const router = require('./routes')
app.use(router)

// Start server
app.listen(3000, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:3000`)
})
