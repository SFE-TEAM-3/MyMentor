import React from 'react';
import './searchPage.css'
import img0 from "../../assets/images/man-gf3106a693_1280.jpg"
import img1 from "../../assets/images/computer-g8dee30bb2_1280.jpg"
import img2 from "../../assets/images/cellular-g87a5ca821_1280.jpg"
import {BiSolidStar} from "react-icons/bi"
const MentorsArr = [
    {
        id:1,
        name:"Ralph Edwards",
        title :"Full Stack Developer",
        rating :4.5,
        reveiew:"289",
        imgSrc:img0,
        location : "giza"
    },
    {
        id:2,
        name:"Kathryn Murphy",
        title :"Front End Engineer",
        rating :4.8,
        reveiew:"781",
        imgSrc:img1,
        location : "cairo"
    },
    {
        id:3,
        name:"Bessie Cooper",
        title :"Backend Developer",
        rating :5,
        reveiew:"2.3k",
        imgSrc:img2,
        location : "alex"
    },
    {
        id:4,
        name:"Steve John",
        title :"Backend Developer",
        rating :4,
        reveiew:"1.3k",
        imgSrc:img2,
        location : "cairo"
    },
    {
        id:5,
        name:"Sara Hassn",
        title :"Front-end Developer",
        rating :4,
        reveiew:"2k",
        imgSrc:img2,
        location : "giza"
    },
    {
        id:6,
        name:"Mohamed Saleh",
        title :"Full Stack Developer",
        rating :4,
        reveiew:"500",
        imgSrc:img2,
        location : "alex"
    },
    {
        id:7,
        name:"Rehab Khaled",
        title :"Backend Developer",
        rating :3,
        reveiew:"100",
        imgSrc:img2,
        location : "cairo"
    }
]

const FilterMenotrs = (props) => {
    let filterProductList = MentorsArr.filter((mentor)=>{
                    let rating=mentor ;
                    props.arrValue.forEach((item,index)=>{
                   if(item){
                    if(index + 1 ===6){
                        rating = mentor 
                    }
                    else{
                        rating |= Math.ceil(mentor.rating) === index+1
                    }
                   }
                })
        return (rating )  && mentor.location === props.locvalue;
    })
    return ( 
        <>
   {
          filterProductList.map((mentorOne)=>{
            return <div className='col-md-4 col-12 pt-4' key={mentorOne.id}>
                {/* Mentor Persons */}
                <div className={`mentorPersons mentorPersons${mentorOne.id} position-relative`}>
                    <div className='bg-white d-inline-flex justify-content-center align-items-center rounded position-absolute bottom-0 start-0 ms-2 mb-2 p-1'>
                        <BiSolidStar className='text-main-color  text-small'/> 
                        <span className='fw-bold  text-small'>{mentorOne.rating}</span>
                        <span className='text-muted text-small '>({mentorOne.reveiew} reveiews)</span>
                    </div>
                </div>
                {/* Mentor Info */}
                <div>
                    <p className='my-2 fw-bold'>{mentorOne.name}</p>
                    <p className='text-muted text-small'>{mentorOne.title}</p>
                </div>
            </div>
    })
   }
        </>
     );
}
 
export default FilterMenotrs;