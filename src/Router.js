import React from 'react'
import { Routes, Route} from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import initialDetails from "../src/components/homepage/mentoringdata";
import Parent from "./components/loginregisterPages/parent";
import Home from "./components/homepage/Home";
import Wizard from './components/registerationWizardPage/Wizard';
import Mentee from './components/searchResultPage/Mentee';
import Mentor from './components/searchResultPage/Mentor';
import OpportunityPage from './components/content/OpportunityPage'
import RequestShowPage from "./components/requestShowPage/RequestShowPage";
import Opportunities from './components/searchResultPage/Opportunities';
import Selectlist from './components/searchResultPage/selectList';
import Requests from './components/searchResultPage/Requests';
import MentorReqForm from "./components/formsPages/MentorReqForm";
import ContactUs from './components/contactPage/ContactUs';
import MentoringOpportunities from "./components/oppourtunityandRequestPage/MentoringOpportunities";
import MentoringOpportunityForm from "./components/formsPages/MentorOppForm";
import MentoringRequest from "./components/oppourtunityandRequestPage/MentoringRequest";
import Profile from "./components/userProfilePage/Profile";
import ForgetPassword from "./components/loginregisterPages/ForgetPassword";
import EditUser from './components/editUserProfilePage/EditUser';
const Router = () => {
  return (
    <div><Routes >
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
      <Route path="/oppShowPage" element={<OpportunityPage/>}/>
      <Route path="/reqShowPage" element={<RequestShowPage/>}/>

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
      <Route path='/edituser' element={<EditUser/>}/>
    {/* end edit user page */}
    {/* contact us page */}
     <Route path='/contactus' element={<ContactUs/>}/>
    {/* end of Contact Us Page  */}
  </Routes></div>
  )
}

export default Router