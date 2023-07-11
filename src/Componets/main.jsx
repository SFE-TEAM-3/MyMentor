import React, { useState } from 'react';
import logo from "../images/logo.png"
const Main = () => {
    const [toogleBtn,settoogleBtn] = useState(false)
    function toogle(){
        settoogleBtn((toogleBtn)=> !toogleBtn)
    }
    return ( 
        <>
        <div className='main py-4'>
            <div className='container'>
                {/* Logo row */}
                <div className='row'>
                    <div className='col-6'>
                       <img src={logo} style={{height:"44px"}} alt="Logo" />
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <div className= {toogleBtn ? "switch position-relative rounded-pill overflow-hidden bg-info":"switch position-relative rounded-pill overflow-hidden  bg-grayColor "}>
                            <span className={toogleBtn ? " position-absolute top-0 end-0 rounded-circle bg-secondaryColor ":" position-absolute top-0 start-0 rounded-circle bg-secondaryColor"}onClick={toogle}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Main;