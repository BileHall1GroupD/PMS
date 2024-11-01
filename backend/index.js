import express from "express";
import userRoutes from "./routes/User.js";
import { connectDb } from "./config/Db.js";
import cros from "cors";
import propertRoute from "./routes/properties.js";
import tenantRoute from "./routes/tenant.js";

const port = 3000;
const app = express();
app.use(cros());

// Middleware to parse JSON bodies
app.use(express.json());

// Use defined routes from UserRoutes.js
app.use("/api", userRoutes);
app.use("/api", propertRoute);
app.use("/api", tenantRoute);

app.listen(port, () => {
  connectDb("mongodb://localhost:27017/PMS");
  console.log(`Server is running on port ${port}`);
});
