import express, { Router, Request, Response } from 'express'
import { validateBody, RequestBody } from '../middleware/validatebody'
import { _schema } from '../../build/_schema';

// Expected schema for request body
import { UserPostRequest } from "../types/schemas";

const router: Router = express.Router();

router.post("/", validateBody(_schema.definitions.UserPostRequest), async (req: RequestBody<UserPostRequest>, res: Response) => {
    //  #swagger.tags=['endpoint']
    //  #swagger.parameters['body'] = {in: "body", schema: { $ref: "#/schemas/UserPostRequest" }}

    console.log("Received valid input for User endpoint");
    const response = req.body.name
    return res.json({ name: response })
});

module.exports = router;

