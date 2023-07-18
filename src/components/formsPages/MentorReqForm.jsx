import React, { useState } from "react";
import "./mentorReq.css";
import { AiFillPlusSquare } from "react-icons/ai";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

const MentorReqForm = ({ setCount }) => {
  const [paidChecked, setPaidChecked] = useState(false);
  const [helpWithCount, setHelpWithCount] = useState(0);
  const [requirementsCount, setRequirementsCount] = useState(0);
  const [backgroundCount, setBackgroundCount] = useState(0);

  return (
    <>
      <div className="mentoring-section">
        <div className="left-col">
          <div
            className="left-content d-flex flex-column"
            style={{ gap: "5px",
            marginTop: '37%'}}
          >
            <h5>View Mentoring Opportunity</h5>
            <h5>Settings</h5>
            <h5>Terms and Privacy</h5>
            <div>
              <h5 className="d-inline-block mt-4">Post a new opportunity</h5>
              <button
                className="btn"
                style={{ color: "#007580" }}
                onClick={() => setCount((prev) => prev + 1)}
              >
                <AiFillPlusSquare />
              </button>
            </div>
          </div>
        </div>
        <div className="right-col">
          <div className="right-content-side">
            <div className="form-title23">
              <h5>Mentoring request</h5>
            </div>
          </div>
          <div className="main-content">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="main-data">
                <label htmlFor="request-title" className="label-title ">
                  Mentoring Request Title
                </label>
                <input
                  id="request-title"
                  type="text"
                  className="input-data first-input"
                  placeholder="example"
                />
              </div>
              <div className="main-data">
                <label htmlFor="request-description" className="label-title">
                  Request Description
                </label>
                <input
                  id="request-description"
                  type="text"
                  className="input-data"
                  placeholder="example"
                />
              </div>
              <div className="select-diagram">
                <div className="main-data-select">
                  <label
                    htmlFor="select-data1"
                    className="label-title name-input"
                  >
                    Location
                  </label>
                  <select id="select-data" className="input-data">
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                  </select>
                </div>
                <div className="main-data-select">
                  <label htmlFor="select-data2" className="label-title">
                    Duration
                  </label>
                  <select id="select-data" className="input-data">
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="9">9 months</option>
                    <option value="12">12 months</option>
                  </select>
                </div>
                <div className="main-data-select">
                  <label
                    htmlFor="select-data3"
                    className="label-title name-input"
                  >
                    Experince
                  </label>
                  <select id="select-data" className="input-data">
                    <option value="None">None</option>
                    <option value="with">with</option>
                  </select>
                </div>
              </div>
              <div className="select-check">
                <div className="checked-list">
                  <div className="check">
                    <label
                      htmlFor="input-radio"
                      className="label-title checked-input name-input"
                    >
                      <span
                        className="me-2"
                        onClick={() => setPaidChecked((prev) => !prev)}
                      >
                        Paid
                      </span>
                      <button
                        type="button"
                        className="btn"
                        style={{ padding: 0, color: "#fed049" }}
                        onClick={() => setPaidChecked((prev) => !prev)}
                      >
                        {paidChecked ? (
                          <MdRadioButtonUnchecked />
                        ) : (
                          <MdRadioButtonChecked />
                        )}
                      </button>
                    </label>
                  </div>
                </div>

                <div className="main-data">
                  <label htmlFor="amount" className="label-title sec-input">
                    Amount
                  </label>
                  <input
                    id="amount"
                    type="text"
                    className="input-data"
                    placeholder="example"
                  />
                </div>
                <div className="main-data align-items-center">
                  <label
                    htmlFor="select-data4"
                    className="label-title sec-input"
                  >
                    Currency
                  </label>
                  <select id="select-data" className="input-data">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
              </div>

              <div className="main-data">
                <label htmlFor="help-with" className="label-title">
                  Looking for help with
                </label>
                <div
                  className="d-flex"
                  style={{ gap: "6px", alignItems: "flex-start" }}
                >
                  <input
                    id="help-with"
                    type="text"
                    className="input-data third-input"
                    placeholder="example"
                  />
                  <button
                    className="btn"
                    style={{ color: "#007580", padding: 0 }}
                    type="button"
                    onClick={() => setHelpWithCount((prev) => prev + 1)}
                  >
                    <AiFillPlusSquare />
                  </button>
                </div>
                <div>
                  {Array.from({ length: helpWithCount }, (_, i) => (
                    <div div key={i} className="d-flex flex-column">
                      <label htmlFor="help-with" className="label-title">
                        Looking for help with
                      </label>
                      <input
                        id="help-with"
                        type="text"
                        className="input-data third-input"
                        placeholder="example"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="main-data">
                <label htmlFor="requirements" className="label-title">
                  Requirements
                </label>
                <div
                  className="d-flex"
                  style={{ gap: "6px", alignItems: "flex-start" }}
                >
                  <input
                    id="requirements"
                    type="text"
                    className="input-data third-input"
                    placeholder="example"
                  />
                  <button
                    className="btn"
                    style={{ color: "#007580", padding: 0 }}
                    type="button"
                    onClick={() => setRequirementsCount((prev) => prev + 1)}
                  >
                    <AiFillPlusSquare />
                  </button>
                </div>
                <div>
                  {Array.from({ length: requirementsCount }, (_, i) => (
                    <div div key={i} className="d-flex flex-column">
                      <label htmlFor="requirements" className="label-title">
                        Requirements
                      </label>
                      <input
                        id="requirements"
                        type="text"
                        className="input-data third-input"
                        placeholder="example"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="main-data">
                <label htmlFor="background" className="label-title">
                  I have background
                </label>
                <div
                  className="d-flex"
                  style={{ gap: "6px", alignItems: "flex-start" }}
                >
                  <input
                    id="background"
                    type="text"
                    className="input-data third-input"
                    placeholder="example"
                  />
                  <button
                    className="btn"
                    style={{ color: "#007580", padding: 0 }}
                    type="button"
                    onClick={() => setBackgroundCount((prev) => prev + 1)}
                  >
                    <AiFillPlusSquare />
                  </button>
                </div>
                <div>
                  {Array.from({ length: backgroundCount }, (_, i) => (
                    <div div key={i} className="d-flex flex-column">
                      <label htmlFor="background" className="label-title">
                        I have background
                      </label>
                      <input
                        id="background"
                        type="text"
                        className="input-data third-input"
                        placeholder="example"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </form>
            <div className="finish-button">
              <button className="publish-btn" type="submit">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MentorReqForm;
