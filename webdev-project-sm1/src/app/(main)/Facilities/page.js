"use client";
import { useState } from "react";
import Head from "next/head";
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
      <Head>
        <title>Cantor College Home</title>
      </Head>

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
            <Link href="/Homepage" className="nav-item">Home</Link>
            <Link href="/Courses" className="nav-item">Courses</Link>
            <Link href="/About-Us" className="nav-item">About Us</Link>
            <Link href="/Information" className="nav-item">Information</Link>
            <Link href="/Learning-Resources" className="nav-item">Learning Resources</Link>
          </div>
        </nav>

        <div className="hero-section">
          <h2>Empowering Education, Inspiring Futures</h2>
          <p>Discover world-class learning at Cantor College</p>
        </div>

        <div className="content-sections" style={{ backgroundImage:'url("/images/cantor-entrance-2.jpg")'}}>



          <div className="section" onClick={() => toggleSection(0)}>
            <h3>Our Facilities:</h3>
            <p className={`expand-text ${visibleSections [0]? "show" : ""}`} > 
            Facilities include:<br/>

•	wi-fi technology<br/>
•	pool teaching rooms, including classrooms to teach from 25 - 80 students<br/>
•	specialist faculty facilities<br/>
•	a double height lecture theatre at first and second floor level<br/>
•	dramatic three-storey glass open atrium<br/>
•	meeting rooms<br/>
•	office accommodation<br/>
•	specialist IT facilities<br/>
•	reception desk area<br/>
•	catering outlet<br/>
•	parking for disabled badge holders<br/>
•	cycle racks<br/>
•	gallery<br/>

            </p>
          </div>
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