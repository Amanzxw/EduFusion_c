import React from 'react';
import Cards from '../Components/Cards.js';
import "./Courses.css";

const courseData = [
  {
    imgsrc: "images/UIUX course.jpg",
    title: "UI/UX Design Course",
    description: "Learn to design interfaces that stand out. Elevate your design skills to the next level.",
    link: "https://www.udemy.com/course/ui-ux-designs"
  },
  {
    imgsrc: "images/D.M Course pic.jpg",
    title: "Digital Marketing Course",
    description: "Master the art of online promotion with our comprehensive Digital Marketing Course, covering SEO, social media strategies, and data analytics to boost your digital presence.",
    link: "https://www.udemy.com/course/learn-digital-marketing-course/"
  },
  {
    imgsrc: "images/web-development-pic.png",
    title: "Web Development Course",
    description: "Dive into the world of coding with our Web Development Course, learning HTML, CSS, JavaScript, and more to build dynamic and responsive websites from scratch.",
    link: "https://www.udemy.com/topic/web-development/"
  }
];

const Courses = () => {
  return (
    <div className="courses-page">
      <h1>Our Courses</h1>
      <div className='courses-container'>
        {courseData.map((course, index) => (
          <Cards
            key={index}
            imgsrc={course.imgsrc}
            title={course.title}
            Describtion={course.description}
            link={course.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
