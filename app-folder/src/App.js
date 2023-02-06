
import './App.css';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage';
import Projects from './pages/Project';
import BrandExample from './pages/nav';

function App() {
  return (


    <div className="App">
      <BrandExample />
      <h1>My Awesome Blog</h1>
      <div id="page-body">
      <HomePage />
      <AboutPage />
      <Projects />

      </div>
    </div>
  );
}

export default App;
