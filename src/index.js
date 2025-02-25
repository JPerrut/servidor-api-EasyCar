import express from "express";
import cors from "cors";

const app = express();

// Middlewares...
app.use(cors());
app.use(express.json());

// Routes...

app.listen(3000, () => {
  console.log("Server running on port 3001");
});
