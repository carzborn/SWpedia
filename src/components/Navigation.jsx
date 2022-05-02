import {    Container, Navbar, Nav  } from 'react-bootstrap'
import {    Link, NavLink   } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">

            <Container>
                <Navbar.Brand as={Link} to="/"><h2>Star wars encyclopedia</h2></Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/people">People</Nav.Link>
                        <Nav.Link as={NavLink} to="/films">Films</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default Navigation