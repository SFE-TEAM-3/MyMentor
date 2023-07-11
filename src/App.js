import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Mentee from './components/Mentee';
import Mentor from './components/Mentor';
import Content from './components/content/Content'
import Opportunities from './components/Opportunities';
import Selectlist from './components/selectList';
import Requests from './components/Requests';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <>
   <header>
    <Navbar/>
   </header>
      <Routes>
        <Route path='' element={<Selectlist ></Selectlist>}>
          <Route path='/:0?' element={<Mentor/>}/>
          <Route path='/1' element={<Mentee/>}/>
          <Route path='/2' element={<Opportunities/>}/>
          <Route path='/3' element={<Requests/>}/>
        </Route>
        <Route path='/mentorOpp' element={<Content/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;
