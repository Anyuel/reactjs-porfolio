import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'

const HomeAboutMeSection = () => {
    return (
        <section>
            <Container className="my-5">
                <Row className='align-items-center'>
                    <Col className='d-flex align-items-center'>
                        <h3><span className='text-primary'>#</span>about-me</h3>
                        <div className='bg-primary ms-3' style={{ height: '1px', width: '30%'}} />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <p className='text-secondary'>
                            Hello, I’m Anie! <br /> <br />
                            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.  <br />
                            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                        </p>
                        <Button variant='outline-primary' className='text-white'>Read more →</Button>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Image src='/assets/home/about-me-img.svg'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeAboutMeSection