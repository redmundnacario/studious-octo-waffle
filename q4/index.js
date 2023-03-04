import express from "express";
import * as http from "http";

import contentLengthRouter from "./routes/contentLength.js";
import { ErrorResponse } from "./utils/errorResponse.js";

const PORT = 8000;
const app = express();
const server = http.createServer(app);

app.use("/api/v1/content-length", contentLengthRouter);

// test server
app.get("/api/v1", (req, res) => {
    res.send("Hello World");
});

// fallback error if routes not recognized
app.use((req, res, next) => {
    return next(new ErrorResponse(404, "404: Not found."));
});

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
