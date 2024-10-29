import React from 'react';
import myImage from '../assets/images/undraw_website_5bo8-removebg-preview.png';
import { Typewriter } from "react-simple-typewriter";
import { Button } from 'react-bootstrap';
import Navbar from './Navbar';

function Header() {
  return (
    <>
      <Navbar />
      <header className="vh-100 d-flex align-items-center header-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Image Column */}
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0 d-none d-md-block">
              <img 
                src={myImage} 
                alt="Illustration of a website concept" 
                className="header-image img-fluid" 
                style={{
                  maxWidth: '80%',
                  height: 'auto',
                }}
              />
            </div>
            {/* Text Column */}
            <div className="col-12 col-md-6 text-center text-md-start">
              <h1 className="display-4 fw-bold">
                <Typewriter
                  words={['Hello', 'Hallo', 'Hola', 'Bonjour', 'Ciao', 'Olá', 'Привет', '你好', 'こんにちは', '안녕하세요', 'مرحبا', 'नमस्ते', 'হ্যালো', 'سلام', 'سلام', 'Habari', 'Merhaba']}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={150}
                  deleteSpeed={50}
                  delaySpeed={1000}
                /> 
                <br />
                I&#39;m Zack Agba<br />
                a web developer based in Nigeria.
              </h1>
              <p className="lead mt-3 px-3 px-md-0">
                Passion for solving problems and making a difference with a
                meaningful impact.
              </p>
              <Button 
                variant="dark" 
                size="lg" 
                href="#projects" 
                className="view-projects-btn mt-2"
                style={{
                  padding: '0.75rem 2rem',
                  fontSize: '1.1rem',
                  borderRadius: '25px',
                }}
              >
                View My Projects
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;