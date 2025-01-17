import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TaskList from '../components/landing-page/TaskList'
import { Container } from 'react-bootstrap';

import { Row, Col } from 'react-bootstrap';

const AddTask = React.lazy(() => import("addTask/AddTask"))


export default function LandingPage() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Row>
          <Col style={{ justifyContent: "flex-end", display: "flex" }}><AddTask label='Add New Task (MF)' /></Col>
        </Row>
        <TaskList />
      </Container>
      <Footer />
    </React.Fragment>
  )
}
