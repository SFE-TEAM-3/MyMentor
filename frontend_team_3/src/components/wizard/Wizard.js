import React, { useState } from 'react'
import './wizard.css';
import Mentor from './mentor';


import  Mentee  from './mentee';

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
       if (choose === "Mentee"){
          return(
            <Mentee options={options} choose={choose} setChoose={setChoose}/>
          );
        
        }else{
        return(
          <Mentor options={options} choose={choose} setChoose={setChoose}/>
        );
       };
    
}

export default Wizard