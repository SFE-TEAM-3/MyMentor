import { Routes, Route} from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Parent from "./components/login-register/parent";
import Mentee from './components/searchPage/Mentee';
import Mentor from './components/searchPage/Mentor';
import Content from './components/content/Content'
import Opportunities from './components/searchPage/Opportunities';
import Selectlist from './components/searchPage/selectList';
import Requests from './components/searchPage/Requests';
import MentorReqForm from "./components/forms/MentorReqForm";
import Calendar from "./components/calender/Calender";
import ContactUs from './components/contactPage/ContactUs';

function App() {
  
  return (
    <div>
     <header>
      <Navbar/>
    </header> 
    
      <Routes >
        <Route path="/parent" element={<Parent/>}/>
        <Route path="/content" element={<Content/>}/>
        <Route path="/requestform" element={<MentorReqForm/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path="/calender" element={<Calendar/>}/>
        <Route path='' element={<Selectlist />}>
          <Route path='/mentor' element={<Mentor/>}/>
          <Route path='/mentee' element={<Mentee/>}/>
          <Route path='/opp' element={<Opportunities/>}/>
          <Route path='/reqs' element={<Requests/>}/>
        </Route>
      </Routes>
     
   

      {/* <Routes>
      <Route path='/' element={<ContactUs/>}/>
      <Route path='/mentorOpp' element={<Content/>}/>
        {/* <Route path='selectlist' element={<Selectlist />}>
          <Route path='mentor' element={<Mentor/>}/>
          <Route path='mentee' element={<Mentee/>}/>
          <Route path='opp' element={<Opportunities/>}/>
          <Route path='req' element={<Requests/>}/>
        </Route> */}
       
      {/* </Routes> */}
</div>
  );
}
export default App;