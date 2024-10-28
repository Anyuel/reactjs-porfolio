import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import InformationCard from '../../components/InformationCard'
import skills from '../../entities/Skills'

const HomeSkillsSection = () => {
    return (
        <section>
                <Container className="my-5">
                    <Row className='align-items-center'>
                        <Col className='d-flex align-items-center'>
                            <h3><span className='text-primary'>#</span>skills</h3>
                            <div className='bg-primary ms-3' style={{ height: '1px', width: '30%'}} />
                        </Col>
                    </Row>
                </Container>
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
    )
}

export default HomeSkillsSection