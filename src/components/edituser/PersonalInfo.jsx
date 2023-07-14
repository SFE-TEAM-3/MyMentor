import React , { useState} from 'react';
import "./PersonalInfo.css";
import SidaNav2 from '../mentorreqshow/SidaNav2';
import hero from "../../assets/images/colored_background.jpg";
import Trush from '@iconscout/react-unicons/icons/uil-trash';
// import Arr from '@iconscout/react-unicons/icons/uil-arrow-circle-up';
import Add from '@iconscout/react-unicons/icons/uil-plus-circle';
import Clud from '@iconscout/react-unicons/icons/uil-cloud-upload';
import Cam from '@iconscout/react-unicons/icons/uil-camera';
import Calendr from '@iconscout/react-unicons/icons/uil-calender';
import Mail from '@iconscout/react-unicons/icons/uil-fast-mail';
import {Upload} from 'antd';
import "./data.json"
 
// ====================================================
 
// ================================================


const PersonalInfo = () => {

  // logic start -----------
  
  const [rows, setRows] = useState([
    {
      id: "1",
      name: "software at sde",
      from: "1000",
      to: "1100"
    },
    {
      id: "2",
      name: "software at AIDR ",
      from: "2000",
      to: "2200"
    },
    {
      id: "3",
      name: "software at dsu",
      from: "3000",
      to: "3300"
    }
  ])

 const handleDeleteRow = (id) => {
  if (id === rows[rows.length - 1].id) {
     setRows(prevRows => [
      ...prevRows,
      {
        id: (parseInt(prevRows[prevRows.length - 1].id) + 1).toString(),
        name: " ",
        from: " ",
        to: " "
      }
    ]);
  } else {
    setRows(prevRows => prevRows.filter(row => row.id !== id));
  }
  };
  

//   -- start 2 loc
  
//  const [skills, setSkills] = useState(['Pregramming', 'comp', 'UI/UX', 'coding', 'presentation']);
//   const [editingIndex, setEditingIndex] = useState(-1);

//   const handleEdit = (index) => {
//     setEditingIndex(index);
//   };

//   const handleSave = () => {
//     setEditingIndex(-1);
//   };

//   const handleChange = (index, e) => {
//     const newSkills = [...skills];
//     newSkills[index] = e.target.value;
//     setSkills(newSkills);
//   };
  // -----------------------above is old ----------------------  // 
    const [skills, setSkills] = useState(['programming', 'comp', 'UI/UX', 'coding', 'presentation']);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSave = (index) => {
    setEditingIndex(-1);
  };

  const handleChange = (index, e) => {
    const newSkills = [...skills];
    newSkills[index] = e.target.value;
    setSkills(newSkills);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave(index);
    }
  };
  
  //   end 2 lgc





  // -----logic end ----------------------
 

  return (

    <div className='PersonalInfo d-flex p-1 w-100 m-auto'>
            <div  className="left-pernav d-sm-flex d-none">
                  <SidaNav2 />
            </div> {/** end left-pernav */}
         
            <div className="mdl-box-personal p-1">
                    
                          <div className="personal-top m-auto p-sm-1 p-0">
                            <div className="personal-top-img p-sm-1 p-0 ">
                                <img className='w-100' src={hero} alt="" />
                            </div>
                            <div className="per-box d-flex flex-row-reverse align-items-start gap-2 m-auto p-sm-1 p-0  ">
                              <button className='border-0 p-sm-2 p-1 text-white'>message</button>
                              <div className="info-top d-flex flex-column align-items-center ">
                                    <div className="gryCircl"> <div className="CamSqr d-sm-none d-block"> <Cam className="icon" /> </div> </div>
                                    
                                    <h4 className='pt-sm-4 pt-2'>balqees hamdi</h4>
                                    <p className='pb-1 m-0' >software engneer</p>
                                    <h6 className='p-0 m-0 text-white'>mentor</h6>
                                    <div className="iconsBoxBtm d-sm-none d-flex"><Calendr className="icon" /> <Mail className="icon" />   </div>
                              </div> {/** end per-box */}
                        
                          </div> {/** end personal-top */}
                                
                    </div> {/** end mdl-box-personal */}
        
             


                 <div className="personal-med my-4">
              
                    <div className="ul-list-per-med d-flex  ">
                      <ul className='d-flex'>
                         <li className='' >personal information</li>
                         <li className='' >additnal information</li>
                      </ul>
                    </div>
                    <div className="form-per-med">
                        <form action="">
                          <div  className="form-per-med-box d-flex flex-column w-100 mt-4 p-4 justify-content-between align-items-center">
                            <div className="form-per-med-box-top d-sm-flex d-block justify-content-between w-100 align-items-center">
                                 <div className="form-per-med-left d-flex flex-column m-1 ">
                                    <label htmlFor="">name</label>
                                    <input type="text"  placeholder='your name'/>
                                    <label htmlFor="">job title</label>
                                    <input type="text" placeholder='softwar engneer' />
                                  </div> {/** end form-per-med-left */}
                                  <div className="form-per-med-right d-flex flex-column m-1">
                                    <label htmlFor="">phone number</label>
                                    <input type="phone" placeholder='055121515' />
                                    <label htmlFor="">email</label>
                                    <input type="email" placeholder='ama@gmail.com' />
                                  </div> {/** end form-per-med-right */}
                              </div> {/** end form-per-med-box-top */}
                                 <div className="form-per-med-box-btm2 d-sm-flex d-block w-100 justify-content-between align-items-center ">
                                     <div className="form-per-med-left-2 flex-column d-flex m-1  ">
                                         <label htmlFor="">company</label>
                                         <input type="email" placeholder='IATL' />
                                     </div> {/** end form-per-med-left-2 */}
                                     <div className="form-per-med-right-2 d-flex flex-column m-1">
                                         <label htmlFor="">job descreption</label>
                                         <input type="email" placeholder='IATL' />
                               </div> {/** end form-per-med-right-2  */}
                  
                                 </div>  {/** end form-per-med-box-btm2 */}

                               
                                <div   className="form-per-med-box-btm3 d-sm-flex flex-column d-none w-100 justify-content-between align-items-center ">
                                                                                 
                                  <div className="form-per-med-left-3 w-100 d-flex justify-content-between ">
                                            <div className="form-per-Boxx">
                                               <label htmlFor="" className='W-50 my-4'>experience</label>
                                            </div> {/** end form-per-Boxx */}
                                            <div className="right-leb w-50 d-flex  ">
                                                <label htmlFor="" className=' w-50'>from</label>
                                                <label htmlFor="" className=' w-50'>to</label> 
                                            </div>{/** right-lab */}
                                   </div> {/** end form-per-med-left-2 */}
                   
                                  {rows.map(row => (
                                      <div className="form-per-med-med-3 w-100 d-flex justify-content-between align-items-center" key={row.id}>
                                        <div className="boxx w-50">
                                          <input type="text" placeholder={row.name} className="" />
                                        </div>
                                        <div className="input-box d-flex w-25">
                                          <input type="number" placeholder={row.from} />
                                        </div>
                                        <div className="input-box d-flex w-25">
                                          <input type="number" placeholder={row.to} />
                                          <div className="icon-box" onClick={() => handleDeleteRow(row.id)}>
                                            {row.id === rows[rows.length - 1].id ? (
                                              <>
                                                <Trush className="icon" />
                                                <Add className="icon" />
                                              </>
                                            ) : (
                                              <Trush className="icon" />
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                
                                        
                                   
                                  </div> {/** end form-per-med-box-btm3 */}
            


                {/* --------------mobl st */}
                
                                 <div className="form-per-med-box-btm5-res d-sm-none d-flex w-100 flex-column justify-content-between  ">

                                    <div className="form-per-med-left-5 flex-column d-flex  ">
                                        <label htmlFor="" className='W-100'>experience</label>
                                  
                                      {rows.map(row => (
                                        <div className="exp-box5 d-flex w-100 flex-column justify-content-between align-items-end my-3 " key={row.id}>
                                            <div className="exp-inpt5 d-flex w-100 justify-content-center align-items-center ">
                                              <input type="text"  className=' w-100' placeholder={row.name} />
                                                  <div className="icon-box" onClick={() => handleDeleteRow(row.id)}>
                                                  {row.id === rows[rows.length - 1].id ? (
                                                    <>
                                                      <Trush className="icon" />
                                                      <Add className="icon" />
                                                    </>
                                                  ) : (
                                                    <Trush className="icon" />
                                                  )}
                                                </div>
                                            </div>  
                                                <div className="exp-btm-box d-flex gap-2 w-100 my-2">
                                                    <div className="exp-btm-bo-left d-flex  flex-column">
                                                        <label htmlFor="" className=' mb-2'>from</label>
                                                        <input type="number" placeholder={row.from} className='p-2' />
                                                    </div> 
                                                    <div className="exp-btm-bo-right  d-flex flex-column">
                                                    <label htmlFor="" className='  mb-2'>to</label>
                                                      <input type="number" placeholder={row.to} className='p-2'/>
                                                    </div> 
                                                  </div>  

                                          
                                          </div>
                              ))}
                    
                                    

                     </div> {/** end form-per-med-left-5*/}

                 </div> {/** end form-per-med-box-btm5-res */}
                
                {/* ------------------mobl end */}


                                <div className="form-per-med-left-4 col-md-12 my-4 my-sm-2">
                                    <label htmlFor="" className='W-100'>Skills</label>
                                    <div className="form-per-med-left-4-btmBox  d-flex">
                                         <ul className='d-flex list-0 list-none'>
                                          {skills.map((skill, index) => (
                                            <li key={index}>
                                              {editingIndex === index ? (
                                                <input
                                                  type="text"
                                                  value={skill}
                                                  onChange={(e) => handleChange(index, e)}
                                                  onBlur={() => handleSave(index)}
                                                  onKeyDown={(e) => handleKeyDown(index, e)}
                                                  autoFocus
                                                />
                                              ) : (
                                                <span onClick={() => handleEdit(index)}>{skill}</span>
                                              )}
                                            </li>
                                          ))}
                                        </ul>
                                    </div> {/** end form-per-med-left-4-btmBox */}
                                </div> {/** end form-per-med-left-4 */}

                                <div className="form-per-med-left-5 col-md-12  my-4">
                                        <label htmlFor="" className='W-100 '>Upload CV</label>
                                        <div className="form-per-med-left-5-btmBox d-flex flex-colum justify-content-center align-items-center">
                                            
                               
                                    <div className="icons-text d-flex flex-column w-100 justify-content-center align-items-center my-2">
                      
                                            <div className="icons flex-colum d-flex flex-colum justify-content-center align-items-center my-2 ">
                                              {/* <Arr className="ic2" /> */}
                                                <Clud className="ic1" /> 
                      </div>
                                   <div className="upload-box d-flex p-1 m-2 flex-colum justify-content-center align-items-center ">
                                         {/* <Upload.Dragger className='upld-ic' >      */}
                                        <Upload multiple
                                          accept='.jpeg, .png , .gif , .mp4 , .ai , .psd , .word , .ppt '
                                          className='upld-ic' >     
                                              <h6> Drag & Drop files or <span className='spanylo'> Browes </span> </h6>
                                        {/* </Upload.Dragger>  */}
                                        </Upload> 
                                    </div>{/** end upload-box */}
                                               <p>supported formates : JPEG , PNG , GIF , MP4 , AI , PSD , Word , PPT </p>
                                            </div>
                                       
                                        </div> {/** end form-per-med-left-5-btmBox */}
                                </div> {/** end form-per-med-left-5 */}

                                <button className='p-2 text-white d-flex justify-content-center align-items-end border-0 '>SAVE</button>
                
                          </div> {/** end form-per-med-box */}

                      </form>
            
                    </div> {/** end form-per-med */}
                     
            
                  </div> {/** end personal-med */}
          
                  

             </div> {/** end container-box */}
          
           
             <div className='messages3'>
            
<div class="col-lg-3  col-12  message-part mb-5 " id="message-items">
  
 <div class="search-bar  d-lg-flex  d-none mt-4 " style={{width:'fit-content'}}>
    <input type="search" placeholder="search direct messages" id="message-search" onkeyup="searching()"/>
    <i class="fa-solid fa-magnifying-glass"></i>
          </div>    
         
 
 <div class="message " id="Message">

   <div class="message-img mt-3  " style={{width: '70px',height: '70px'}}>
     <img src=""  alt="photo" style={{width: '50px',height: '50px'}}  />
     </div>     

   <div class="message-body">
     <h5 class="small fw-bold">Balqees Hamdy   </h5>
     <p class="small message-p">econmoicc dollar is more exciting  
       <a href="#"> <i class="fa-solid fa-trash-can d-md-none d-block" id="trash" job="delete"></i></a></p>
    
    
   </div>     

 </div>      


   <div class="message message2  " id="Message">

     <div class="message-img mt-2  " style={{width: '70px',height: '70px'}}>
       <img src=""  alt="photo" style={{width: '50px',height: '50px'}} />
       </div>     

     <div class="message-body">
       <h5 class="small fw-bold">Mona Maher</h5>
       <p class="small message-p">econmoicc dollar is more exciting
         <a href="#"><i class="fa-solid fa-trash-can  d-md-none d-block" id="trash" job="delete"></i></a>
       </p>

     </div>     


     <div class="message message2" id="Message">

       <div class="message-img mt-3  " style={{width: '70px',height: '70px'}}>
         <img src=""  alt="image" style={{width: '50px',height: '50px'}}  />
         </div>     

       <div class="message-body">
         <h5 class="small fw-bold">Salma Ahmad</h5>
         <p class="small message-p">econmoicc dollar is more exciting
           <a href="#"><i class="fa-solid fa-trash-can d-md-none d-block" id="trash" job="delete" ></i></a>
         </p>

       </div>    
 

          

       
     <button class="message-button  mt-3 mb-4 col-lg-11 col-11"  id="message-button" onclick="sending_newmessage()"> New Message <i class="fa-solid fa-envelope"></i></button>
     <div class="message_content " id="message_content" >
       <input type="text" class="textbox ml-10" placeholder="To : "  id="To" />

    <input class="input-text" id="bodyy" />
    <button type="submit" id="send_message" class="mb-3">Send <i class="fa-solid fa-envelope"></i></button>
     </div>
</div>      
            </div>
            
           </div>

       
</div>
</div>
       
 
  )
}
 
export default PersonalInfo;
