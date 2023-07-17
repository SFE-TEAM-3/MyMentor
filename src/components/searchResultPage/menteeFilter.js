import React from 'react';
import './searchPage.css'
import img0 from "../../assets/images/photo-1537511446984-935f663eb1f4.jpg"
import img1 from "../../assets/images/istockphoto-1307615661-612x612.jpg"
import img2 from "../../assets/images/man-gf4e58e0c3_1280.jpg"
import img3 from "../../assets/images/Companies-Hiring-for-Remote-Work-From-Home-Jobs-Right-Now-1-1024x512.jpeg"
const MenteeArr = [
    {
        id:1,
        name:"Jerome Bell",
        title :"Senior Manger - Solutions Engineering",
        skills :["html","css","javascript"],
        imgSrc:img0,
        isAvailabale : true,
        location : "giza"
    },
    {
        id:2,
        name:"Annette Black",
        title :"Marketing Manager",
        skills :["html","css","bootstrap","react"],
        imgSrc:img1,
        isAvailabale : true,
        location : "cairo"
    },
    {
        id:3,
        name:"Ralph Edwards",
        title :"Senior Software Engineer",
        skills :["html","css","tailwind","bootstrap"],
        imgSrc:img2,
        isAvailabale : false,
        location : "cairo"
    },
    {
        id:4,
        name:"Savannah Nguyen",
        title :"Lead Software Engineer - QA",
        skills :["html","css","bootstrap"],
        imgSrc:img3,
        isAvailabale : false,
        location : "alex"
    },
    {
        id:5,
        name:"Denis Ramsey",
        title :"Lead Software Engineer - QA",
        skills :["html","css","react"],
        imgSrc:img3,
        isAvailabale : false,
        location : "giza"
    },
    {
        id:6,
        name:"Den Mohi",
        title :"Lead Software Engineer - QA",
        skills :["html","css","react"],
        imgSrc:img3,
        isAvailabale : true,
        location : "alex"
    },
    {
        id:7,
        name:"Sam Sart",
        title :"Lead Software Engineer - QA",
        skills :["html","css","angular"],
        imgSrc:img3,
        isAvailabale : true,
        location : "cairo"
    }
]
const FilterMentee = (props) => {
    let filterProductList = MenteeArr.filter((mentee)=>{
        let x ;
        if(props.Availlable){
            x=mentee.isAvailabale;
        }
        else{
            x = mentee;
        }
        return x && mentee.location === props.locvalue && (props.skills.length ? props.skills.every((item)=>mentee.skills.includes(item)):[]) ;
    })
    return ( 
        <>
        {
          filterProductList.map((menteeOne)=>{
            return <div className='col-md-4 col-12 pt-5 pt-md-4' key={menteeOne.id}>
                {/* Mentor Persons */}
                <div className={`mentorPersons menteePersons${menteeOne.id} position-relative`}>
                </div>
                {/* Mentor Info */}
                <div>
                    <p className='my-2 fw-bold'>{menteeOne.name}</p>
                    <p className='text-muted text-small'>{menteeOne.title}</p>
                    <p  className='mt-4'>{menteeOne.skills.map((item)=>{
                        return <span className='me-1   text-white rounded p-1 bg-secondaryColor'>{item}</span>
                    })}</p>
                </div>
            </div>
    })
   }
        </>
     );
}
 
export default FilterMentee ;