import dotenv from "dotenv";
import express from "express";

import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT || 5000

dotenv.config();

app.use("/api/auth",authRoutes);
app.use(express.json);

app.listen(PORT,() => {
connectToMongoDB();
console.log(`Server Running on port ${PORT}`);
}); 
