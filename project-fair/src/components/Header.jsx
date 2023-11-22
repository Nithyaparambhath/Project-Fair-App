import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideDashboard}) {
  return (
    <>
    
    <Navbar className="bg-success ">
        <Container>
          <Navbar.Brand >
          <Link style={{textDecoration:'none'}} to={'/'} className='text-light fw-bolder fs-2'>
              <i class="fa-brands fa-stack-overflow fa-bounce me-2"></i> 
                Project Fair
          </Link>
          </Navbar.Brand>
        { insideDashboard && <button style={{color:'#004682'}}   className='btn fs-5'>Logout <i class="fa-solid fa-right-from-bracket fa-fade"></i></button>}
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header