import express from "express";
import cors from "cors";
import "dotenv/config";
import UserRoute from "./routes/UserRoutes.js";
import connectDB from "./config/db.js";

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "API IS RUNNING" });
});

app.use("/auth", UserRoute);

connectDB().then(() => {
    console.log("MongoDB is connected");
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
