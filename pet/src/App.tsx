import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>P.E.T - Pet for Everyone Today</Navbar.Brand>
        </Container>
        <Nav>
          <a href="/cart" className="nav-link">
            Cart
          </a>
          <a href="/signin" className="nav-link">
            Sign In
          </a>
        </Nav>
      </Navbar>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">2023 P.E.T</div>
      </footer>
    </div>
  );
}

export default App;
