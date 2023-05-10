import { useContext, useEffect } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import { Store } from './Store';

function App() {
  const {
    state: { mode },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode);
  }, [mode]);

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' });
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>P.E.T Store</Navbar.Brand>
        </Container>
        <Nav>
          <Button variant={mode} onClick={switchModeHandler}>
            <i className={mode === 'light' ? 'fa fa-sun' : 'fa fa-moon'}></i>
          </Button>
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
        <div className="text-center align-text-bottom"></div>
      </footer>
    </div>
  );
}

export default App;
