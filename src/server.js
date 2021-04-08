import express from "express";
import IndexRoutes from "./routes/index.routes.js";
import taskRouters from './routes/task.routes.js';
const app = express();
//Settings
app.set("port", process.env.PORT || 3000);
app.use("/",IndexRoutes);
app.use("/task",taskRouters);
export default app;
