import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' // <-- DO NOT FORGET THIS!
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import ReservationForm from './components/ReservationForm'
import ReservationsList from './components/ReservationsList'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import Details from './components/Details'
import ClassComponentExample from './components/ClassComponentExample'

function App() {
  return (
    <>
      {/* BrowserRouter is just a virtual routing wrapper */}
      {/* It will allow inner components to benefit from the router logic */}
      <BrowserRouter>
        <CustomNavbar title="Epic Restaurant" />
        {/* CustomNavbar should ALWAYS be loaded at the top of the page */}
        {/* So I WON'T put it in <Routes>, since <Routes> delimits the components */}
        {/* that are going to be shown just on a specific URL */}
        <Container>
          <Row className="justify-content-center mt-3">
            <Col xs={12} md={6}>
              <Routes>
                {/* a Routes component can contain just Route components */}
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<ReservationForm />} />
                <Route path="/list" element={<ReservationsList />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/details/:pastaId" element={<Details />} />
                {/* the one above is called a DYNAMIC ROUTE */}
                {/* the next route is just a demo of a Class Component*/}
                <Route
                  path="/class"
                  element={<ClassComponentExample myCustomProp="marios" />}
                />
                {/* if you put at the end a Route with a path of "*" */}
                {/* it will catch any un-handled route in your routing system */}
                {/* basically working as a 404 page */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
