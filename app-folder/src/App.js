
import './App.css';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage';
import Projects from './pages/Project';

function App() {
  return (
    <div className="App">
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
