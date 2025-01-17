import React from 'react'
import AddTask from '../components/AddTask';
import { Col, Container, Row } from 'react-bootstrap';

// Task MF
const Header = React.lazy(() => import('task/Header'));
const Footer = React.lazy(() => import('task/Footer'));
const TaskList = React.lazy(() => import('task/TaskList'));

export default function Task() {

    return (
        <React.Fragment>
            <Header />
            <Container>
                <Row>
                    <Col style={{ justifyContent: "flex-end", display: "flex" }}><AddTask label='Add Task'/></Col>
                </Row>
                <TaskList />
            </Container>
            <Footer />
        </React.Fragment>
    )
}
