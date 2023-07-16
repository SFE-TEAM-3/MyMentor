import React from 'react';
const filterArr = [
    {
        id:1,
        name:"Belal Swani",
        Duration : 2,
        Paid : true,
        isAvailabale : true,
        exprince : "none",
        location : "giza"
    },
    {
        id:2,
        name:"Annette Black",
        Duration : 4,
        Paid : true,
        isAvailabale : false,
        exprince : "none",
        location : "cairo"
    },
]

const RequestsFilter = () => {
    let filterProductList = filterArr.filter((mentee)=>{
        return   mentee.Duration  && mentee.Paid   ;
    })
    return ( 
    <>
    {
          filterProductList.map((filterOne)=>{
             return <div key={filterOne.id}  className='col-md-10 col-12 pt-4'  >
             <div className='rounded p-4' style={{backgroundColor:"#e6f2f2"}}>
                     <div className='d-flex flex-column  flex-md-row justify justify-content-between '>
                         <div className='info ' style={{flexBasis:"50%"}}>
                             <h3 className=' fw-bold h5 text-sec-color moblie-font-req'>Front end development</h3>
                             <p className='small fw-bold  '>{filterOne.name} <span className='text-sec-color w-50'> is looking for a mentor</span></p>
                             <p className='small lh-sm  mt-4 mb-md-3 mb-1'>
                                 i'm a recent computer science graduate from khartom university , intrested in front end development and Ui / UX looking for a mentor to guide me through becoming a proficional fornt end developer
                             </p>
                             <p className='fw-bold small'>...Read more</p>
                         </div>
                         <div className='req flex-column-reverse d-flex flex-md-column justify-content-between' style={{flexBasis:"50%"}}>
                             <div className='text-end moblie-font-req'>
                                 <button className='me-2 custom-padding text-respon text-white bg-main-color d-inline-block border-0 small custom-padding rounded-pill'>View details</button>
                                 <button className=' bg-main-color text-white  text-respon custom-padding small d-inline-block border-0  mt-1  rounded-pill'>Mentor</button>
                             </div>
                             <div className='d-flex justify-content-around mb-4 moblie-font-req mt-4 mt-md-0'> 
                                 <div >
                                     <p><span className='text-sec-color fw-bold'>Duration</span> : {filterOne.Duration} Month</p>
                                     <p><span className='text-sec-color fw-bold'>Looking for a job: </span> {filterOne.isAvailabale?"yes":"no"}</p>
                                 </div>
                                 <div className=''>
                                 <p> <span className='text-sec-color fw-bold'>Paid</span>: {filterOne.Paid ? "yes": "no"}    </p>
                                     <p><span className='text-sec-color fw-bold'>Experince</span> : {filterOne.exprince}    </p>
                                 </div>
                             </div>
                         </div>
                     </div>
             </div>
         </div>
    })
   }
    </> );
}
 
export default RequestsFilter;