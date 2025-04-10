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
         
            <Link href="/Courses" className="nav-item">Courses</Link>
            <Link href="/Admissions" className="nav-item">Admissions</Link>
            <Link href="/Contact" className="nav-item">Contact</Link>
            <Link href="/About-Us" className="nav-item">About Us</Link>
            <Link href="/About-Us" className="nav-item">Information</Link>
            <Link href="/About-Us" className="nav-item"></Link>
          </div>
        </nav>

        <div className="hero-section">
          <h2>Empowering Education, Inspiring Futures</h2>
          <p>Discover world-class learning at Cantor College</p>
        </div>

        <div className="content-sections">
          <div className="section">
            <h3>Upcoming Events</h3>
            <p>Calendar of academic and campus events</p>
          </div>
          <div className="section">
            <h3>Latest Research</h3>
            <p>Groundbreaking research initiatives</p>
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