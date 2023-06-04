import express from "express";
import cors from "cors";
import "dotenv/config";
import UserRoute from "./routes/UserRoutes.js";
import BillRoute from "./routes/billsRoute.js";
import connectDB from "./config/db.js";
import morgan from "morgan";

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan("dev"));

app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());

app.get("/api", (req, res) => {
  res.send({ message: "API IS RUNNING" });
});


app.use("/api", UserRoute);
app.use('/api', BillRoute)


connectDB().then(() => {
    console.log("MongoDB is connected");
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
