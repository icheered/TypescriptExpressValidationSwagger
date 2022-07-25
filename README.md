# (Typescript) Express API with input Validation and Swagger UI
Thats a mouthful isn't it.
- Typescript: The language used, a superset of Javascript with optional static types
- Express: Minimalist framework to create APIs
- Validation: The expected input is defined by a schema. If the input does not follow this schema it is rejected (instead of crashing the server)
- Swagger UI: An automatically generated documentation and testing tool to interface with the api

## Usage
This section will shortly describe your expected development process.
- Create a schema that you want to receive in `src/types/schemas.ts`
- Create a new controller in `src/controllers`
- Add the following line to your controller to specify the schema you want to receive at an endpoint (for an, example see `src/controllers/user.ts`):
    - `//  #swagger.parameters['body'] = {in: "body", schema: { $ref: "#/schemas/UserPostRequest" }}` => This will validate the input to be the same schema as UserPostRequest in `src/types/schemas.ts`
- Add your controller to `src/routes.ts`

Then to run your project execute the following commands:
1. `$ npm install       # Install dependencies`
2. `$ npm run schema    # Turn your schemas into JSON to be used for input validation (result is put in build/_schema.ts)`
3. `$ npm run spec   # Generate the Swagger UI definition (result is put in build/swagger.json)`
    - Alternatively run `$ npm run swagger` to execute both previous commands
4. `$ npm run dev       # Start the server `

The Swagger UI is accessible on `http://localhost:3000/docs`.

## Project structure explanation
This section will shortly explain the purpose of each file and folder.
- `build`: Place to store generated files, I recommend you don't touch this
    - `build/_schema.ts`: JSON representation of the schemas specified in `src/types/schemas.ts`
    - `build/swagger.json`: JSON representation of the swagger UI generated from your project code
- `utils`: Holds the scripts that generate schema and swagger UI files
    - `utils/schemaGenerator.js`: Used to generate `build/_schema.ts` from `src/types/schemas.ts`
    - `utils/swagger.ts`: Used to generate `build/swagger.json` from your entire `src` directory
- `src`: Holds all your source files
    - `src/index.ts`: Entrypoint of your entire application
    - `src/routes.ts`: Specifies endpoints and attaches controllers to requests to that endpoint
    - `src/controllers/`: Each endpoint has a controller that handles the requests. Each controller has a seperate file.
    - `src/middleware/`: Here you can put additional middleware for things like authentication
    - `src/types/`: Holdes your type definitions / schemas. These are used for input validation when a request is made. If a request does not present data that matches the schema then the request is rejected.
