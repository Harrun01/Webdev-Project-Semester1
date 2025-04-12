"use client";
import { useState } from "react";
import Link from 'next/link'
import "../styles/mobile.css";;
import "../styles/desktop.css";

export default function CantorHome() {
  const [visibleSections, setVisibleSections] = useState({});

const toggleSection = (index) => {
  setVisibleSections((prev) => ({
    ...prev,
    [index]: !prev[index],
  }));
};

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div>
            <h1>Cantor College</h1>
          </div>

          {/* Burger Menu */}
          <div className="burger-menu" onClick={toggleMenu}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <div>
         
            <Link href="/Courses" className="nav-item">Courses</Link>
            <Link href="/About-Us" className="nav-item">About Us</Link>
            <Link href="/Information" className="nav-item">Information</Link>
            <Link href="/Facilities" className="nav-item">Facilities</Link>
            <Link href="/Learning-Resources" className="nav-item">Learning Resources</Link>
          </div>
        </nav>

        <div className="hero-section">
          <h2>Empowering Education, Inspiring Futures</h2>
          <p>Discover world-class learning at Cantor College</p>
        </div>

        <div className="content-sections" style={{ backgroundImage: 'url("/images/Computing-Playstation-Lab.jpg")'}}>

  
        <div className="section" onClick={() => toggleSection(0)}>
    <h3>Computing Courses</h3>
    <h4>Click to Check out a quick Summary about our Computing Courses</h4>
      <div className= {`expand-text ${visibleSections [0] ? "show" : ""}`}>
        <p>The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.

The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking and software engineering. It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics and programming.

The courses are British Computer Society accredited and are highly relevant to modern industry. They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.
</p>
      </div> 
  </div>

 
  <div className="section" onClick={() => toggleSection(1)}>
    <h3>Design Courses</h3>
    <h4>Click to Check out a quick Summary about our Design Courses</h4>
    <div className= {`expand-text ${visibleSections [1]? "show" : ""}`}>
        <p>The College is an internationally connected creative community of diverse disciplines housed under one roof. We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.
The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path. You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.
You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses and organisations.
</p>
      </div>
      </div>
      <Link href="/Facilities">
            <div className="section">
              <h3>Facilities</h3>
              <p> Click to Discorver and learn our Facilities.</p>
            </div>
          </Link>
          
          <div className="Contact">
            <h3>How to find us/Contact:</h3>
            <p>
               Cantor College Main Street<br/>
               Sheffield SC4 2BB<br/>
              Tel: (01321) 2340 235<br/>
              Fax: (01321) 2340 236<br/>
             Email: info@cantorcollege.ac.uk
            </p>
          </div>
        </div>
        
        <div className="footer">
          <p>© 2024 Cantor College | All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}