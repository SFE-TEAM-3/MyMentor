
import Mentee from './Componets/Mentee';
import Mentor from './Componets/Mentor';
import Opportunities from './Componets/Opportunities';
import Selectlist from './Componets/selectList';
import { Routes, Route } from "react-router-dom"
import Requests from './Componets/Requests';
function App() {
  return (
    <>
   
      <Routes>
        <Route path='' element={<Selectlist ></Selectlist>}>
          <Route path='/:0?' element={<Mentor/>}/>
          <Route path='/1' element={<Mentee/>}/>
          <Route path='/2' element={<Opportunities/>}/>
          <Route path='/3' element={<Requests/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
