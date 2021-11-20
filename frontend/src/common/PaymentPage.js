import React, { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutProgress from '../components/CheckoutProgress'

function PaymentPage({ history }) {
  const [paymentMethod, setPaymentMethod] = useState('')
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const dispatch = useDispatch()

  if (!shippingAddress.address) {
    history.push('/shipping')
  }

  const submitForm = (e) => {
    e.preventDefault()

    history.push('/confirmation')
  }

  return (
    <FormContainer>
      <CheckoutProgress step1 step2 step3 />
      <Form onSubmit={submitForm}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Debit or Credit Card"
              id="payment"
              name="paymentMethod"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentPage
