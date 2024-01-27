const express = require("express");
require("dotenv").config();
const app = express();
const authRoute = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middle");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const cors = require("cors");
const adminRoute = require("./router/admin-router");

// handling cors error
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET,POST, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);// created route for contact
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

const port = process.env.PORT || 5000;
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`server is running at port: ${port}`);
    });
});
