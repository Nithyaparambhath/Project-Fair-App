import React from 'react'
import Header from '../components/Header'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <>
      <Header />
      <div style={{marginTop:'100px'}} className="projects">
        <h1 className='text-center mb-5'>All Projects</h1>
        <div className="d-flex justify-content-center align-items-center w-100">
          <div className="d-flex border w-50 rounded">
            <input type="text" className='form-control' placeholder='Serch Projects by Technologies used' />
          </div>
          
        </div>
        <Row className='container-fluid mt-5'>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard />
            </Col>
          </Row>
      </div>
    </>
  )
}

export default Projects