import React from 'react'
import { Container, Col, Row, Image, Card } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import InformationCard from '../components/InformationCard'
import skills from '../entities/Skills'
import Footer from '../components/Footer'

const AboutMe = () => {
    return (
        <Container>
            <NavBar active={2}/>
            <section className='text-white my-5'>
                <h1><span className='text-primary'>/</span>about-me</h1>
                <p>Who am I?</p>
            </section>
            <section>
                <Row>
                    <Col className='text-secondary'>
                        Hello, I’m Anie! <br /> <br />
                        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.  <br /> <br />
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Image src='/assets/about-me/about-me-img.svg'/>
                    </Col>
                </Row>
            </section>
            <section>
                <h2 className='text-white my-5'><span className='text-primary'>#</span>skills</h2>
                <Container>
                    <Row className='justify-content-end'>
                        { skills.map((skill) => {
                            const result = skill.details.reduce((acc, str, index) => {
                                // Add the string to the accumulator
                                acc.push(str);
                                // Check if the current index is the last in a group of 3
                                if ((index + 1) % 3 === 0) {
                                    acc.push('\n'); // Add a newline character after every 3 strings
                                }
                                return acc;
                            }, []).join(' ')
                            return (
                                <Col md="auto">
                                    <InformationCard header={skill.type} text={result} isWhiteHeader={true}/>
                                </Col>
                            )
                        }) }
                    </Row>
                </Container>
            </section>
                <h2 className='text-white my-5'><span className='text-primary'>#</span>my-fun-facts</h2>
                <Container>
                    <Row>
                        <Col md='auto'>
                            <Card className='bg-dark border-secondary p-2 text-secondary'>
                                <Card.Text>I like winter more than summer</Card.Text>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            <section>

            </section>
            <Footer />
        </Container>
    )
}

export default AboutMe