import { Routes, Route} from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import initialDetails from "../src/components/homepage/mentoringdata";
import Navbar from './components/navbar/Navbar'
import Parent from "./components/login-register/parent";
import Home from "./components/homepage/Home";
import Wizard from "./components/wizard/Wizard";
import Mentee from './components/searchPage/Mentee';
import Mentor from './components/searchPage/Mentor';
import Content from './components/content/Content'
import RequestMentor2 from "./components/mentorreqshow/RequestMentor2";
import Opportunities from './components/searchPage/Opportunities';
import Selectlist from './components/searchPage/selectList';
import Requests from './components/searchPage/Requests';
import MentorReqForm from "./components/forms/MentorReqForm";
import ContactUs from './components/contactPage/ContactUs';
import MentoringOpportunities from "./components/mentorOpp/MentoringOpportunities";
import PersonalInfo from './components/edituser/PersonalInfo'
import MentoringOpportunityForm from "./components/forms/MentorOppForm";
import MentoringRequest from "./components/mentorOpp/MentoringRequest";
import Footer from "./components/footer/Footer";
import Profile from "./components/userprofile/Profile";
import ForgetPassword from "./components/login-register/ForgetPassword";
function App() {
  
  return (
    <div>
     <header>
      <Navbar/>
    </header> 
    
      <Routes >
        {/* login */}
        <Route path="/parent" element={<Parent/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        {/* end login pages */}
        {/* registeration wizard */}
          <Route path="/wizard" element={<Wizard/>}/>
        {/* end registeration wizard */}

        {/* home page */}
        <Route path='/' element={<Home data={initialDetails}/>}/>
        {/* end home page */}

        {/* search page */}
          <Route path='' element={<Selectlist />}>
          <Route path='/mentor' element={<Mentor/>}/>
          <Route path='/mentee' element={<Mentee/>}/>
          <Route path='/opp' element={<Opportunities/>}/>
          <Route path='/reqs' element={<Requests/>}/>
        </Route>
        {/* end search page */}
        {/* <Route path="/" element={<MentoringOpportunities/>}/> */}
        {/* mentor oppourtunites and request show pages */}
          <Route path="/oppShowPage" element={<Content/>}/>
          <Route path="/reqShowPage" element={<RequestMentor2/>}/>

         {/* mentor oppourtunites and request show pages */} 
        {/* forms */}
          <Route path="/requestform" element={<MentorReqForm/>}/>
          <Route path="/oppform" element={<MentoringOpportunityForm/>}/>
        {/* end forms */}
        {/* mentor opp and req applications */}
          <Route path="/mentoroppapp" element={<MentoringOpportunities/>}/>
          <Route path="/mentorreqapp" element={<MentoringRequest/>}/>
        {/* end mentor opp and requ application */}
        {/* user profile */}
            <Route path="/external" element={<Profile/>}/>
        {/* end user profile */}
        {/* edit user page */}
          <Route path='/edituser' element={<PersonalInfo/>}/>
        {/* end edit user page */}
        {/* contact us page */}
         <Route path='/contactus' element={<ContactUs/>}/>
        {/* end of Contact Us Page  */}
      </Routes>
     <footer>
      <Footer/>
     </footer>
   

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