"use client";
import { useState } from "react";
import Head from "next/head";
import Link from 'next/link'
import Image from "next/image";
import "../styles/mobile.css";;
import "../styles/desktop.css";

export default function CantorHome() {

  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

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
            <Link href="/About-Us" className="nav-item">About Us</Link>
            <Link href="/" className="nav-item">Facilities</Link>
            <Link href="/" className="nav-item">Learning Resources</Link>
            <Link href="/" className="nav-item"></Link>
          </div>
        </nav>

        <div className="hero-section">
          <h2>Informing Minds, Shaping Success</h2>
          <p>Explore essential information to make the most of your journey at Cantor College</p>
        </div>

        <div className="content-sections">
  
        <div className="section" onClick={() => toggleSection(0)}>
    <h3>Information for business</h3>
    <h4>Click to Check out a Summary about our Businesses</h4>
      <div className={`expand-text ${activeSection === 0 ? "show" : ""}`}>
        <p>Partner with Cantor College: Unlock Expertise, Innovation, and Growth
At Cantor College, we believe in the power of collaboration between education and industry. Our College offers a range of specialized services designed to support businesses in achieving their goals through cutting-edge expertise, innovation, and tailored solutions. With a focus on Computing, Design, and Technology, we are uniquely positioned to help your business thrive in an increasingly digital world.

Our Services

<br/>1. Custom Training and Development Programs Empower your workforce with skills that matter. Our faculty can develop custom training programs that address your business's specific needs, whether in advanced computing technologies, creative design, or the latest in tech innovation. We offer flexible learning options, including on-site workshops, online modules, and blended learning experiences.
<br/>
<br/>2. Research and Development Partnerships Leverage the talent and creativity of our students and faculty by partnering with Cantor College on research and development projects. Whether you’re looking to explore new technologies, innovate your product line, or solve complex technical challenges, our R&D team is ready to collaborate with you.
<br/>
<br/>3. Design and Technology Consultancy Our experienced professionals and top-tier students can provide consultancy services to help you with a variety of projects, from web development and software engineering to product design and user experience optimization. We offer fresh perspectives and innovative approaches tailored to your business.
<br/>
<br/>4. Internships and Graduate Recruitment Gain access to a pool of highly skilled and motivated students ready to contribute to your business. Our internship and recruitment services can connect you with top talent in computing, design, and technology, providing you with candidates who are equipped with the latest industry knowledge and practical experience.
<br/>
<br/>5. Event Hosting and Sponsorship Cantor College hosts a range of events throughout the year, including hackathons, design challenges, and technology expos. We offer businesses the opportunity to sponsor events or collaborate in their organization, giving you direct access to the brightest minds in the field and the chance to showcase your brand to our community.
<br/>
<br/>Why Partner with Cantor College?
<br/>•	   Cutting-Edge Expertise: Our programs are at the forefront of industry trends, ensuring that our services reflect the latest advancements in technology and design.
<br/>•	Innovation at the Core: We foster a culture of creativity and problem-solving, making us the ideal partner for businesses seeking innovative solutions.
<br/>•	Tailored Solutions: We understand that every business is unique. Our services are customized to meet your specific objectives and challenges.
<br/>•	Future-Ready Talent: Our students are trained to excel in the modern workplace, equipped with both theoretical knowledge and practical skills.
<br/>
<br/>Get in Touch

Ready to explore how Cantor College can help your business grow? Contact our Business Services team today to discuss your needs and learn more about our offerings. We look forward to working with you to achieve your business goals.

</p>
      </div> 
  </div>


 
  <div className="section" onClick={() => toggleSection(1)}>
    <h3>Information For Staff</h3>
    <h4>Click to Check out a Summary about our Wonderful Staff</h4>
    <div className={`expand-text ${activeSection === 1 ? "show" : ""}`}>
        <p>News:<br/>
Cantor College recently hosted the Software Engineering student of the year awards.  Short
listed candidates from around the country attended the one day event. 
<br/>Academic Registry :<br/>
For academic regulations, assessment, awards, student records and course validation. 
<br/>Catering Services :<br/>
Contact the Catering Services regarding on and off-site catering. 
<br/>Financial Services :<br/>
The financial team based on the 2nd Floor are responsible for all areas of student finance as 
well as College budgeting. 
<br/>Information Systems Services :<br/>
The ISS team delivers the College’s computing facilities including all hardware and software.  
They also run the staff helpdesk. 
<br/>Marketing Services :<br/>
The Marketing Team will help promote events and new courses.  They will help with press 
release preparation. 
<br/>Personnel Services :<br/>
All staff pay and conditions enquiries should be directed to the Personnel Services team on 
the 3rd floor. 
<br/>Facilities :<br/>
The facilities are responsible for the general care and maintenance of the College.  All 
enquiries via the main helpdesk. 
</p>
      </div>
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