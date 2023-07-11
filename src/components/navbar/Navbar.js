import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../images/logo.png"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Link } from "react-router-dom"


const MyNavbar = () => {
  const [isClick, setIsClick]= useState(false)
  const user = {
    id: 1,
    username: "balqees saber",
    img : "https://image.lexica.art/md2/c7a4ec7a-e570-4ef8-8c0e-e87ec0ab8587",
    job_title: "software developer",
    isActive : true,
    userType: 'mentee'
  };
  return (
    <Navbar expand="lg" bg='white'>
    <Container>
      <Navbar.Brand >
        <Link to="/">
          <img
                src={logo}
                width="70%"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
        </Link>
      </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* if user is active show form and menu */}
             {user.isActive ? (
              <>
           <Navbar.Offcanvas id="basic-navbar-nav" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="end">
           <Offcanvas.Header closeButton className='ms-auto'></Offcanvas.Header>
           <Offcanvas.Body className='pt-sm-5 pt-lg-0 align-items-center'>
             <Nav className="ms-auto">
             <Form className="d-flex flex-column-reverse flex-sm-row me-2">
               <div className='me-1  '>
               <Form.Select aria-label="Default select example" className='mySelect'>
                 <option>UI Designer</option>
                 <option>UI Designer</option>
                 <option>UI Designer</option>
                 <option>UI Designer</option>
               </Form.Select>
               </div>
               
               <div className="d-flex search px-1 ">
               <Form.Control
                   type="search"
                   placeholder="Search"
                   className="me-1"
                   aria-label="Search"
                 />
                 <Button className='btn btn-dark rounded-circle me-1'>
                 <FontAwesomeIcon icon={faMagnifyingGlass} />
                 </Button>
               </div>
               </Form>
               <Nav.Link to="/" className='user-item ' onClick={()=> setIsClick(!isClick)}>
                   <div className='color-gray rounded-pill text-capitalize fw-bold'>
                     <img src={user.img} alt='user-img' className='rounded-circle me-4' width={40} height={40}/>
                   </div>
                   {/* to click in pic user display links */}
                   {isClick && (<ul class="nav flex-column menu p-3 text-center">
                     <li class="nav-item px-3">
                       <div className='d-flex align-items-center '>
                         <img src={user.img} alt='user-img' className="rounded-circle me-3"  width={60} height={60}/>
                         <p className='align-self-center fw-bold text-capitalize text-start'>
                           <span className='d-block'>{user.username}</span>
                           <span className='d-block'>{user.job_title}</span>
                         </p>
                       </div>
                         <Link to="/profile" class="nav-link btn d-block py-2 px-4 rounded-pill  mt-3 mx-auto color-secondary fw-bold text-capitalize btnUser" href="#"> view profile</Link>
                     </li>
                     <li class="nav-item text-start d-lg-none">
                       <Link to="/edit-profile" class="nav-link text-light text-capitalize fw-bold" >edit profile</Link>
                     </li>
                     {/* if user type mentee show some links , is not show others links */}
                     {user.userType === "mentee"? (
                      <>
                      <li class="nav-item text-start d-lg-none">
                       <Link to="/my-requests" class="nav-link text-light text-capitalize fw-bold" >my requests</Link>
                     </li>
                     <li class="nav-item text-start d-lg-none">
                       <Link to="/post-request" class="nav-link text-light text-capitalize fw-bold" >post a new request</Link>
                     </li>
                     <li class="nav-item text-start d-lg-none">
                       <Link to="/new-mentoring-request" class="nav-link text-light text-capitalize fw-bold">new mentoring request</Link>
                     </li>
                     <li class="nav-item text-start d-lg-none">
                       <Link to="/edit-request" class="nav-link text-light text-capitalize fw-bold" > edit request</Link>
                     </li>
                      </>
                     ): (
                      <>
                      <li class="nav-item text-start d-lg-none">
                       <Link to="/my-opportunities" class="nav-link text-light text-capitalize fw-bold">my opportunities</Link>
                     </li>
                     <li class="nav-item text-start d-lg-none">
                       <Link to="/post-opportunity" class="nav-link text-light text-capitalize fw-bold" >post a new opportunity</Link>
                     </li>
                     <li class="nav-item text-start d-lg-none">
                       <Link to="/view-mentoring-opportuniy" class="nav-link text-light text-capitalize fw-bold">view mentoring opportunity</Link>
                     </li>
                     <li class="nav-item text-start d-lg-none">
                       <Link to="/edit-opportunity" class="nav-link text-light text-capitalize fw-bold" > edit opportunity</Link>
                     </li>
                      </>
                     )}
                     <li class="nav-item text-start">
                       <Link to="/" class="nav-link text-light text-capitalize fw-bold" >help</Link>
                     </li>
                     <li class="nav-item"><hr class="divider bg-white m-0"/></li>
                     <li class="nav-item">
                       <Link to="/" class="nav-link text-light text-capitalize fw-bold" >log out</Link>
                     </li>
                   </ul>)}
                 </Nav.Link>
             </Nav>
             </Offcanvas.Body>
           </Navbar.Offcanvas>
           </>
          ) : ""}
     
    </Container>
  </Navbar>
  )
}

export default MyNavbar