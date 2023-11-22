import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-success text-white' style={{width:'100%',height:'300px'}}>
    <div className="footer-section w-100 d-flex justify-content-evenly text-white ">
        <div className="website " style={{width:'400px'}}>
        <Link to={"/"} className='fs-5' style={{textDecoration:'none',color:'#ffffff'}}>
        <i class="fa-solid fa-cart-shopping"></i>
           Project Fair
        </Link>
        <h6 style={{fontSize:'15px'}}>Designed and build with all the love in the world by the Luminar team with the help of our conributors.</h6>
        <h6>Code licenced Luminar,docs CC BY 3.0.</h6>
        <p>Currently v1.0.0</p>
        </div>
        <div className="links d-flex flex-column">
            <h5>Links</h5>
            <Link to={"/"}  style={{textDecoration:'none',color:'#ffffff',fontSize:'15px'}}>Home </Link>
            <Link to={"/login"}  style={{textDecoration:'none',color:'#ffffff',fontSize:'15px'}}>Login </Link>
            <Link to={"/register"}  style={{textDecoration:'none',color:'#ffffff',fontSize:'15px'}}>Register </Link>
    
           
        </div>
        <div className="guides d-flex flex-column">
        <h5>Guides</h5>
            <Link to={"https://www.w3schools.com/react/"}  style={{textDecoration:'none',color:'#ffffff',fontSize:'15px'}}>React </Link>
            <Link to={"https://react-bootstrap.github.io/"}  style={{textDecoration:'none',color:'#ffffff',fontSize:'15px'}}>React Bootstrap </Link>
            <Link to={"https://getbootstrap.com/"}  style={{textDecoration:'none',color:'#ffffff',fontSize:'15px'}}>Bootstrap </Link>
        </div>
        <div className="contact d-flex flex-column">
        <h5>Contact Us</h5>
        <div className='d-flex '>
          <input className='p-2' style={{width:'200px'}} type="text" placeholder='Enter Email Id' />
              <button className='btn btn-warning'><i class="fa-solid fa-arrow-right "></i></button>
        </div>
        <div className="social-media-icons mt-3 d-flex">
           <i  className="fa-brands fa-facebook fs-5 me-3"></i>
           <i  className="fa-brands fa-linkedin fs-5 me-3"></i>
           <i  className="fa-brands fa-instagram fs-5 me-3"></i>
           <i  className="fa-brands fa-github fs-5 me-3"></i>
           <i  className="fa-brands fa-youtube fs-5 me-3"></i>
        </div>
        </div>
    </div>
    <p>Copyrights © 2023 Project Fair. Build with React</p>
  </div>
  )
}

export default Footer