"use client";

import { useEffect, useState } from "react";
import "../styles/mobile.css";;
import "../styles/desktop.css";
import Link from "next/link";


export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/data/course-list.json") 
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => {
        console.error("Failed to load courses:", err);
      });
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    
    <div className="container">
      <div className="header">
        <h1>Cantor College</h1>

        {/* Burger Menu */}
        <div className="burger-menu" onClick={toggleMenu}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>

      </div>
      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <div>
         
            <Link href="/Homepage" className="nav-item">Home</Link>
            <Link href="/About-Us" className="nav-item">About Us</Link>
            <Link href="/Information" className="nav-item">Information</Link>
            <Link href="/" className="nav-item">Facilities</Link>
            <Link href="/" className="nav-item">Learning Resources</Link>
            <Link href="/" className="nav-item"></Link>
          </div>
        </nav>



      <div className="hero-section">
        <h2>Our Courses</h2>
        <p>Browse the available course offerings</p>
      </div>

      <div className="section2">
        <h2>Course List</h2>
        <table>
          <thead>
            <tr>
              <th>Course Title</th>
              <th>Course Type</th>
              <th>Course Summary</th>
              <th>Course Award Name</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.CourseTitle}</td>
                <td>{course.CourseType}</td>
                <td>{course.CourseSummary}</td>
                <td>{course.CourseAwardName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="section2">
            <h3>How to find us/Contact:</h3>
            <p>
               Cantor College Main Street<br/>
               Sheffield SC4 2BB<br/>
              Tel: (01321) 2340 235<br/>
              Fax: (01321) 2340 236<br/>
             Email: info@cantorcollege.ac.uk
            </p>
          </div>

      <div className="footer">
        <p>© 2024 Cantor College | All Rights Reserved</p>
      </div>
    </div>
  );
}
