import React, { useEffect, useState } from 'react';
import Cards from '../Components/Cards.js';
import axios from "axios";
import "./Courses.css";


function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await axios.get("http://localhost:4001/api/courses");
        console.log(res.data);
        setCourses(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCourses();
  }, []);

  return (
    <div className="courses-page">
      <h1>Our Courses</h1>
      <div className="courses-container">
        {courses.map((course, index) => (
          <Cards
            key={index}
            imgsrc={course.imgsrc}
            title={course.title}
            Description={course.description}
            link={course.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
