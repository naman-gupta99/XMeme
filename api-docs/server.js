import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerDoc from "./swagger.json";

const app = express();
const port = 8080;

// Middlewares
app.use(cors());

// Serve Swagger Docs
app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(port, () => {
    console.log("Running on port " + port);
});
