import * as express from "express";
import * as bodyParser from "body-parser";
import users from "./routes/api/users";

// create and setup express app
const app = express();
app.use(bodyParser.json());

// register routes
app.use("/users", users);

// start express server
app.listen(3000);
