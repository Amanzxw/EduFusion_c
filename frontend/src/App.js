

import React from 'react';
import Logo from './Components/logo.js';
import Hero from './Components/Hero.js';
import SCards from './Components/SCards.js';
import Cards from './Components/Cards.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Updated import for React Router v6
import About from './pages/About.js';
import Contact from "./pages/Contact.js";
import Courses from "./pages/Courses.js";
import Signing from "./pages/Signing.js";
import Layout from './Layout';
import "./App.css";

// Example course data
const courses = [
  {
    imgsrc: "images/UIUX course.jpg",
    title: "UI/UX Design Course",
    Describtion: "Learn to design interfaces that stand out. Elevate your design skills to the next level.",
    link: "https://www.udemy.com/course/ui-ux-designs"
  },
  {
    imgsrc: "images/D.M Course pic.jpg",
    title: "Digital Marketing Course",
    Describtion: "Master the art of online promotion with our comprehensive Digital Marketing Course, covering SEO, social media strategies, and data analytics to boost your digital presence.",
    link: "https://www.udemy.com/course/learn-digital-marketing-course/"
  },
  {
    imgsrc: "images/web-development-pic.png",
    title: "Web Development Course",
    Describtion: "Dive into the world of coding with our Web Development Course, learning HTML, CSS, JavaScript, and more to build dynamic and responsive websites from scratch.",
    link: "https://www.udemy.com/topic/web-development/"
  }
];

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Hero />
      </header>
      <div className='hero'>
        <SCards />
        <div className='Cardss'>
          {courses.map((course, index) => (
            <Cards
              key={index}
              imgsrc={course.imgsrc}
              title={course.title}
              Describtion={course.Describtion}
              link={course.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/signing" element={<Layout><Signing /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppWrapper;
