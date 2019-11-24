import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";

import { addUser, showDefaultMessage } from "../../../controllers/users";
import { Request, Response } from "express";
import { User } from "../../../entity/user";

const router = express.Router();

router.get("/", showDefaultMessage);

router.get("/add", (req: Request, res: Response) => {
  createConnection()
    .then(async connection => {
      console.log("Inserting a new user into the database...");
      const user = new User();
      user.firstName = "Timber";
      user.lastName = "Saw";
      user.age = 25;
      await connection.manager.save(user);
      console.log("Saved a new user with id: " + user.id);

      console.log("Loading users from the database...");
      const users = await connection.manager.find(User);
      console.log("Loaded users: ", users);

      console.log(
        "Here you can setup and run express/koa/any other framework."
      );
      res.json(users);
    })
    .catch(error => console.log(error));
});

export default router;
