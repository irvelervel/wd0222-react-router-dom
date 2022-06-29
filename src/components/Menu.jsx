import { Badge, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import pastas from '../data/menu.json'

const Menu = () => (
  <div className="text-center">
    {pastas.map((dish) => (
      <Row key={dish.id} className="my-4">
        <Col xs={12}>
          <Link to={'/details/' + dish.id}>
            <img src={dish.image} alt="pasta pic" />
          </Link>
          <h4>
            <div>{dish.name}</div>
            <Badge variant="warning">{dish.price}</Badge>
            <Badge variant="danger">{dish.label}</Badge>
          </h4>
        </Col>
      </Row>
    ))}
  </div>
)

export default Menu
