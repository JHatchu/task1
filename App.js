//import logo from './logo.svg';
import './App.css';
import Data from './data';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
  
    
   <>
   <Router>
  <Routes>
    <Route path='/' exact Component={Data}/>
  </Routes>
  </Router>
   </>
  );
}

export default App;

