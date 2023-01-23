import express from "express";
import cors from "cors";
import taksRouter from "./routes/tasksRoutes.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(taksRouter);

app.listen(4000, () => console.log("Server is running in port 4000"));