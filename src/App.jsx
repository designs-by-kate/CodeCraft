
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import About from './pages/About';
import HTMLmodule from './pages/HTMLmodule';
import CSSmodule from './pages/CSSmodule';
import JSmodule from './pages/JSmodule';
import { QuizProvider } from './pages/Quiz/QuizContext';
import Quiz from './pages/Quiz/QuizIndex';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/html" element={<HTMLmodule />}/>
        <Route path="/css" element={<CSSmodule />}/>
        <Route path="/javascript" element={<JSmodule />}/>
        <Route path="/quiz" element={<QuizProvider><Quiz /></QuizProvider>} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
    </Router>
    </div>
  )
}

export default App;
