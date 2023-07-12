import {React, useState } from 'react';

import './App.css';
import Comments from "./Componants/Comments/Comments.jsx";
import RequestInfo from './Componants/RequestInfo/RequestInfo';
import SideNav from './Componants/SideNav/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Header from './Componants/Header/Header';
import Footer from './Componants/Footer/Footer';
import Comments2 from './Componants2/Comments2/Comments2';
import RequestMentor2 from './Componants2/RequestMentor2/RequestMentor2';
import PersonalInfo from './Componants2/PersonalInfo/PersonalInfo';



const commnts = {

  id: 1,
  items: [
    {
      id: 1111,
      name: "hello",
      items: [
        {
          id: 11112,
          name: "hello word",
          items: [
             {
          id: 111123,
          name: "hello word 123",
          items: [ ]
            }
          ]
        }
      ]
    },
    {
      id: 111144,
      name: "react js",
      items: [
        {
           id: 1111456,
            name: "js",
            items: [ ]
        }
      ]
    }
  ]
};



function App() {

      const [commentsData, setCommentsData] = useState(commnts);

  return (
  
    <div className="App">
      
      <div className='app2-container2'>   
        {/* <RequestMentor2 commnt={commentsData} /> */}
         <PersonalInfo/>
           
      </div> {/** end app2-container 2 */}
   
    </div>  /** end App */
  );
}

export default App;
