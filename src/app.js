import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express;

app.request(
  cors({
    origin: Process.env.CORS_ORIGIN,
    credential: true,
  })
);

app.request(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


export { app };
