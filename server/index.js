import express from "express";
import cors from "cors";
import cookieParser from  "cookie-parser"
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
/*import templeRoutes from "./routes/temples.js";
import commentRoutes from "./routes/comments.js"; */

const port = 8080;
const app = express();

//middlewares
app.use((req, res, next) => {
      res.header("Access-Control-Allow-Credentials", true);
      next();
    });

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

app.listen(port, () => {
      console.log(`server listening on port ${port}`)
})

