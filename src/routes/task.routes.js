import {Router} from 'express';
const router = Router();
import  {connect} from '../database';

router.get("/",async (req,res)=>{
    const db = await connect();
    const result = await db.collection("task").find({}).toArray();
    res.json(result);
});

router.post("/",async (req,res)=>{
    const db = await connect();
    res.json("Task created");
});

export default router;