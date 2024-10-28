import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <section style={{
            background: 'linear-gradient(135deg, #111, #333)', 
            padding: '4rem 0',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
        }}>
            <Container>
                <Row className="align-items-center">
                    {/* Left Column: Social Media */}
                    <Col md={6} className="mb-4 mb-md-0">
                        <h2 className="mb-3" style={{ fontWeight: 'bold' }}>Contact Me</h2>
                        <p style={{ fontSize: '1.2rem' }}>Follow me on social media</p>
                        <div className="social-icons d-flex justify-content-center mb-3">
                            <a href="https://twitter.com/krxzydev" target="_blank" rel="noopener noreferrer"
                               style={{ margin: '0 10px', color: '#1DA1F2', transition: 'transform 0.2s' }}>
                                <FaTwitter size={35} className="social-icon" />
                            </a>
                            <a href="https://github.com/king101-bit" target="_blank" rel="noopener noreferrer"
                               style={{ margin: '0 10px', color: '#000000', transition: 'transform 0.2s' }}>
                                <FaGithub size={35} className="social-icon" />
                            </a>
                        </div>
                    </Col>

                    {/* Right Column: CTA */}
                    <Col md={6}>
                        <h3 className="mb-3" style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
                            Let's Create Something Awesome Together!
                        </h3>
                        <p className='lead' style={{ fontSize: '1.2rem' }}>Contact me for collaboration and projects</p>
                        <Button variant="light" size="lg" href='mailto:zackagba7@gmail.com' style={{
                            borderRadius: '30px',
                            padding: '0.75rem 2rem',
                            fontWeight: 'bold',
                            boxShadow: '0px 4px 12px rgba(255, 255, 255, 0.3)',
                            transition: 'background-color 0.3s, transform 0.3s',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#ddd';
                            e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '';
                            e.target.style.transform = 'scale(1)';
                        }}>
                            Get In Touch
                        </Button>
                    </Col>
                </Row>
            </Container>

            {/* Styles for Hover Animations */}
            <style jsx>{`
                .social-icons a:hover {
                    transform: scale(1.2);
                }
            `}</style>
        </section>
    );
};

export default ContactSection;
