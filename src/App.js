
import { Routes, Route} from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Mentee from './components/searchPage/Mentee';
import Mentor from './components/searchPage/Mentor';
import Content from './components/content/Content'
import { Login } from "./login";
import { Resgister } from "./register";
import Opportunities from './components/searchPage/Opportunities';
import Selectlist from './components/searchPage/selectList';
import Requests from './components/searchPage/Requests';
import MentorReqForm from "./components/forms/MentorReqForm";
import ContactUs from './components/contactPage/ContactUs';

function App() {
  
  return (
    <div>
     <header>
      <Navbar/>
    </header> 
    
      <Routes >
        <Route exact={true}  path="/" element={<MentorReqForm/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
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