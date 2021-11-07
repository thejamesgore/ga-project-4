import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  ListGroupItem,
} from 'react-bootstrap'

import Rating from '../components/Rating'

function ProductPage({ match }) {
  const [products, setProducts] = useState([
    {
      _id: '1',
      name: 'Alpha Brain',
      image: '/images/alpha_brain.png',
      description: 'Nootropic for the mind, increased memory and focus',
      brand: 'Onnit',
      category: 'Mind & Body',
      price: 39.99,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      _id: '2',
      name: 'New Mood',
      image: '/images/new_mood.png',
      description:
        'Nootropic for the mind, increases postive mood and calmness',
      brand: 'Onnit',
      category: 'Mind & Body',
      price: 39.99,
      countInStock: 4,
      rating: 4,
      numReviews: 8,
    },
    {
      _id: '3',
      name: 'New Mood',
      image: '/images/vitamin_d.png',
      description:
        'Nootropic for the mind, increases postive mood and calmness',
      brand: 'Onnit',
      category: 'Mind & Body',
      price: 39.99,
      countInStock: 4,
      rating: 4.5,
      numReviews: 8,
    },
  ])

  const product = products.find((p) => p._id == match.params.id)

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={`#f8e825`}
              />
            </ListGroup.Item>

            <ListGroup.Item>Descritption: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={2}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn btn-block"
                  disabled={product.countInStock == 0}
                  type="button"
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductPage
