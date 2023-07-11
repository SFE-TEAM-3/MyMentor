import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCsv, faLocationDot, faBriefcase, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import {faClock} from'@fortawesome/free-regular-svg-icons'


const Opp = ({item}) => {
  return (
    <div className='opp color-gray px-5 pt-5'>
         <div className={`box ${item.hired ? "closed" : "open"} px-4 py-2`}>
            <span>{item.hired ? "closed mentoring opportunity" : "open mentoring opportunity"} </span>
         </div>
         <div className='mb-5 text-capitalize'>
            <h3 className='fw-bold'>{item.title}</h3>
            {item.hired ? (
                  <h4 className='fw-bold'>Get mentored by : <span className='data'>{item.name}</span></h4>
            ) : (
               <div className='d-flex justify-content-between align-items-center'>
            <h4 className='fw-bold fs-6 fst-italic'><span className='data fs-3'>{item.name}</span> is looking for mentor</h4>
            <button className='mentorBtn px-5 py-2 rounded-pill '>mentor</button>
            </div>
            )}
         </div>
         
        <div className='lh-base des'>
        <p>{item.oop_des}</p>
        </div>
        
         <div className='d-flex flex-wrap my-3 text-capitalize'>

         {item.hired && (<p className='info my-2 '>
            <span className='me-2'><FontAwesomeIcon icon={faFileCsv} className='fa-2xl'/> certificate :</span>
            <span className='data'>{item.certificate}</span>
         </p>) }

         <p className='info my-2'>
         <span className='me-2'><FontAwesomeIcon icon={faLocationDot} className='fa-2xl'/> location :</span>
            <span className='data'>{item.location}</span>
         </p>
          {item.hired ? (
               <p className='info my-2'>
               <span className='me-2'><FontAwesomeIcon icon={faBriefcase} className='fa-2xl'/> might get hired :</span>
               <span className='data'> yes</span>
            </p>
          ) : (
            item.opp_experise && (<p className='info my-2'>
            <span className='me-2'><FontAwesomeIcon icon={faBriefcase} className='fa-2xl'/> experise :</span>
            <span className='data'> yes</span>
         </p>))
         }
         <p className='info my-2'> 
         <span className='me-2'><FontAwesomeIcon icon={faDollarSign} className='fa-2xl'/> paid :</span>
            <span className='data'>{item.paid} sdg / H</span>
         </p>

         <p className='info my-2'> 
         <span className='me-2'><FontAwesomeIcon icon={faClock} className='fa-2xl'/> duration :</span>
            <span className='data'>{item.duration}</span>
         </p>
         </div>
         
         
         <div className=''>
            <div>
               <h4 className='data text-capitalize fw-bold'> {item.hired ? "responsibilities" : "i'm looking for help with"}</h4>
               <ul>
                  {item.responsibilities.map((q, i) => <li  key={i}>{q}</li>)}
               </ul>
            </div>
           
            <div>
               <h4 className='data text-capitalize fw-bold'>requirements</h4>
               <ul>
                  {item.requirements.map((q, i) => <li  key={i}>{q}</li>)}
               </ul>
            </div>
           
            <div>
               <h4 className='data text-capitalize fw-bold'> {item.hired ? "expected outcome" : "i have a background about"}</h4>
               <ul>
                  {item.expected_outcome.map((q, i) => <li  key={i}>{q}</li>)}
               </ul>
            </div>
            
         </div>
     

    </div>
  )
}

export default Opp