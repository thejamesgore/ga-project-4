import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../redux/actions/userActions'
import Loading from '../components/Loading'
import AlertMessage from '../components/AlertMessage'

export default function ProfilePage({ history }) {
  return (
    <Row>
      <Col md={3}>
        <h2>Profile</h2>
      </Col>
      <Col md={9}>
        <h2>Orders</h2>
      </Col>
    </Row>
  )
}
