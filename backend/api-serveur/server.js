const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routesUrls = require('./routes/routes.js');
const cors = require('cors');
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Anime_Database', () => console.log("Database connected"));



app.use(express.json());
app.use(cors());
app.use('/api', routesUrls);
app.listen(PORT, console.log(`Server is starting at ${PORT}`));