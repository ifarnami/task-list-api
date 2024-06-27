import "dotenv/config.js";
import express from "express";
import "./db/mongoose.js";
import taskRoutes from "./routes/task.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use(taskRoutes);
app.use(userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port " + 3000);
});

// const main = async () => {
//     const user = await User.findById("6330d1e9b0995a507fedcf4f")
//     await user.populate('tasks')

//     console.log(user.tasks)
// }

// main()
