
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import 'rsuite/dist/rsuite.min.css';
import { Home } from './Pages/Home';
import { GetPerson } from './Pages/GetPerson';
import { GetCar } from './Pages/GetCar';
import { NavButton } from './NavButtons';

function App() {
  return(
    <Router>
      <NavButton />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/person' element= { <GetPerson /> } />
        <Route path='/car' element={ <GetCar /> } />
      </Routes>
    </Router>

  );
}

export default App;
