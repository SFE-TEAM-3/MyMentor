import React from "react";
import "./MentorOppForm.css";
import { FaPlusSquare } from "react-icons/fa";
const MentoringOpportunityForm = () => {
  return (
    <div className="parent">
      <div className="container">
        <div className="row">
          <div className="div1 d-none d-lg-block col-lg-2">
            <span>View Mentoring Opportunity</span>
            <span>Settings</span>
            <span>Terms and Privacy</span>
            <br />
            <br />
            <span>
              Post a new opportunity &nbsp;
              <a href="#">
                {/* <i className="fas fa-plus-square"></i> */}
                <FaPlusSquare className="add-opp" />
              </a>
            </span>
          </div>
          <div className="div2 col-lg-10">
            <section className="mentoring-opportunity">
              <div className="mentoring-opportunity-container">
                <div className="mentoring-opportunity-div1">
                  <p style={{fontSize:'19px',padding:'5px'}}>Mentoring opportunity</p>
                </div>
                <form className="mentoring-opportunity-form w-md-100">
                  <label className="mentor-oppor-label">
                    Mentoring opportunity title
                  </label>
                  <input
                    className="mentor-oppor-input mentor-input1 border-bottom border-warning-subtle border-2"
                    type="text"
                    placeholder="example"
                  />
                  <label className="mentor-oppor-label d-none d-lg-block">
                    Opportunity Description
                  </label>
                  <textarea
                    className="mentor-oppor-input border-bottom border-warning-subtle border-2 d-none d-lg-block"
                    cols="88"
                    rows="1"
                    placeholder="example"
                  ></textarea>
                  <label className="mentor-oppor-label1">Certificate</label>
                  <select className="mentor-oppor-input1 mentor-select1 border-bottom border-warning-subtle border-2">
                    <option>Awarded</option>
                    <option>Awarded</option>
                    <option>Awarded</option>
                  </select>
                  <label className="mentor-oppor-label1">Duration</label>
                  <select className="mentor-oppor-input1 mentor-select2 border-bottom border-warning-subtle border-2">
                    <option>3 months</option>
                    <option>2 months</option>
                    <option>1 months</option>
                  </select>
                  <br />
                  <label className="mentor-oppor-label1">Location &nbsp;</label>
                  <select className="mentor-oppor-input1 mentor-select3 border-bottom border-warning-subtle border-2">
                    <option>Remote</option>
                    <option>Remote</option>
                    <option>Remote</option>
                  </select>
                  <span className="mentor-span0">Might get hired</span>
                  {/* <input
                    className="mentor-imputa border-bottom border-warning-subtle border-2 mgh-inp"
                    type="checkbox"
                  /> */}
                  <input
                    class="form-check-input mgh-inp mgh-inp1"
                    type="checkbox"
                    value=""
                  ></input>
                  <span className="checkboxtexr"></span>
                  <br />
                  {/* <span className="mentor-oppor-span">Amount</span> */}
                  {/* <span className="mentor-oppor-span2">Currency</span> */}
                  <br />
                  <label className="mentor-oppor-label1">Paid</label>
                  {/* <input
                    className="mentor-imputa border-bottom border-warning-subtle border-2 mgh-inp"
                    type="checkbox"
                  /> */}
                  <input
                    class="form-check-input mgh-inp mgh-inp2"
                    type="checkbox"
                    value=""
                  ></input>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="d-inline-block par-opp">
                    <label className="mentor-oppor-span lab-1">Amount</label>
                    <input
                      className="mentor-oppor-input1 mentor-input2 border-bottom border-warning-subtle border-2"
                      type="text"
                      placeholder="example"
                    />
                  </div>
                  <div className="d-inline-block par-opp">
                    <label className="mentor-oppor-span">Currency</label>
                    <select className="mentor-oppor-input1 mentor-select4 border-bottom border-warning-subtle border-2">
                      <option>USD</option>
                      <option>POUND</option>
                      <option>KWD</option>
                    </select>
                  </div>
                  <label className="mentor-oppor-label">Responsibilities</label>
                  <input
                    className="mentor-oppor-input1 mentor-input4 border-bottom border-warning-subtle border-2"
                    type="text"
                    placeholder="example"
                  />
                  <a href="#">
                    {/* <i className="fas fa-plus-square"></i> */}
                    <FaPlusSquare className="add-opp" />
                  </a>
                  <label className="mentor-oppor-label">Requirements</label>
                  <input
                    className="mentor-oppor-input1 mentor-input5 border-bottom border-warning-subtle border-2"
                    type="text"
                    placeholder="example"
                  />
                  <a href="#">
                    {/* <i className="fas fa-plus-square"></i> */}
                    <FaPlusSquare className="add-opp" />
                  </a>
                  <label className="mentor-oppor-label">Expected Outcome</label>
                  <input
                    className="mentor-oppor-input1 mentor-input6 border-bottom border-warning-subtle border-2"
                    type="text"
                    placeholder="example"
                  />
                  <a href="#">
                    {/* <i className="fas fa-plus-square"></i> */}
                    <FaPlusSquare className="add-opp" />
                  </a>
                  <div className="sub-btn">
                    <input
                      className="mentor-submit"
                      type="submit"
                      value="Publish"
                    />
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringOpportunityForm;
