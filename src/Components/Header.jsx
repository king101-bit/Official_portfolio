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
          <div className="col-lg-6 text-center">
            <img 
              src={myImage} 
              alt="Illustration of a website concept" 
              className="header-image" 
            />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-4 fw-bold">
              <Typewriter
                words={['Hello', 'Hallo', 'Hola', 'Bonjour', 'Ciao', 'Olá', 'Привет', '你好', 'こんにちは', '안녕하세요', 'مرحبا', 'नमस्ते', 'হ্যালো', 'سلام', 'سلام', 'Habari', 'Merhaba']}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={1000}
              /> I&#39;m Zack Agba<br />
              a web developer based in Nigeria.
            </h1>
            <p className="lead mt-3">
              Passion for solving problems and making a difference with a
              meaningful impact.
            </p>
            <Button 
              variant="dark" 
              size="lg" 
              href="#projects" 
              className="view-projects-btn"
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