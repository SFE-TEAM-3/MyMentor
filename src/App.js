import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import Footer from "./components/footer/Footer";
import Router from "./Router";

function App() {
  
  return (
    <div>
     <header>
      <Navbar/>
      </header> 
       <Router/>
     <footer>
      <Footer/>
     </footer>
   
</div>
  );
}
export default App;