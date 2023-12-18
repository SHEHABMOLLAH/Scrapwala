import { Router } from "express";
import Form from "../models/formModel.js";
import upload from "../middleware/multer.js";

const formRouter = Router();

formRouter.get("/", async (req, res) => {
  try {
    const forms = await Form.find();

    res.send(forms);
  } catch {
    res.sendStatus(500);
  }
});
formRouter.post("/", upload.array("photos", 3), async (req, res) => {
  try {
    const files = req.files.map((item) => item.filename);

    const newForm = new Form({ ...req.body, photos: files });
    await newForm.save();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

  res.status(200).end("Your files uploaded.");
});

export default formRouter;
