import React , {useState} from "react";
import "./MentorOppForm.css";
import { FaPlusSquare } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


const MentoringOpportunityForm = () => {
    
  const [inputFields1, setInputFields1] = useState([]);
  const [inputFields2, setInputFields2] = useState([]);
  const [inputFields3, setInputFields3] = useState([]);

  const handleAddInput1 = () => {
    setInputFields1([...inputFields1, ""]);
  };

  const handleAddInput2 = () => {
    setInputFields2([...inputFields2, ""]);
  };

  const handleAddInput3 = () => {
    setInputFields3([...inputFields3, ""]);
  };

  const handleDeleteInput1 = (index) => {
    const updatedFields = [...inputFields1];
    updatedFields.splice(index, 1);
    setInputFields1(updatedFields);
  };

  const handleDeleteInput2 = (index) => {
    const updatedFields = [...inputFields2];
    updatedFields.splice(index, 1);
    setInputFields2(updatedFields);
  };

  const handleDeleteInput3 = (index) => {
    const updatedFields = [...inputFields3];
    updatedFields.splice(index, 1);
    setInputFields3(updatedFields);
    };
    

  return (
    <div className="parent">
      <div className="container">
        <div className="row mt-4">
          <div className="div1 d-none d-lg-block col-lg-2 mt-4">
            <a href="#" > <span>View Mentoring Opportunity</span></a>
            <a href="#" > <span>Settings</span></a>
            <a href="#" > <span>Terms and Privacy</span></a>
            <br />
            <br />
            <a href="#" > <span>
              Post a new opportunity &nbsp;
              <a href="#">
                {/* <i className="fas fa-plus-square"></i> */}
                <FaPlusSquare className="add-opp" />
              </a> 
            </span></a>
          </div>
          <div className="div2 col-lg-10">
            <section className="mentoring-opportunity">
              <div className="mentoring-opportunity-container">
                <div className="mentoring-opportunity-div1">
                  <p style={{fontSize:'19px',padding:'5px'}}>Mentoring opportunity</p>
                </div>
                <form className="mentoring-opportunity-form w-md-100 mt-4 ">
                  <label className="mentor-oppor-label">
                    Mentoring opportunity title
                  </label>
                  <input
                    className="mentor-oppor-input mentor-input1 border-bottom border-warning-subtle border-2 border-22 color-bgd-223"
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
                  <select className="mentor-oppor-input1 mentor-select1 border-bottom border-warning-subtle border-2  border-22 color-bgd-223 mentor-oppor-input1-sizing">
                    <option>Awarded</option>
                    <option>Awarded</option>
                    <option>Awarded</option>
                  </select>
                  <label className="mentor-oppor-label1">Duration</label>
                  <select className="mentor-oppor-input1 mentor-select2 border-bottom border-warning-subtle border-2  border-22 color-bgd-223">
                    <option>3 months</option>
                    <option>2 months</option>
                    <option>1 months</option>
                  </select>
                  <br />
                  <label className="mentor-oppor-label1">Location &nbsp;</label>
                  <select className="mentor-oppor-input1 mentor-select3 border-bottom border-warning-subtle border-2  border-22 color-bgd-223">
                    <option>Remote</option>
                    <option>Remote</option>
                    <option>Remote</option>
                  </select>
                  <span className="mentor-span0 mentor-span0Color">Might get hired</span>
                  
                  <input
                    class="form-check-input mgh-inp mgh-inp1"
                    type="checkbox"
                    value=""
                  ></input>
                  <span className="checkboxtexr"></span>
                  <br />
                
                  <br />
                  <label className="mentor-oppor-label1 mentor-span0011">Paid</label>
               
                  <input
                    class="form-check-input mgh-inp mgh-inp2"
                    type="radio"
                    value=""
                  ></input>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="d-inline-block par-opp mentor-oppor-input1-sizing-amount ">
                    <label className="mentor-oppor-span lab-1  ">Amount</label>
                    <input
                      className="mentor-oppor-input1 mentor-input2 border-bottom border-warning-subtle border-2  border-22 "
                      type="text"
                      placeholder="example"
                    />
                  </div>
                  <div className="d-inline-block par-opp mb-2">
                    <label className="mentor-oppor-span">Currency</label>
                    <select className="mentor-oppor-input1 mentor-select4 border-bottom border-warning-subtle border-2 color-bgd-223 border-223">
                      <option>USD</option>
                      <option>POUND</option>
                      <option>KWD</option>
                    </select>
                  </div>
                  <label className="mentor-oppor-label  ">Responsibilities</label>
                  <input
                    className="mentor-oppor-input1 mentor-input4 border-bottom border-warning-subtle border-2 mt-0"
                    type="text"
                    placeholder="example"
                  />
              
                   
                    <FaPlusSquare className="add-opp add-opp-postin" onClick={handleAddInput1} />
                  
                  {inputFields1.map((input, index) => (
                    <div key={index} className="input-container">
                      <input
                        className="mentor-oppor-input1 mentor-input5 border-bottom border-warning-subtle border-2  mt-0"
                        type="text"
                        placeholder="example"
                      />
                      <FaTimes className="delete-icon add-opp-del add-opp-postin"onClick={() => handleDeleteInput1(index)}  />
                    </div>
                  ))}

                  <label className="mentor-oppor-label">Requirements</label>
                  <input
                    className="mentor-oppor-input1 mentor-input5 border-bottom border-warning-subtle border-2  mt-0"
                    type="text"
                    placeholder="example"
                  />
                  
                       
                          <FaPlusSquare className="add-opp add-opp-postin" onClick={handleAddInput2} />
                         
                      {inputFields2.map((input, index) => (
                          <div key={index} className="input-container">
                            <input
                              className="mentor-oppor-input1 mentor-input5 border-bottom border-warning-subtle border-2  mt-0"
                              type="text"
                              placeholder="example"
                         /> 
                                    
                            <FaTimes
                              className="delete-icon add-opp-del add-opp-postin"
                               onClick={() => handleDeleteInput2(index)}
                             />
                           
                       </div>
                       
                        ))}
                       
                  
                  <label className="mentor-oppor-label ">Expected Outcome</label>
                  <input
                    className="mentor-oppor-input1 mentor-input6 border-bottom border-warning-subtle border-2  mt-0"
                    type="text"
                    placeholder="example"
                  />
                  
                    <FaPlusSquare className="add-opp add-opp-postin "onClick={handleAddInput3} />
                  
                  {inputFields3.map((input, index) => (
                    <div key={index} className="input-container">
                      <input
                        className="mentor-oppor-input1 mentor-input5 border-bottom border-warning-subtle border-2  mt-0"
                        type="text"
                        placeholder="example"
                      />
                      <FaTimes className="delete-icon add-opp-del add-opp-postin"onClick={() => handleDeleteInput3(index)}  />
                    </div>
                  ))}

                  {/* <a href="#" onClick={handleAddInput}>
                    <FaPlusSquare className="add-opp add-opp-postin " />
                  </a>
                  {inputFields.map((input, index) => (
                    <div key={index} className="input-container">
                      <input
                        className="mentor-oppor-input1 mentor-input5 border-bottom border-warning-subtle border-2  mt-0"
                        type="text"
                        placeholder="example"
                      />
                      <FaTimes className="delete-icon add-opp-del add-opp-postin" onClick={() => handleDeleteInput(index)} />
                    </div>
                  ))} */}
             
                   {/* {inputFields3.map((input, index) => (
                    <div key={index} className="input-container">
                      <input
                        className="mentor-oppor-input1 mentor-input5 border-bottom border-warning-subtle border-2  mt-0"
                        type="text"
                        placeholder="example"
                      />
                      <FaTimes
                         className="delete-icon add-opp-del add-opp-postin"
                        onClick={() => handleDeleteInput3(index)}
                      />
                    </div>
                  ))}
                  <a href="#" onClick={handleAddInput3}>
                    <FaPlusSquare className="add-opp add-opp-postin " />
                  </a> */}
                 
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
