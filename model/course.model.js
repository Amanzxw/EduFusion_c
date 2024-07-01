

import mongoose from 'mongoose';

const { Schema } = mongoose;

const courseSchema = new Schema({
    imgsrc: String,
    title: String,
    description: String, // Corrected spelling of 'Description'
    link: String,
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
