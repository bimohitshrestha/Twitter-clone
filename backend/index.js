require('dotenv').config();
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const port = process.env.PORT || 2002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setting up cors
const corsOption = {
    origin: "",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credential: true,
    exposeHeaders: ["X-auth-token"],
}

app.use(cors(corsOption));
app.listen(port, () => {
    console.log(`Server start at port ${port}`)
})