import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Contacts = () => {
    return (
        <Container>
            <NavBar active={3}/>
            <section className='my-5'>
                <h1 className='text-white'><span className='text-primary'>/</span>contacts</h1>
                <p className='text-white'>Who am I?</p>
            </section>
            <section className='my-5'>
                <Row>
                    <Col className='text-secondary me-5'>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</Col>
                    <Col md='auto'>
                        <Card className='bg-dark border-secondary p-3'>
                            <Card.Text className='text-white'>Support me here</Card.Text>
                            <Card.Text className='text-secondary'>4149500120690030</Card.Text>
                        </Card>
                    </Col>
                    <Col md='auto'>
                        <Card className='bg-dark border-secondary p-3'>
                            <Card.Text className='text-white'>Message me here</Card.Text>
                            <Card.Text className='text-secondary'>
                                <i className="bi bi-envelope-fill" /> anthuynguyen2000@gmail.com <br />
                                <i className="bi bi-telephone-fill" /> 0836.080.128
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </section>
            <section className='my-5'>
                <h2 className='text-white'><span className='text-primary'>#</span>all-media</h2>
                <Row className='text-secondary'>
                    <Col md='auto'> <i className='bi bi-github'/> @Anyuel  </Col>
                    <Col md='auto'> <i className="bi bi-facebook" /> @An Nguyễn </Col>
                    <Col> <i className='bi bi-telegram' /> @annt11_zps </Col>
                </Row>
            </section>
            <Footer />
        </Container>
    )
}

export default Contacts