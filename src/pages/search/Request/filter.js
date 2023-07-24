import React from 'react';
import '../style.css'
import { Link } from 'react-router-dom';
const filterArr = [
    {
        id: 1,
        name: "Belal Swani",
        Duration: 2,
        Paid: true,
        isAvailabale: true,
        exprince: "none",
        location: "giza"
    },
    {
        id: 2,
        name: "Annette Black",
        Duration: 4,
        Paid: true,
        isAvailabale: false,
        exprince: "none",
        location: "cairo"
    },
    {
        id: 3,
        name: "Ralph Edwards",
        Duration: 6,
        Paid: false,
        isAvailabale: true,
        exprince: "none",
        location: "cairo"
    },
    {
        id: 4,
        name: "Savannah Nguyen",
        Duration: 1,
        Paid: true,
        isAvailabale: true,
        exprince: "none",
        location: "alex"
    },
    {
        id: 5,
        name: "Denis Ramsey",
        Duration: 3,
        Paid: false,
        isAvailabale: true,
        exprince: "none",
        location: "giza"
    },
    {
        id: 6,
        name: "Den Mohi",
        Duration: 7,
        Paid: true,
        isAvailabale: true,
        exprince: "none",
        location: "alex"
    },
    {
        id: 7,
        name: "Sam Sart",
        Duration: 8,
        Paid: true,
        isAvailabale: true,
        exprince: "none",
        location: "cairo"
    }
]
const RequestsFilter = (props,className) => {
    let filterProductList = filterArr.filter((mentee) => {
        let x;
        if (props.Paid && props.Availlable) {
            x = mentee.Paid && mentee.isAvailabale
        }
        else if (props.Paid || props.Availlable) {
            if (props.Paid) {
                x = mentee.Paid
            }
            else if (props.Availlable) {
                x = mentee.isAvailabale
            }
        }
        else {
            x = mentee;
        }
        return x && mentee.location === props.locvalue && (mentee.Duration - 1 <= props.maxValue && mentee.Duration - 1 >= props.minValue);
    })
    return (
        <>
            {
                filterProductList.map((filterOne) => {
                    return <div key={filterOne.id} className='col-12 pt-4'  >
                        <div className='rounded p-4' style={{ backgroundColor: "#e6f2f2" }}>
                            <div className='d-flex flex-column  flex-md-row justify justify-content-between '>
                                <div className='info ' style={{ flexBasis: "50%" }}>
                                    <h3 className=' fw-bold h5 text-sec-color moblie-font-req'>Front end development</h3>
                                    <p className='small fw-bold  '>{filterOne.name} <span className='text-sec-color w-50'> is looking for a mentor</span></p>
                                    <p className='small lh-sm  mt-4 mb-md-3 mb-1'>
                                        i'm a recent computer science graduate from khartom university , intrested in front end development and Ui / UX looking for a mentor to guide me through becoming a proficional fornt end developer
                                    </p>
                                    <p className='fw-bold small'>...Read more</p>
                                </div>
                                <div className='req flex-column-reverse d-flex flex-md-column justify-content-between' style={{ flexBasis: "50%" }}>
                                    <div className='text-end moblie-font-req'>
                                        <Link to="/reqShowpage">  <button className='me-2 custom-padding text-respon text-white bg-main-color d-inline-block border-0 small custom-padding rounded-pill'>View details</button>
                                            <button className=' bg-main-color text-white  text-respon custom-padding small d-inline-block border-0  mt-1  rounded-pill'>Mentor</button></Link>
                                    </div>
                                    <div className='d-flex justify-content-around mb-4 moblie-font-req mt-4 mt-md-0'>
                                        <div >
                                            <p><span className='text-sec-color fw-bold'>Duration</span> : {filterOne.Duration} Month</p>
                                            <p><span className='text-sec-color fw-bold'>Looking for a job: </span> {filterOne.isAvailabale ? "yes" : "no"}</p>
                                        </div>
                                        <div className=''>
                                            <p> <span className='text-sec-color fw-bold'>Paid</span>: {filterOne.Paid ? "yes" : "no"}    </p>
                                            <p><span className='text-sec-color fw-bold'>Experince</span> : {filterOne.exprince}    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </>);
}

export default RequestsFilter;