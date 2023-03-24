
import './App.css';
import Footer from './Components/footer/Footer';
import Navbaar from './Components/header/Navbaar';
import Maincomp from './Components/home/Maincomp';
import Newnav from './Components/newnavbaar/Newnav';
import Sign_in from './Components/signup_sign/Sign_in';
import SignUp from './Components/signup_sign/SignUp';
import Cart from './Components/cart/Cart';
import Buynow from './Components/buynow/Buynow';
import {Routes,Route} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData] = useState(false);

  useEffect(()=>{
      setTimeout(()=>{
        setData(true)
      },2000)
  },[])


  return (
 <>
 {
  data ?(
    <>
      <Navbaar/>
 <Newnav/>
 <Routes>
  <Route  path='/' element={<Maincomp/>}/>
  <Route  path='/login' element={<Sign_in/>}/>
  <Route  path='/register' element={<SignUp/>}/>
  <Route  path='/getproductsone/:id' element={<Cart/>}/>
  <Route  path='/buynow' element={<Buynow/>}/>
 </Routes>
  
  <Footer/>
    </>
  ) :(
    <div className='circle'>
          <CircularProgress/>
          <h2>Loading...</h2>
    </div>
  )
 }
 
 </>
  );
}

export default App;
