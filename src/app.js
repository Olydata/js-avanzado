import express from "express";
import morgan from "morgan";

const app = express();

//Settings
app.set("port", 3306);

//Middlewares
app.use(morgan("dev"));



export default app;
