import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button  from 'react-bootstrap/Button';
function OurNavBar(){

 return(<Navbar bg="dark" variant="dark">
<Container>
  <Navbar.Brand href="#home">Neetcode Clone</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="/courses">Courses</Nav.Link>
    <Nav.Link href="/practice">Practice</Nav.Link>
    <Nav.Link href="/roadmap">Roadmap</Nav.Link>
    <Nav.Link href="/pro">Pro</Nav.Link>
  </Nav>
<div>
<Button variant="outline-primary"style={{margin:"20px"}}>
  Dark Mode
</Button>
<Button variant="primary">
  Sign In
</Button>
</div>
</Container>
</Navbar>);}

export default OurNavBar;