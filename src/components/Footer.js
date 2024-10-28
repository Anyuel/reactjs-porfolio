import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='my-5'>
        <hr className='text-secondary'/>
        <Container>
            <Row>
                <Col>
                    <p>
                        <span className='me-3 text-white'><i className='bi bi-code-square'/> Anie</span>
                        <span className='text-secondary'>anthuynguyen2000@gmail.com</span>
                    </p>
                    <p className='text-white'>Back-end Developer</p>
                </Col>
                <Col xs={3} className='text-white'>
                    <p>Media</p>
                    <p><i className='bi bi-github'/> <i className="bi bi-facebook" /> <i className='bi bi-telegram' /></p>
                </Col>
            </Row>
            <p className='text-center text-secondary mt-5'>© Copyright 2024. Made by Anie</p>
        </Container>
    </footer>
  )
}

export default Footer