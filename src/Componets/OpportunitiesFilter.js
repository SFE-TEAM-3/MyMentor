import React from 'react';
const OpportunitiesArr = [
    {
        id:1,
        name:"Belal Swani",
        info :["Certificate","Remote","Open Duration","Paid","Might get hired"],
        isCertifiacte:true,
        Paid:true,
        remote:true,
        openDuartion:true,
        Duration:3,
        isAvailabale : true,
        location : "giza"
    },
    {
        id:2,
        name:"Annette Black",
        info :["Certificate","Remote","Open Duration","Paid","Might get hired"],
        isCertifiacte:true,
        Paid:true,
        remote:true,
        openDuartion:true,
        Duration:3,
        isAvailabale : true,
        location : "cairo"
    },
    {
        id:3,
        name:"Ralph Edwards",
        info :["Certificate","Remote","Open Duration","Paid","Might get hired"],
        isCertifiacte:true,
        Paid:false,
        remote:false,
        openDuartion:true,
        Duration:3,
        isAvailabale : false,
        location : "cairo"
    },
    {
        id:4,
        name:"Savannah Nguyen",
        info :["Certificate","Remote","Open Duration","Paid","Might get hired"],
        isCertifiacte:true,
        Paid:true,
        remote:true,
        openDuartion:false,
        Duration:3,
        isAvailabale : false,
        location : "alex"
    },
    {
        id:5,
        name:"Denis Ramsey",
        info :["Certificate","Remote","Open Duration","Paid","Might get hired"],
        isCertifiacte:false,
        Paid:true,
        remote:false,
        openDuartion:false,
        Duration:3,
        isAvailabale : false,
        location : "giza"
    },
    {
        id:6,
        name:"Den Mohi",
        info :["Certificate","Remote","Open Duration","Paid","Might get hired"],
        isCertifiacte:true,
        Paid:true,
        remote:false,
        openDuartion:false,
        Duration:3,
        isAvailabale : true,
        location : "alex"
    },
    {
        id:7,
        name:"Sam Sart",
        info :["Certificate","Remote","Open Duration","Paid","Might get hired"],
        isCertifiacte:false,
        Paid:false,
        remote:true,
        openDuartion:false,
        Duration:3,
        isAvailabale : true,
        location : "cairo"
    }
]
const OpportunitiesFilter = (props) => {
    let filterProductList = OpportunitiesArr.filter((mentee)=>{
        let x ;
        if(props.Certificate && props.Paid && props.Availlable){
            x = mentee.isCertifiacte && mentee.Paid && mentee.isAvailabale
        }
        else if(props.Certificate || props.Paid || props.Availlable){
            if(props.Certificate){
                x = mentee.isCertifiacte
            }
            if(props.Paid){
                x = mentee.Paid
            }
            if(props.Availlable){
                x = mentee.isAvailabale
            }
        }
        else{
            x = mentee
        }
        return x && (mentee.remote ? mentee.remote : props.locvalue === mentee.location ) && (mentee.openDuartion ? mentee.openDuartion : mentee.Duration - 1 <= props.maxValue  && mentee.Duration - 1 >= props.minValue  ) && (props.Certifiacte ? mentee.isCertifiacte :true)
    })
    console.log(filterProductList);
    return ( 
        <>
        {
          filterProductList.map((OpportOne)=>{
             return <div className='col-md-6 col-12 pt-4'  key={OpportOne.id}>
            <div className='border   rounded-3 p-3' style={{borderColor:"#c3c3c3"}}>
                    <div className='d-flex justify justify-content-between '>
                        <div className='info'>
                            <h3 className='small fw-bold moblie-font' >Website UI design implementaion</h3>
                            <p className='small text-muted moblie-font' >Get Mentored by : <span className='fw-bold'>{OpportOne.name}</span></p>
                        </div>
                        <div className='req '>
                                <button className=' custom-padding text-white text-respon  bg-main-color d-block border-0 small custom-padding rounded-pill'>Request</button>
                                <button className='text-white text-respon bg-main-color  small d-block border-0 w-100 mt-1  rounded-pill'>View</button>
                        </div>
                    </div>
                    <div className='skills mt-3'>
                {OpportOne.isCertifiacte ? <span  className='me-1 me-md-2 mt-2 d-inline-block moblie-font py-1 small px-3 rounded-pill bg-secondaryColor text-white'>Certifiacte </span> :<span  className='me-1 me-md-2 mt-2 d-inline-block moblie-font py-1 small px-3 rounded-pill bg-secondaryColor text-white'>Not Certifiacte </span>}
                {OpportOne.remote ? <span  className='me-1 me-md-2 mt-2 d-inline-block moblie-font py-1 small px-3 rounded-pill bg-secondaryColor text-white'>Remote</span> :<span  className='me-1 me-md-2 mt-2 d-inline-block moblie-font py-1 small px-3 rounded-pill bg-secondaryColor text-white'>{OpportOne.location}</span>}
                {OpportOne.openDuartion ? <span  className='me-1 me-md-2 mt-2 d-inline-block moblie-font py-1 small px-3 rounded-pill bg-secondaryColor text-white'>open Duartion</span> : <span  className='me-1 me-md-2 mt-2 d-inline-block moblie-font py-1 small px-3 rounded-pill bg-secondaryColor text-white'>{OpportOne.Duration} Months</span>}
                {OpportOne.Paid ? <span  className='me-1 me-md-2 mt-2 d-inline-block moblie-font py-1 small px-3 rounded-pill bg-secondaryColor text-white'>Paid</span> :<span  className='me-1 me-md-2 mt-2 d-inline-block moblie-font py-1 small px-3 rounded-pill bg-secondaryColor text-white'>Not Paid</span>}
                {OpportOne.isAvailabale ? <span  className='me-1 me-md-2 mt-2 d-inline-block moblie-font py-1 small px-3 rounded-pill bg-secondaryColor text-white'>Might get hired</span> :<span  className='me-1 me-md-2 mt-2 d-inline-block moblie-font py-1 small px-3 rounded-pill bg-secondaryColor text-white'>Not Availlable For Hiring</span>}
                    
                    </div>
                    <div className='mt-4 small'>
                        <p className=''>looking for someone who's intrested in project managment related tasks</p>
                        <p className=''>and who's eagre to gain knowledge and have fun during the experince !</p>
                    </div>
            </div>
        </div>
    })
   }
        </>
     );
}
 
export default OpportunitiesFilter;