import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap'
import HomeBannerSection from './home/HomeBannerSection'
import HomeProjectsSection from './home/HomeProjectsSection'
import HomeSkillsSection from './home/HomeSkillsSection'
import HomeAboutMeSection from './home/HomeAboutMeSection'
import HomeContactSection from './home/HomeContactSection'

const Home = () => {
  return (
    <Container className="bg-dark v-100 text-white d-flex flex-column" fluid>
        <NavBar active={0} />
        <HomeBannerSection />
        <HomeProjectsSection />
        <HomeSkillsSection />
        <HomeAboutMeSection />
        <HomeContactSection />
        <Footer />
    </Container>
  )
}

export default Home