import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './HomeProjectsSection.scss'
import InformationCard from '../../components/InformationCard'
import projects from '../../entities/Project'

const HomeProjectsSection = () => {
    return (
        <section>
            <Container className="my-5">
                <Row className='align-items-center'>
                    <Col className='d-flex align-items-center'>
                        <h3><span className='text-primary'>#</span>projects</h3>
                        <div className='bg-primary ms-3' style={{ height: '1px', marginRight: '200px', width: '50%' }} />
                    </Col>
                    <Col md="auto">
                    <a href="/works" className='text-decoration-none' id='view-all-url'>View All →</a>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    { projects.map(project => 
                        <Col md="auto" key={project.title}>
                            <InformationCard img={project.img} header={project.tags.join(' ')} title={project.title} text={project.text} btn='Github →'/>
                        </Col>
                    ) }
                </Row>
            </Container>
        </section>
    )
}

export default HomeProjectsSection