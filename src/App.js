import { Routes, Route} from "react-router-dom"
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
    <div>
     <header>
      <Navbar/>
    </header> 
      <Routes >
        <Route exact={true}  path="/" element={<Content/>}/>
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
