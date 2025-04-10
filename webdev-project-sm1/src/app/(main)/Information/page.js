"use client";
import { useState } from "react";
import Head from "next/head";
import Link from 'next/link'
import Image from "next/image";
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
            <Link href="/About-Us" className="nav-item">About Us</Link>
            <Link href="/" className="nav-item">Facilities</Link>
            <Link href="/" className="nav-item">Learning Resources</Link>
            <Link href="/" className="nav-item"></Link>
          </div>
        </nav>

        <div className="hero-section">
          <h2>Explore Cantor Where Futures Begin</h2>
          <p>Discover world-class learning at Cantor College</p>
        </div>

        <div className="content-sections">
          <div className="section">
            <h3>Information for Staff</h3>
            <p>Staff Resources, Support & Updates - All in One Place</p>
          </div>
          <div className="section">
            <h3>Information For Business</h3>
            <p>Unlock Opportunities for Your Business with Cantor</p>
          </div>
          <div className="section">
            <h3>How to find us:</h3>
            <p>Cantor College Main Street Sheffield SC4 2BB</p>
          </div>
        </div>

        <div className="footer">
          <p>© 2024 Cantor College | All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}