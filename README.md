# Todo: Readme
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
    - `//  #swagger.parameters['body'] = {in: "body", schema: { $ref: "#/schemas/UserPostRequest" }}`
- Add your controller to `src/routes.ts`

Then to run your project execute the following commands:
1. `$ npm install       # Install dependencies`
2. `$ npm run schema    # Turn your schemas into JSON to be used for input validation (result is put in build/_schema.ts)`
3. `$ npm run swagger   # Generate the Swagger UI definition (result is put in build/swagger.json)`
4. `$ npm run dev       # Start the server `
The Swagger UI is accessible on `http://localhost:3000/docs`.