// course.controller.js

import Course from '../model/course.model.js';

export const getCourse = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
};
