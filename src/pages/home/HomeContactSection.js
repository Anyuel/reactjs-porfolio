import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const HomeContactSection = () => {
    return (
        <section>
            <Container className="my-5">
                <Row className='align-items-center'>
                    <Col className='d-flex align-items-center'>
                        <h3><span className='text-primary'>#</span>contact</h3>
                        <div className='bg-primary ms-3' style={{ height: '1px', width: '30%'}} />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className='text-secondary'>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card className='bg-dark border-secondary p-3'>
                            <Card.Text className='text-white'>Message me here</Card.Text>
                            <Card.Text className='text-secondary'>
                                <i className="bi bi-envelope-fill" /> anthuynguyen2000@gmail.com <br />
                                <i className="bi bi-telephone-fill" /> 0836.080.128
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeContactSection