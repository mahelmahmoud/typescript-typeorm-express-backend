import { Request, Response } from "express";
import { User } from "../../entity/user";
import { getManager } from "typeorm";

export const showDefaultMessage = (req: Request, res: Response) => {
  res.json({ msg: "users works" });
};

export const addUser = async (req: Request, res: Response) => {
  console.log("Inserting a new user into the database...");
  const user = new User();
  user.firstName = "Timber";
  user.lastName = "Saw";
  user.age = 25;

  const userRepository = getManager().getRepository(User);
  const addedUser = await userRepository.save(user);
  // await connection.manager.save(user);
  console.log("Saved a new user with id: " + user.id);

  console.log("Loading users from the database...");
  const users = await userRepository.find();
  console.log("Loaded users: ", users);

  console.log("Here you can setup and run express/koa/any other framework.");
  res.json(users);
};
