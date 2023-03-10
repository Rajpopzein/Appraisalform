import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Loginpage from './components/Loginpage';
import {Routes,Route, Router} from 'react-router-dom'
import Auththen from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  exact path='/' element={<Loginpage />}></Route>
        <Route exact path='/auth' element={<Auththen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
