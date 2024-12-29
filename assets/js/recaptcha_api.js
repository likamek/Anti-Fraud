const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
require('dotenv').config(); // Add this line to load environment variables

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/your-server-endpoint", async (req, res) => {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Use environment variable
    const token = req.body["g-recaptcha-response"];

    try {
        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
        );
        if (response.data.success) {
            res.send("Authentication successful!");
        } else {
            res.send("CAPTCHA verification failed. Please try again.");
        }
    } catch (error) {
        res.send("Error verifying CAPTCHA.");
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
