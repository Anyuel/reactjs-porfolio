import React from 'react'
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap'
import './HomeBannerSection.scss'

const HomeBannerSection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col className="d-flex flex-column justify-content-center">
                    <p className='fs-2'>
                        <span>Anie is a </span>
                        <span className='text-primary'>Software Engineer </span>
                        <span>major in </span>
                        <span className='text-primary'>Back-end Developing</span>
                    </p>
                    <p className='text-secondary'>
                        She's in charge of multiple realtime game servers
                    </p>
                    <Button variant='outline-primary' className='align-self-start text-white'>Contact me!!</Button>
                </Col>
                <Col>
                    <Container id="banner-img-container">
                        <Image src="/assets/home/header-img.svg" id="banner-img"/>
                    </Container>
                    <Container className='d-flex justify-content-center'>
                        <Card className='bg-dark text-secondary d-inline-block' border='secondary'>
                            <Card.Body className='py-1 ps-2 pe-5'>
                                <Card.Text>
                                    <i className='bi bi-square-fill text-primary'/> Currently working at <span className='text-white'>VNG Corporation</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </Row>
            <Row className='m-5'>
                <blockquote className="mb-0 p-5">
                    <div className='text-center border border-secondary p-3 mb-0' id="quote-container"> 
                        <div className='d-inline-block bg-dark p-1' id="floating-quote-icon" >
                            <i className="bi bi-quote fs-3 text-secondary"/>
                        </div>
                        The only limit to our realization of tomorrow is our doubts of today.
                    </div>
                    <Container className='p-0 d-flex justify-content-end'>
                        <footer className='border border-secondary p-3 d-inline-block' id="quote-footer-container"> 
                            <div id="floating-footer-quote-icon" className='d-inline-block bg-dark p-1'>
                                <i className="bi bi-quote fs-3 text-secondary" /> 
                            </div>
                            Franklin D. Roosevelt
                        </footer>
                    </Container>
                </blockquote>
            </Row>
        </Container>
    </section>
  )
}

export default HomeBannerSection