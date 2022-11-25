import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Product from './pages/Product';

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' exact element={<Home/>}/>     {/* exact is used to make sure that the path is exactly the same as the one in the browser */}
          <Route path='/myaccount'exact element={<Report/>}/>  
          <Route path='/bankaccounts'  exact element={<Product/>}/>  
        </Routes>
      </Router>
    </>
  );
}

export default App;
