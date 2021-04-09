import { Router } from "express";
import { connect } from "../database";
import { ObjectID } from "mongodb";
const router = Router();

router.get("/", async (req, res) => {
  const db = await connect();
  const result = await db.collection("task").find({}).toArray();
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const result = await db
    .collection("task")
    .find({ _id: ObjectID(id) })
    .toArray();
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const result = await db.collection("task").deleteOne({ _id: ObjectID(id) });
  res.json({
    message: `Task ${id} deleted`,
    result,
  });
});

router.post("/", async (req, res) => {
  try {
    const db = await connect();
    const { title, description } = req.body;
    if (title === undefined || description === undefined) {
      throw new Error("Undefined params");
    } else {
      const result = await db
        .collection("task")
        .insertOne({ title, description });
      console.log(result);
      res.json(result.ops[0]);
    }
  } catch (error) {
    console.log(error);
    res.json({ title: error.name, error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const db = await connect();
    const { title, description } = req.body;
    if (title === undefined || description === undefined) {
      throw new Error("Undefined params");
    } else {
      const result = await db
        .collection("task")
        .updateOne({ _id: ObjectID(id) }, { $set: { title, description } });
      console.log(result);
      res.json({
        message: `Task ${id} updated`,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ title: error.name, error: error.message });
  }
});

router.put("/:id/title", async (req, res) => {
  try {
    const { id } = req.params;
    const db = await connect();
    const { title } = req.body;
    if (title === undefined) {
      throw new Error("Undefined params");
    } else {
      const result = await db
        .collection("task")
        .updateOne({ _id: ObjectID(id) }, { $set: { title } });
      console.log(result);
      res.json({
        message: `Title of Task ${id} updated`,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ title: error.name, error: error.message });
  }
});

router.put("/:id/description", async (req, res) => {
  try {
    const { id } = req.params;
    const db = await connect();
    const { description } = req.body;
    if (description === undefined) {
      throw new Error("Undefined params");
    } else {
      const result = await db
        .collection("task")
        .updateOne({ _id: ObjectID(id) }, { $set: { description } });
      console.log(result);
      res.json({
        message: `Description of Task ${id} updated`,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ title: error.name, error: error.message });
  }
});

export default router;
