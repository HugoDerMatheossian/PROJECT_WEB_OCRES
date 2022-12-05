const express = require('express');
const app = express();
const mongoose = require('mongoose');

const websitesRoutes = require('./routes/websites.js');
const videosRoutes = require('./routes/videos.js');

const cors = require('cors');
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Anime_Database', () => console.log("Database connected"));

app.use(express.json());
app.use(cors());
app.use('/api/websites', websitesRoutes);
app.use('/api/videos', videosRoutes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));



