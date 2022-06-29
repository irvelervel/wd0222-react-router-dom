import { Button, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
// Link renders a special anchor tag, that will not refresh the browser!

// I'd like to highlight the current link I clicked with an "active" css class
// for doing this, I need to now from the CustomNavbar component the url I'm in!
// how can we make our CustomNavbar aware of our current route...?

// RULES OF HOOKS
// 1) just use Hooks in React Functional Components
// 2) just use Hooks at the top level of the component, outside functions/loops/conditions

const CustomNavbar = ({ title }) => {
  const location = useLocation() // useLocation when used is going to return you an object!
  console.log('LOCATION: ', location.pathname)

  const navigate = useNavigate() // navigate() is a FUNCTION, will bring you somewhere just like Link

  const goHome = () => {
    navigate('/')
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      {/* you want to use Link for WRAPPING elements, just like an anchor tag! */}
      <Link to="/">
        <Navbar.Brand>{title}</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/list">
            {/* the Nav.Link component from react-bootstrap also renders like an anchor tag! */}
            {/* you cannot have two anchor tags nested in one another... let's render instead a div */}
            {/* with a css class of "nav-link", it will be visually identical */}
            <div
              className={
                location.pathname === '/list' ? 'nav-link active' : 'nav-link'
              }
            >
              List
            </div>
          </Link>
          <Link to="/form">
            <div
              className={
                location.pathname === '/form' ? 'nav-link active' : 'nav-link'
              }
            >
              Booking
            </div>
          </Link>
          <Link to="/menu">
            <div
              className={
                location.pathname === '/menu' ? 'nav-link active' : 'nav-link'
              }
            >
              Menu
            </div>
          </Link>
          <Link to="/contact">
            <div
              className={
                location.pathname === '/contact'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Contact
            </div>
          </Link>
        </Nav>
        <Button variant="dark" onClick={goHome}>
          {/* navigate() works just like Link, use it when you cannot */}
          {/* wrap an element (like a button), or programmatically via JS */}
          GO HOME
        </Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar
