import Container from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

function Navbar() {

    return (
    <Navbar expand={"lg"} className={"bg-body-tertiary"}>
        <Container>
            <Navbar.Brand href={"#home"}>Newfoundrail</Navbar.Brand>
                <Nav.Link href={"#home"}>Home</Nav.Link>
                <Nav.Link href={"#posts"}>Posts</Nav.Link>
                <Nav.Link href={"#submit"}>Submit</Nav.Link>
                <Nav.Link href={"#user_profile"}>User Profile</Nav.Link>
        </Container>
    </Navbar>

    )
}