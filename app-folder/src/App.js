
import './App.css';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage';
import Projects from './pages/Project';
import BrandExample from './pages/nav';
import Footer from './pages/footer';
// import {BrowserRouter, Routes, Route} from react-router-dom;

function App() {
  return (


    <div className="App">
      <BrandExample /> 
      {/* nav^ */}
      <h1>My Awesome Blog</h1>
      <div id="page-body">
{/* this is the page body  */}
      <div id="page-body">
        <HomePage />
        </div>

      <div className='about'>
        <AboutPage />
      </div>
   
      <div className='project'>
        <Projects />
      </div>
      <div className='footer'>
        <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
