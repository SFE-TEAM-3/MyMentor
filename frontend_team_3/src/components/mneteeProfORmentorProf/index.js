import React, { useState } from 'react'
import './style.css'
import Mentor from '../../pages/menteeProfile/index';
import Mentee from '../../pages/mentorProfile/index';

const Wizard = () => {
  const options = [
    {
      label: "Mentor",
      value: "Mentor",
    },
    {
      label: "Mentee",
      value: "Mentee",
    },
  ];
  const [choose, setChoose] = useState("")
  if (choose === "Mentee") {
    return (
      <Mentee options={options} choose={choose} setChoose={setChoose} />
    );

  } else {
    return (
      <Mentor options={options} choose={choose} setChoose={setChoose} />
    );
  };
}

export default Wizard