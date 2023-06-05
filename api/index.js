import express from "express";
import cors from "cors";
import "dotenv/config";
import UserRoute from "./routes/UserRoutes.js";
import BillRoute from "./routes/billsRoute.js";
import connectDB from "./config/db.js";
import morgan from "morgan";
import { ValidateAccess } from "./middleware/ValidateAcess.js";

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan("dev"));

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send({ message: "API IS RUNNING" });
});

app.use("/api/auth", UserRoute);
app.use("/api", ValidateAccess, BillRoute);

connectDB().then(() => {
  console.log("MongoDB is connected");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
