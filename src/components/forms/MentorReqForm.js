import React from 'react'

const MentorReqForm = () => {
  return (
    <section className="Mentoring-Request">
    {/* <!-- side-bar --> */}
    <div className="row  ml-md-3 " style={{marginTop:'160px'}}>
        <div className="col-md-2 col-12 side-bar" style={{paddingTop: '50px'}}>
            <p>View Mentoring Opportunity</p>
            <p>Settings</p>
            <p>Terms and Privacy</p>
            <p className="d-inline-block mt-4">Post a new opportunity</p>
            <i className="fas fa-plus-square plus-icon1"></i>
        </div>
    
      {/* <!-- //////////////////////// -->
      <!-- Mentoring request form  --> */}
      <div className=" col-md-9 col-11 ml-md-5 m-auto" style={{backgroundColor:'#FAFAFA'}}>
        <div className="form-title">
          <h5>Mentoring request</h5>
        </div>
        <form className="pl-2">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputEmail4" className="ml-md-3 ">Mentoring Request Title</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="exemple" />
                </div>

            
                <div className="form-group ">
                    <label for="inputAddress" className="ml-md-3 ">Request Description</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="exemple" />
                </div>
            </div>

          <div className="form-row row">
                <div className="form-group col-md-5 pl-md-4  ">
                    <label for="inputState" className="col-form-label mt-md-1 mr-md-4 ml-3  ">Location</label>
                    <div className="col-md-8">
                        <select id="inputState" className="form-control">
                        <option selected>Remote</option>
                        <option>Onsite</option>
                        </select>
                    </div>
                </div>
                
            <div className="form-group col-md-5">
              <label for="inputState" className="col-form-label mt-md-1 mr-md-2 ml-md-2 ml-3 ">Duration</label>
                <div className="col-md-8">
                    <select id="inputState" className="form-control">
                    <option selected>3 months </option>
                    <option>6 months</option>
                    <option>12 months</option>
                    </select>
                </div>
            </div>
        </div>
            <div className="form-row  ">
              <div className="form-group  col-md-5 row pl-md-4  ">
                    <label for="inputState" className="col-form-label mt-md-1 mr-md-4 ml-3 ">Experince</label>
                    <div className="col-md-8">
                        <select id="inputState" className="form-control exp">
                            <option selected>None</option>
                            <option>With</option>
                        </select>
                    </div>

              </div>
            </div>

              <div className="form-row">
                <div className="form-check " style={{margin: '40px 40px 0 0'}}>
                  <label className="form-check-label label-radio" for="exampleRadios1"
                    style={{marginBottom:'10px'}}>Paid</label>
                  <input className="form-check-input  " type="radio" name="exampleRadios" id="exampleRadios1"
                    value="option1" checked />
                </div>


                <div className="form-group col-md-5 ml-md-3 ml-2 mt-md-1">
                  <label for="inputCity">Amount</label>
                  <input type="text" className="form-control amount" id="inputCity" placeholder="exemple" />
                </div>

                <div className="form-group col-md-2 ml-2">
                  <label for="inputState">Currency</label>
                  <select id="inputState" className="form-control">
                    <option selected>USD</option>
                    <option>EUR</option>
                  </select>


                </div>
            </div>
                <div className="form-group col-md-8 col-11 ml-2 ">
                  <label for="inputEmail4" class="ml-md-3 ">Looking for help with</label>
                  <input type="text" class="form-control ml-md-2 " id="inputEmail4" placeholder="exemple" />
                </div>
                <i class="fas fa-plus-square plus-icon col-2"></i>
                <div class="form-group col-md-8 col-11 ml-2">
                  <label for="inputEmail4" class="ml-md-3 ">Requirements</label>
                  <input type="text" class="form-control ml-md-2 " id="inputEmail4" placeholder="exemple" />
                </div>
                <i class="fas fa-plus-square plus-icon col-2"></i>
                <div class="form-group col-md-8 col-11 ml-2 ">
                  <label for="inputEmail4" class="ml-md-3 ">I have background</label>
                  <input type="text" class="form-control ml-md-2" id="inputEmail4" placeholder="exemple" />
                </div>
                <i class="fas fa-plus-square plus-icon col-2"></i>
                <div class="div-button1">
                  <button class="button1">Publish</button>
                </div>
        </form>
        {/* <!-- //////////////// --> */}
      </div>
      </div>
  </section>
  )
}

export default MentorReqForm;