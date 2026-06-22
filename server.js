"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
const corsOptions = {
    origin: `http://localhost:${port}`
}


app.use(cors(corsOptions));
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function getRandomImage() {
    const client_id = process.env.CLIENT_ID;
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`Unsplash API error: ${response.status}`);
        }

        const returnedData = await response.json();

        return returnedData.urls.regular;
    } catch (error) {
        console.error("Error fetching image:", error);
        throw error;
    }
}

app.get("/api/v1/getRandomImage", async (request, response) => {
    try {
        const imageUrl = await getRandomImage();

        response.status(200).json({
            status: 200,
            data: imageUrl
        });
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "Failed to retrieve image"
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Press Ctrl+C to stop the server.");
});
