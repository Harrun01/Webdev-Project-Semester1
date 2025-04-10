"use client";
import { useState } from "react";
import Head from "next/head";
import Link from 'next/link'
import "../styles/mobile.css";;
import "../styles/desktop.css";

export default function CantorHome() {
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
         
            <Link href="/Courses" className="nav-item">Courses</Link>
            <Link href="/Contact" className="nav-item">Contact</Link>
            <Link href="/About-Us" className="nav-item">About Us</Link>
            <Link href="/Information" className="nav-item">Information</Link>
            <Link href="/" className="nav-item">Facilities</Link>
            <Link href="/" className="nav-item">Learning Resources</Link>
          </div>
        </nav>

        <div className="hero-section">
          <h2>Empowering Education, Inspiring Futures</h2>
          <p>Discover world-class learning at Cantor College</p>
        </div>

        <div className="content-sections">
          <div className="section">
            <h3>Computing Courses</h3>
            <p> Check out a  quick Summary about our Computing Courses</p>
          </div>
          <div className="section">
            <h3>Design Courses</h3>
            <p>Check out a  quick Summary about our Design Courses</p>
          </div>
          <div>
            <div className="section">
              <h3>Facilities</h3>
              <p>Discorver and learn our Facilities.</p>
            </div>
          </div>
          <div className="section">
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