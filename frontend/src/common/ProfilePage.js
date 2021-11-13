import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../redux/actions/userActions'
import Loading from '../components/Loading'
import AlertMessage from '../components/AlertMessage'

export default function ProfilePage({ history }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { error, loading, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user || !user.name) {
        dispatch(getUserDetails('profile'))
      }
    }
  }, [history, userInfo])

  const submitForm = (e) => {
    e.preventDefault()
    if (password != confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      // dispatch(register(name, email, password))
    }
    // dispatch(register(name, email, password))
  }
  return (
    <Row>
      <Col md={3}>
        <h2>Profile</h2>
      </Col>
      <Col md={9}>
        <h2>Order History</h2>
      </Col>
    </Row>
  )
}
