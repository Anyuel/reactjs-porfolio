import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='my-5'>
        <hr />
        <Container>
            <Row>
                <Col>
                    <p>
                        <span className='me-3'><i className='bi bi-code-square'/> Anie</span>
                        <span className='text-secondary'>anthuynguyen2000@gmail.com</span>
                    </p>
                    <p>Back-end Developer</p>
                </Col>
                <Col xs={3}>
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