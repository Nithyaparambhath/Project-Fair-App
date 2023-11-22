import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import designer from '../Assests/designer.png'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectAPI } from '../Services/allAPI'
function Home() {
  const [loggedIn,setLoggedIn] = useState(false)
  const [homeProjects,setHomeProjects] = useState([])

  const getHomeProjects =async (req,res)=>{
    const result = await homeProjectAPI()
    if(result.status === 200){
      setHomeProjects(result.data)
    }else{
      console.log(result);
      console.log(result.response.data);
    }
  }

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }
    // api call
    getHomeProjects()
  })
  return (
    <>
    {/* landing section */}
      <div style={{width:'100%',height:'100vh'}} className='bg-success container-fluid rounded'>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6}>
            <h1 style={{fontSize:'80px'}} className='fw-bolder text-light' > <i class="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair</h1>
            <p>One stop destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website...What are you waiting for!!!</p>
            {loggedIn ?
              
            <Link to={'/dashboard'} style={{backgroundColor:'#004682'}} className='btn text-light'>Manage Your Projects <i class="fa-solid fa-right-long fa-beat ms-2"></i></Link>
            :
            <Link to={'/login'} style={{backgroundColor:'#004682'}} className='btn text-light'>Start to Expolre <i class="fa-solid fa-right-long fa-beat ms-2"></i></Link>
          }
          </Col>
          <Col sm={12} md={6}>
            <img  src={designer} alt="" />
          </Col>
        </Row>
      </div>

      {/* all projects */}
      <div className="all-projects mt-5">
        <h1 className='text-center mb-5'>Explore our Projects</h1>
        <marquee scrollAmount={15}>
          <Row>
            {homeProjects ?.length>0 ?homeProjects.map(project=>(
              <Col sm={12} md={6} lg={4} style={{width:'400px'}}>
              <ProjectCard project={project} />
            </Col>
            ))
            :null}
            {/* <Col sm={12} md={6} lg={4} style={{width:'400px'}}>
              <ProjectCard />
            </Col>
            <Col sm={12} md={6} lg={4} style={{width:'400px'}}>
              <ProjectCard />
            </Col> */}
          </Row>
        </marquee>
        <div className="text-center mt-5"><Link to={'/projects'}>View More Projects</Link></div>
      </div>
    
    </>
  )
}

export default Home