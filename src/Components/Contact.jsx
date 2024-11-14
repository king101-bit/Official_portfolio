import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaTwitter, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <section id='contact' style={{
            background: 'linear-gradient(135deg, #111, #333)', 
            padding: '4rem 0',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
        }}>
            <Container>
            <h2 className="mb-3 text-center" style={{ fontWeight: 'bold' }}>Contact Me</h2>
                <Row className="align-items-center">
                    <Col md={6} className="mb-4 mb-md-0">
                        <p style={{ fontSize: '1.2rem' }}>Follow me on social media</p>
                        <div className="social-icons d-flex justify-content-center mb-3">
                            <a href="https://twitter.com/krxzydev" target="_blank" rel="noopener noreferrer"
                               style={{ margin: '0 10px', color: '#1DA1F2', transition: 'transform 0.2s' }}
                               onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                               onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                <FaTwitter size={35} />
                            </a>
                            <a href="https://github.com/king101-bit" target="_blank" rel="noopener noreferrer"
                               style={{ margin: '0 10px', color: '#333', transition: 'transform 0.2s' }}
                               onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                               onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                <FaGithub size={35} />
                            </a>
                        </div>
                    </Col>

                    <Col md={6}>
                        <p className="mb-3" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                            Let&apos;s Create Something Awesome Together!
                        </p>
                        <p style={{ fontSize: '1.2rem' }}>Contact me for collaboration and projects</p>
                        <Button variant="light" size="lg" href='mailto:zackagba7@gmail.com' style={{
                            borderRadius: '30px',
                            padding: '0.75rem 2rem',
                            fontWeight: 'bold',
                            boxShadow: '0px 4px 12px rgba(255, 255, 255, 0.3)',
                            transition: 'background-color 0.3s, transform 0.3s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#ddd';
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}>
                            Get In Touch
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;
