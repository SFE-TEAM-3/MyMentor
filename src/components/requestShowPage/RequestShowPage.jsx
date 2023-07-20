import React from 'react'
import "./requestmentor2.css"
import SidaNav2 from './SidaNav2'
import Mony from '@iconscout/react-unicons/icons/uil-dollar-alt'
import Location from '@iconscout/react-unicons/icons/uil-location-point'
import Time from '@iconscout/react-unicons/icons/uil-clock'
import Exp from '@iconscout/react-unicons/icons/uil-bag'
import Comments from '../comments/Comments'
// import Comments from '../comments/Comments'


function RequestShowPage() {
  return (

    <div className='RequestMentor2'> 
      
      <div className="container-fluid">
        <div className="row">

            <div className="col col-lg-3 d-none d-lg-block">
               <div className="Left-Request d-sm-flex d-none justify-content-start align-items-start">
                
                  <SidaNav2/>
                  
                
                </div> {/** end Right-Request */}
            
               </div> {/** end col */}
             
               <div className="col-sm">

                  <div className="Right-Request ">
              
                        
                         <div className="right-green-title-box d-flex justify-content-end align-items-center ">
                            <div className="right-green-title text-white p-2 text-center ">  mentoring request </div>
                          </div> {/** end right-green-title-box */}
                  
                        <div className="Left-Request-Top m-2">
                        
                            {/* <div className="Left-Request-Top-right w-25 d-flex align-items-center flex-row-reverse justify-content-between"> */}
                             <div className="Left-Request-Top-right d-flex w-25 justify-content-end align-items-end d-sm-flex d-none">
                                <button className='border-0 m-auto p-2 text-center '>Mentor</button>
                            </div> {/** end Left-Request-Top-right */}
                

                          <div className="Left-Request-Top-container d-flex justify-content-center m-auto">

                          

                           <div className="Left-Request-Top-left d-flex flex-column mx-2">
                                    <div className="Left-Request-Top-left-title-res1 d-sm-flex flex-sm-column d-none">
                                        <h3>Front End Development </h3>
                                        <span className='d-flex '> <h5  className='mr-3' ><span className='blue-color'> Khadija seif</span> </h5> <small className='p-1' > is looking for a mentor </small>  </span>
                                    </div> {/** end Left-Request-Top-left-title */}
                                    <div className="Left-Request-Top-left-title-res2 d-flex flex-column d-sm-none">
                                        <h6 className='w-100 py-2'>website ui design implemntation </h6>
                                        <div className='d-flex'> <h6  className='pr-1' > get mentored by : </h6> <h6 className='nameh5span pl-1'> bilal mansor </h6> </div>
                                    </div> {/** end Left-Request-Top-left-title */}
                                    <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, illo fugit!
                                      Tempora quidem ducimus distinctio, odit quisquam optio at officia excepturi delectus!</p>
                                    <div className="Left-Request-Top-left-list ">
                                        <ul className='d-flex gap-4 p-0 '>
                                          <div className="left-ul ">
                                              <li className='d-flex'  ><span className='p-1'  >
                                                <Mony className="icon" /> </span>
                                                <div className="left-ul-span  ">
                                                  <span> Paid : </span>  <span className='blue-color ms-1'>  200 sdg/H </span>
                                                </div>{/** end left-ul-span */}
                                              </li>
                                              <li  className='d-flex'  > <span className='p-1' >
                                                <Exp className="icon" /> </span>
                                                <div className="left-ul-span">
                                                  <span>Expirence: </span>
                                                  <span className='d-none d-sm-flex blue-color ms-1'>none</span>
                                                  <span className='d-sm-none d-flex blue-color ms-1'>yes</span>
                                                </div>{/** end left-ul-span */}
                                              </li>
                                           </div>{/** end left ul */}
                                           <div className="right-ul ">
                                              <li className='d-flex ' ><span className='p-1'>
                                                <Location className="icon" /> </span>
                                                <div className="right-ul-span">
                                                  <span> Location: </span>  <span  className='blue-color ms-1'> remote</span>
                                                </div>{/** end right-ul-span */}
                                              </li>
                                              <li className='d-flex ' ><span className='p-1' > <Time className="icon" /> </span>
                                                <div className="right-ul-span">
                                                  <span>Duration: </span>  <span  className='blue-color ms-1' > open duration</span>
                                                </div>{/** end right-ul-span */}
                                              </li>
                                           </div>{/** end right ul */}
                                        </ul>
                            </div> {/** end Left-Request-Top-left-list */}
                            <div className="Left-Request-Top-left-parags">
                      
                             <div className="Left-Request-Top-left-parags-1 py-2">
                                <h6 className='py-1 blue-color'>I'm looking for help with </h6>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur adip Obcaecati, aliquam labore.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing . Obcaecati, aliquam labore.</li>
                                    <li>Lorem ipsum dolortetur adipisicing elit. Obcaecati, aliquam labore.</li>
                                    <li>Lorem ipsum dolor sit amet cg elit. Obcaecati, aliquam hghgh hghgh hghghgh hghghghgh hghgh labore.</li>
                                </ul>
                              </div> {/** end Left-Request-Top-left-parags-1 */}
                              <div className="Left-Request-Top-left-parags-2 py-2">
                                        <h6 className='py-1 blue-color' >Requirments</h6>
                                        <ul>
                                             <li>Lo it amet consectetur adip Obcaecati, aliquam labore.</li>
                                            <li>Lorem i onsectetur adipisicing . Obcaecati, aliquam labore.</li>
                                            <li>Lorem ipsum dolortetur adipisicing elit. Obcaecati, aliquam labore.</li>
                                         </ul>
                              </div> {/** end Left-Request-Top-left-parags-2 */}
                              <div className="Left-Request-Top-left-parags-3 py-2">
                                        <h6 className='py-1 blue-color'>I have a background about</h6>
                                        <ul>
                                             <li>Lo it amet consectetur adip Obcaecati, aliquam labore.</li>
                                            <li>Lo it amet consectetur  hghg hghgh hghgh  adip Obcaecati, aliquam labore.</li>
                                            <li>Lorem i onsectetur adipisicing . Obcaecati, aliquam labore.</li>
                                            <li>Lorem ipsum dolortetur adipisicing elit. Obcaecati, aliquam labore.</li>
                                            <li>Lorem ipsum dolortetur adipisighgh hyghg hghhgh hghghh cing elit. Obcaecati, aliquam labore.</li>
                                         </ul>
                               </div> {/** end Left-Request-Top-left-parags-3 */}
                                      <div className="Left-Request-Top-right w-50 mb-4 d-sm-none d-flex">
                                          <button className='border-0 p-2 text-center mb-4'>Mentor</button>
                                      </div> {/** end Left-Request-Top-right */}

                            </div> {/** end Left-Request-Top-left-parags */}

                           <div className="about-container ">
                              <h4 className='mb-2 d-none d-sm-flex blue-color'>about khadija saif</h4>
                              
                      

                            <div className="about-box  d-flex p-3 mt-4 ">
                              <div className="left-aboutBox d-flex flex-column  ">
                                <div className="left-aboutBox-top d-flex gap-3 ">
                                  
                                  <div className="right-aboutBox-btm d-flex d-sm-none flex-column justify-content-center align-items-center ">
                                      <div className="pfoImg  p-2 m-2 ">
                                         <img src="#" alt="" />
                                      </div>
                                      <div className="pfobtn p-2 m-2 ">
                                        <button className='border-0 p-2 text-center '>view Profile</button>
                                      </div>
                                  <div className="left-aboutBox-btm mb-3 d-sm-none d-flex flex-column ">
                                
                                       <h6 className='mt-3'>about bilal mansor</h6>
                                        <p  className="p-0 m-0" >Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit. Nemo possimus suscipit
                                              , pariatur necessitatibus sed deserunt laboriosam!</p>
                                    </div>{/** end left-aboutBox-btm resbonsv */}
                              
                                  </div>{/** end right-aboutBox-btm resbonsv*/}
                            

                                    <div className="left-aboutBox-left w-50 ">
                                      <ul >
                                        <li  ><span className='blue-color'>name</span> <span>Balqees hamdi</span> </li>
                                        <li><span className='blue-color'>i am a</span> <span>fresh graduatemdi</span> </li>
                                        <li><span className='blue-color'>university</span> <span>intenational islamic university</span> </li>
                                      </ul>
                                    </div> {/** end left-aboutBox-left */}
                                    <div className="left-aboutBox-right w-50 ">
                                      <ul>
                                        <li><span className='blue-color'>phone number</span> <span>0554422135</span> </li>
                                        <li><span className='blue-color'>email</span> <span>beso@gmail.locmi</span> </li>
                                      </ul>
                                </div> {/** {/** end left-aboutBox-right */}
                                </div> {/** end left-aboutBox-top */}
                                <div className="left-aboutBox-btm d-sm-flex d-none">
                                  <p  className="p-0" >Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Nemo possimus suscipit
                                        , pariatur necessitatibus sed deserunt laboriosam!</p>
                                </div>{/** end left-aboutBox-btm */}
                               
                                </div> {/**end left-aboutBox */}
                                <div className="right-aboutBox d-flex flex-column  ">
                                  <div className="right-aboutBox-top ">
                                      <span className='d-flex m-sm-2 px-sm-2 mb-1 mt-2 blue-color'>Expirise</span>
                                              <ul className='m-2 p-2 ' >
                                                <li>Software Engneering</li>
                                                <li>front end development </li>
                                                <li>front end deve </li>
                                              </ul>
                                      </div> {/** end right-aboutBox-top */}
                                      <div className="right-aboutBox-btm d-none d-sm-flex flex-column justify-content-center align-items-center ">
                                        <div className="pfoImg  p-2 m-2 ">
                                          <img src="#" alt="" />
                                        </div>
                                        <div className="pfobtn p-2 m-2 ">
                                          <button className='border-0 p-2 text-center '>view Profile</button>
                                        </div>
                                      </div>{/** end right-aboutBox-btm */}
                                
                                  </div>{/**end right-aboutBox */}
                                </div> {/**end  about-box */}
                            </div> {/** end about-container */}
                    

                    
                          </div> {/** end Left-Request-Top-left*/}
                
                  

                      </div> {/** end Left-Request-Top-container */}
                

                    </div>{/** end Left-Request-Top  */}
              







                  <div className="Left-Request-Bottm m-2 ">
                  <Comments />
                      {/* <Comments /> */}
                  </div> {/** end Left-Request-Bottm */}
                  
                
                  
                 </div> {/** end Left-Request */}
            
               </div> {/** end col */}

          
        </div> {/** end row */}

      </div>  {/** end container */}



    </div> /** end RequestMentor2 */

  )

}


export default RequestShowPage
