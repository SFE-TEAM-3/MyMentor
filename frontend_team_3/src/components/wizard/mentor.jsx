/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";

const Mentor = ({ options, choose, setChoose }) => {
  const [file, setFile] = useState(null);
  const [errors, setErros] = useState({
    skills: false,
    location: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFocusInput = (e) => {
    const { name } = e.target;
    setErros((prev) => ({ ...prev, [name]: false }));
  };

  const handleBlurInput = (e) => {
    const { name } = e.target;
    setErros((prev) => ({
      ...prev,
      [name]: e.target.value.trim().length === 0,
    }));
  };

  const handleChange = (e) => {
    setChoose(e.target.value);
    console.log(choose);
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  return (
    <div>
      <div className="page-content">
        <div className="content">
          <div className="head">
            <h2 className="head__title">Profile information</h2>
            <p>Help us by answering questions to get you started</p>
          </div>
          <div className="grid-row">
            <div className="p-3 draft draft-order1">
              <h4 className="title">I'm looking for a</h4>
              <div className="down-arrow">
                <BiSolidDownArrow />
              </div>

              <select
                className="data"
                id="products"
                placeholder="select type"
                value={choose}
                onChange={handleChange}
                style={{background:'transparent'}}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="p-3 draft  draft-order2">
              <h4 className="title">My designation is</h4>
              <div className="down-arrow">
                <BiSolidDownArrow />
              </div>

              <select className="data" placeholder="select type" style={{background:'transparent'}}>
                <option className="choose2">Computer scince</option>
                <option className="choose1">Engineering</option>
                <option className="choose2">Artificial Intelligence</option>
                <option className="choose2">Computer programming</option>
              </select>
            </div>
            <div className="tempalte draft-order3">
              <label htmlFor="upload-file" type="button" className="upload">
                Upload resume
              </label>
              <input
                type="file"
                id="upload-file"
                accept=".pdf"
                onChange={selectFile}
              />
              <div className="d-flex justify-content-between">
                {file && (
                  <>
                    <p className="file-name">{file.name}</p>
                    <button
                      type="button"
                      className="btn btn-sm text-sm-start text-danger"
                      onClick={() => setFile(null)}
                    >
                      <GiCancel />
                    </button>
                  </>
                )}
              </div>
              <p className="explanation">
                Uploading your resume is not a must, but it helps those who are
                looking for specific qualification
              </p>
            </div>
            <div className="p-3 draft grid-draft draft-order4">
              <label className="hire">
                <h4 className="title-text">Available for hiring</h4>
                <input className="data check" type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="p-3 draft draft-order5">
              <input
                 className={`data ${errors.skills ? "input-error" : ""}`}
                 name="skills"
                 type="text"
                 onFocus={handleFocusInput}
                 onBlur={handleBlurInput}
                 placeholder={errors.skills ? "Input text" : "Skills"}
              />
               {errors.skills && (
                  <div className="input-error-icon">
                    <BiError />
                  </div>
                )}
            </div>

            <div className="p-3 draft draft-order6">
              <input
                className={`data ${errors.location ? "input-error" : ""}`}
                name="location"
                type="text"
                onFocus={handleFocusInput}
                onBlur={handleBlurInput}
                placeholder={errors.location ? "Input text" : "Location"}
              />
               {errors.location && (
                  <div className="input-error-icon">
                    <BiError />
                  </div>
                )}
            </div>
            <div className="handle"></div>
            <div className="button1 end">
              <Link to='/'>
              <button type="button" className="submit" onClick={handleSubmit}>
                Submit
              </button>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
