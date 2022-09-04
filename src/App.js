import './App.css';
import Hero from './Components/Hero';
import AuthPage from './Components/AuthPage';
import {
  Routes,
  Route,
} from "react-router-dom";
import Dashbord from './Components/Dashbord';


function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Hero/>} />
    <Route path='/login' element={<AuthPage/>} />
    <Route path='/dashbord' element={<Dashbord/>} />
   </Routes>
   </>
  );
}

export default App;
