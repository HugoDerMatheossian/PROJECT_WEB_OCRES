const express = require('express');
const app = express();
const mongoose = require('mongoose');

const websitesRouter = require('./routes/websites.js');
//const videosRouter = require('./routes/videos.js');

const cors = require('cors');
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Anime_Database', () => console.log("Database connected"));

app.use(express.json());
app.use(cors());
app.use('/api/websites', websitesRouter);
//app.use('/api/videos', videosRouter);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));



