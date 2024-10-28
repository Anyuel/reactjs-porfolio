import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';

import "./NavBar.scss";

const NavBar = ( { active } ) => {
	const { i18n } = useTranslation();

  /**
   * @param {string} eventKey 
   */
  const onLanguageSelected = (eventKey) => {
    i18n.changeLanguage(eventKey)
  }

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          <i className="bi bi-code-square"/> Anie
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className={`me-3 ${ active === 0 ? "text-white" : "text-secondary"}`}><span className="text-primary">#</span>home</Nav.Link>
            <Nav.Link href="/works" className={`me-3 ${ active === 1 ? "text-white" : "text-secondary"}`}><span className="text-primary">#</span>works</Nav.Link>
						<Nav.Link href="/about-me" className={`me-3 ${ active === 2 ? "text-white" : "text-secondary"}`}><span className="text-primary">#</span>about-me</Nav.Link>
						<Nav.Link href="/contacts" className={`me-3 ${ active === 3 ? "text-white" : "text-secondary"}`}><span className="text-primary">#</span>contacts</Nav.Link>
            <NavDropdown 
              title={<span className="text-secondary">{i18n.language.toUpperCase()}<i className="bi bi-chevron-down"/></span>} 
              className="me-3 custom-dropdown" 
              onSelect={onLanguageSelected}
              menuVariant="dark"
            >
							{
								i18n.options.resources && Object.keys(i18n.options.resources).map((lang) => <NavDropdown.Item eventKey={lang} key={lang}>{lang.toUpperCase()}</NavDropdown.Item>)
							}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar