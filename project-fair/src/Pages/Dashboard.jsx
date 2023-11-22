import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Profile from '../components/Profile'
import MyProjects from '../components/MyProjects'

function Dashboard() {

  const [username,setUsername] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
  })
  return (
    <div>
      <Header insideDashboard />
      <Row style={{marginTop:'100px'}} className='container-fluid'>
        <Col sm={12} md={8}>
        {/* my project */}
        <h2>Welcome <span className='text-warning'>{username}</span></h2>
        <MyProjects />
        </Col>
        <Col sm={12} md={4}>
          {/* my profile */}
          <Profile />
        </Col>

      </Row>
    </div>
  )
}

export default Dashboard