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
            <Link href="/Homepage" className="nav-item">Home</Link>
            <Link href="/Courses" className="nav-item">Courses</Link>
            <Link href="/Contact" className="nav-item">Contact</Link>
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
            <h3>About Us</h3>
            <p className="about-text" > 
Cantor College was established in 1989 to specialize in Computing and Design.   At Cantor College, we want to give students the education they need to achieve their career aims, leaving them equipped with the knowledge, skills and experience to succeed. Cantor College gives you the opportunities that can give you the edge when you enter the world of work, through our teaching and our links to some of the world's leading researchers and employers. Our students have gone on to successful careers in a wide range of industries across the globe.  Whatever your ambitions, our learning and support can help to get the most out of your time with Cantor College, both as a student and in your future career.
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