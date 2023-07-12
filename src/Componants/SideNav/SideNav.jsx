import React from 'react'
import "./sidenav.css"
// import Plus from '@iconscout/react-unicons/icons/uil-plus-square'
// import Footer from '../Footer/Footer';


function SideNav() {
  return (
    <div className='SideNav'>
      
      <div className="navleft">
        <a href="#"><h6>edit mentoring opportunity</h6></a>
        <a href="#"><h6>settings</h6></a>
        <a href="#"><h6>settingsterms and privecy </h6></a>
        <br></br>
        <a href="#"><div className="sidNavText1">
          <h6>new mentoring request </h6>
          {/* <Plus  className ="PlusIconn"  /> */}
           <div className="PlusIcon">+</div>
        </div></a>
        
        {/* <UilReact /> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-square"><path fill="#6563FF" d="M9,13h2v2a1,1,0,0,0,2,0V13h2a1,1,0,0,0,0-2H13V9a1,1,0,0,0-2,0v2H9a1,1,0,0,0,0,2ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z"></path>
        </svg> */}
      </div> {/*end navleft*/}

      {/* <Footer/> */}

    </div> /** end SideNav */
  )
}

export default SideNav
