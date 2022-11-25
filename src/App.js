import './App.css';
import NavBar from './components/NavBar';
import React,{useState} from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Product from './pages/Product';
import SignUpPage from './pages/SignUpPage';

function App() {

  // const [show,setShow] = useState(false);
  let show = false;
  return (
    
    <Router>
    {show && <nav><NavBar></NavBar></nav>}  
      
      <Routes>
        <Route path='/' exact element={<Home/>} /> 
        <Route path='/signup' component = {<SignUpPage/>}/>     {/* exact is used to make sure that the path is exactly the same as the one in the browser */}
        <Route path='/myaccount' exact element={<Report/>}/>
      </Routes>
    </Router>
    
  );
}

// const SignUpContainer = () =>{
//   <Route path='/signup'exact element={<SignUpPage/>}/>  
// }

// const AfterSignUp = () =>{
//   <div>
//     <NavBar></NavBar>
//     <Route path='/' exact element={<Home/>}/>  
//     {/* <Route path='/myaccount'exact element={<Report/>}/>  
//     <Route path='/bankaccounts'  exact element={<Product/>}/>   */}
  
//   </div>
  
// }

export default App;

