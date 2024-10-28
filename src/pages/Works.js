import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import projects, { ProjectType } from '../entities/Project'
import InformationCard from '../components/InformationCard'
import Footer from '../components/Footer'

const Works = () => {
    return (
        <Container>
            <NavBar active={1}/>
            <section className='text-white my-5'>
                <h1><span className='text-primary'>/</span>projects</h1>
                <p>Lists of my projects</p>
            </section>
            <section>
                <h2 className='my-5 text-white'><span className='text-primary'>#</span>complete-apps</h2>
                <Container>
                    <Row>
                        { projects.filter(project => project.type === ProjectType.COMPLETE_APP).map(project => 
                            <Col md="auto" key={project.title}>
                                <InformationCard img={project.img} header={project.tags.join(' ')} title={project.title} text={project.text} btn='Github →'/>
                            </Col>
                        ) }
                    </Row>
                </Container>
            </section>
            <section>
                <h2 className='my-5 text-white'><span className='text-primary'>#</span>small-projects</h2>
                <Container>
                    <Row>
                        { projects.filter(project => project.type === ProjectType.SMALL_APP).map(project => 
                            <Col md="auto" key={project.title}>
                                <InformationCard header={project.tags.join(' ')} title={project.title} text={project.text} btn='Github →'/>
                            </Col>
                        ) }
                    </Row>
                </Container>
            </section>
            <Footer />
        </Container>
    )
}

export default Works