import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

// const CONNECTION_URL = 'mongodb+srv://hrishitapanjetha:Rishita1122@cluster0.shzj2bh.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);


