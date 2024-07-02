import React from 'react';
import NavBar from "./Components/NavBar.js";
import Footer from './Components/Footer.js';
import "./Components/NavBar.css";
import "./Components/Footer.css";

const sampleData = ['Home', 'Contact Us', 'Courses', 'About Us', 'Sign In'];

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar data={sampleData} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
