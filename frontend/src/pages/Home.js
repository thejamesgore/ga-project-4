import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

export default function Home() {
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
  return (
    <div>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
