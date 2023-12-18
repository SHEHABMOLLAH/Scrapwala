import { Router } from "express";
import { hashSync, compareSync } from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const hashedPassword = hashSync(password, 10);
    const newUser = new User({ email, hashedPassword });
    await newUser.save();

    const token = jwt.sign(email, "SECRETKEY.EXEBABY");
    res.status(200).send(JSON.stringify(token));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user === null) {
      res.sendStatus(404);
      return;
    }

    const { hashedPassword } = user;

    if (compareSync(password, hashedPassword)) {
      const token = jwt.sign(email, "SECRETKEY.EXEBABY");
      res.status(200).send(JSON.stringify(token));
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

export default authRouter;
