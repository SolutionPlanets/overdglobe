import express from "express";
import cors from "cors";
import cookieParser from  "cookie-parser"
import multer from "multer";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import relationshipRoutes from "./routes/relationships.js";

/*import templeRoutes from "./routes/temples.js";
 */

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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
    /* const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)*/
  } 
})

const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes);
app.use("/api/relationships", relationshipRoutes);


app.listen(port, () => {
      console.log(`server listening on port ${port}`)
})

