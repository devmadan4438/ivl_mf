import { Button, Form, Offcanvas } from 'react-bootstrap';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function AddTask({ label = "Add Task" }) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState(null)

  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);

  const handleSave = () => {
    dispatch({ type: "ADD_TASK", payload: { title } })
    setTitle("")
  }

  return (
    <React.Fragment>
      <Button size='sm' className='btn btn-primary' onClick={handleShow}>{label}</Button>

      {/* Offcanvas Drawer (Right Side) */}
      <Offcanvas show={open} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Task</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Form onSubmit={(e) => { e.preventDefault(); handleSave() }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Task title</Form.Label>
              <Form.Control value={title} type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Button size='sm' disabled={!title} onClick={handleSave}>Save</Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  )
}
