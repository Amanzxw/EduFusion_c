

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import courseRouter from './route/course.route.js';
import cors from "cors";
import userRoute from "./route/user.route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4001;
const MongoDBURI = process.env.MongoDBURI;

mongoose.connect(MongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Remove duplicate middleware declaration for express.json()
// Only need to declare once
// app.use(express.json());

// Route setup
app.use('/api', courseRouter);
app.use('/user', userRoute); // Corrected the path prefix to use `/user`

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

