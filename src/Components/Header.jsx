import myImage from "../assets/images/undraw_Website_builder_re_ii6e.png";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";
import "../assets/Header.css"; // Import your new CSS file

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
              />
            </div>
            {/* Text Column */}
            <div className="col-12 col-md-6 text-center text-md-start px-3 px-md-0">
              <h1 className="display-4 fw-bold">
                <Typewriter
                  words={[
                    "Bàwo ni",
                    "Ndeewo",
                    "Sannu",
                    "Hello",
                    "Hallo",
                    "Hola",
                    "Bonjour",
                    "Ciao",
                    "Olá",
                    "Привет",
                    "你好",
                    "こんにちは",
                    "안녕하세요",
                    "مرحبا",
                    "नमस्ते",
                    "হ্যালো",
                    "سلام",
                    "سلام",
                    "Habari",
                    "Merhaba",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
                <br />
                I&#39;m Zack Agba
                <br />a web developer based in Nigeria.
              </h1>
              <p className="lead mt-3">
                Passion for solving problems and making a difference with a
                meaningful impact.
              </p>
              <Button
                variant="dark"
                size="lg"
                href="#projects"
                className="view-projects-btn mt-2"
                aria-label="View My Projects"
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
