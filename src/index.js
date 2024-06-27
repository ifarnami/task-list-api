import "dotenv/config.js";
import express from "express";
import "./db/mongoose.js";
import taskRoutes from "./routes/task.routes.js";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(taskRoutes);
app.use(userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port " + 3000);
});
