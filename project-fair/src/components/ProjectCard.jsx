import React, { useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import projectImg from '../Assests/prj1.jpg'

function ProjectCard({project}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    {project &&<Card className="shadow mb-5 btn" onClick={handleShow}>
      <Card.Img  variant="top" src={project?`project.projectImage:projectImg}` alt='project image' />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
}
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                    <img style={{width:'350px'}} src={project?project.projectImage:projectImg} alt='project image'  />
                </Col>
                <Col md={6}>
                    <h2 className='text-success fw-bolder'>{project.title}</h2>
                    <p><span className='fw-bolder text-danger fs-5'>Project Overview</span> : <span className='fw-bolder text'> {project.overview}</span></p>
                    <p><span className='fw-bolder text-danger fs-5'>Languague Used </span> : <span className='fw-bolder text'>{project.languages}</span></p>
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProjectCard