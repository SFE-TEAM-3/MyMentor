import React from 'react'

const ContactUs = () => {
  return (

    <section className="contact-us">
  {/* <!-- section title --> */}
  <div className="row mt-5">
    <div className="col-md-4 col-12 text-center " style={{marginTop:'150px'}}>
      <h2 style={{fontSize: '52px', fontWeight: '400'}}>Get in touch</h2>
      <p style={{fontSize: '23px' ,fontWeight: '400'}}>we'd love to hear from you</p>
    </div>
    {/* <!-- //////////////////////// -->
    <!-- contact form  --> */}
    <div className="col-md-1"></div>
    <div className="p-5  col-md-6 col-11 ml-md-5 m-auto  " style={{backgroundColor: '#FAFAFA'}}>
      <form className="p-3">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">First Name</label>
            <input type="text" className="form-control " id="inputEmail4"/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Last Name</label>
            <input type="text" className="form-control" id="inputPassword4"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Email</label>
          <input type="email" className="form-control" id="inputAddress"/>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Mobile Number</label>
          <input type="text" className="form-control" id="inputAddress2"/>
        </div>
        <div className="form-group" style={{position: 'relative'}}>
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea className="form-control message" id="exampleFormControlTextarea1" rows="3"></textarea>
          <div className="div-button">
            <button className="button"> Send <i className="fas fa-paper-plane"></i></button>
          </div>
        </div>
       </form> 
    </div>
    </div>
    {/* <!-- //////////////// --> */}
</section>

  )
}

export default ContactUs;