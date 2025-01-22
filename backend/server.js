import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000

app.get("/",(req,res) => {
    res.send("Hello world!!");
})

app.use("/api/auth",authRoutes);

app.listen(PORT,() => console.log(`Server Running on port ${PORT}`));
