import React from 'react'
import { Card } from 'react-bootstrap'

export default function Product({ product }) {
  return (
    <Card border="light" className="my-3 p-3 rounded">
      <a href={`/products/${product._id}`}>
        <Card.Img src={product.image} />
      </a>

      <Card.Body>
        <a href={`/products/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div classNAme="my-3">
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}
