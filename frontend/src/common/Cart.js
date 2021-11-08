import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import AlertMessage from '../components/AlertMessage'
import { addToCart } from '../redux/actions/cartActions'

export default function Cart({ match, location, history }) {
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  console.log('QTY IS', qty)

  const dispatch = useDispatch()

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return (
    <>
      <div>THIS IS THE CART PAGE</div>
      <div>THIS IS THE CART PAGE</div>
      <div>THIS IS THE CART PAGE</div>
    </>
  )
}
