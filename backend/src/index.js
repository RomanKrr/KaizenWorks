import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import path from "path"

import { connectDB } from "./lib/db.js";
import adminRoute from "./routes/admin.route.js"
import productRoute from "./routes/products.route.js"

dotenv.config();
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));



const PORT = process.env.PORT;
const __dirname = path.resolve();


app.use("/api/admin", adminRoute);
app.use("/api/products", productRoute);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve("frontend", "dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve("frontend", "dist", "index.html"));
    });
}



app.listen(PORT, () =>{
    console.log("Hello back", PORT);
    connectDB();
})