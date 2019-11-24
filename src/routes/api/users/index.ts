import "reflect-metadata";
import * as express from "express";
import { addUser, showDefaultMessage } from "../../../controllers/users";

const router = express.Router();

router.get("/", showDefaultMessage);

router.get("/add", addUser);

export default router;
