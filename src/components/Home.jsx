// Home Component will contain the Carousel with the dishes pictures and infos. It will also display comments section

import { useState } from 'react'
import { Container, Row, Col, Carousel, ListGroup } from 'react-bootstrap'
import pastasArray from '../data/menu.json'
import PastaComments from './PastaComments'
import ReservationForm from './ReservationForm'
import ReservationsList from './ReservationsList'

const Home = () => {
  // state = {
  //   // state is a reserved keyword
  //   selectedPasta: null,
  // }

  const [selectedPasta, setSelectedPasta] = useState(null)

  return (
    <>
      <Carousel>
        {pastasArray.map((pasta) => (
          <Carousel.Item key={pasta.id}>
            <img
              className="d-block w-100"
              src={pasta.image}
              alt="First slide"
              onClick={() => {
                console.log('You clicked an image!')

                // I want to CHANGE THE STATE with the current pasta every time I click on a picture
                // Unfortunately state cannot be modified directly (it is READONLY), I shall use a function called setState()

                // this.setState({ selectedPasta: pasta })
                setSelectedPasta(pasta)
              }}
            />
            <Carousel.Caption>
              <h3>{pasta.name}</h3>
              <p>{pasta.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Row className="justify-content-center mt-3">
        <Col xs={12} className="text-center">
          <PastaComments selectedPasta={selectedPasta} />
        </Col>
      </Row>
    </>
  )
}

export default Home
