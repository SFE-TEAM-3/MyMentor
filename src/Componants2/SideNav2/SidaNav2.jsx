import React from 'react'
import "./SideNav2.css"

function SidaNav2() {
  return (
      <div className='SidaNav2 d-flex gap-4 justify-content-start align-items-start m-0 p-0 text-left ' >
        
          <div className="container-fluid">
            
        
              <div className="sidnav-top d-flex justify-content-start align-items-start">
                
                  <ul>
                      <li className='py-1' > <a href="#"> edit mentoring opportunity </a> </li>
                      <li className='py-1' > <a href="#"> settings </a> </li>
                      <li className='py-1' > <a href="#"> settingsterms and privecy </a> </li>
                  </ul>
          
              </div>  {/** end sidnav-top */}
              
              <ul className="sidnavt-bottom d-flex gap-2">
          
                   <a href="#">
                           <li className="sidnavt-bottom-left">
                              new mentoring request 
                          </li> {/** end sidnavt-bottom-left */}
                  </a>
          
                  <a href="#">
                          <li className="sidnavt-bottom-Right flex-shrink-1 ">
                                +
                          </li>  {/** end sidnavt-bottom-Right */}
                  </a>
                 
              </ul>  {/** end sidnavt-bottom */}

        
          </div> {/** end container */}
      
      
      </div> /** end SidaNav2 */
  )
}

export default SidaNav2