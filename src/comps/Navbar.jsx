import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from './Sidebar';
import ThemeToggle from './ThemeToggle';

export default function FirstNavbar() {
  return (
    <Navbar expand='sm' className='bg-body-tertiary fixed-top'>
      <Container>
        <Sidebar />
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <button
              href='/'
              style={{
                background: 'transparent',
                border: 'none',
              }}
            >
              Home
            </button>
            <button
              style={{
                background: 'transparent',
                border: 'none',
              }}
              href='#link'
            >
              Link
            </button>
          </Nav>
        </Navbar.Collapse>
        <ThemeToggle />
      </Container>
    </Navbar>
  );
}
