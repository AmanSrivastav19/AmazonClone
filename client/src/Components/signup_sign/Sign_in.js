import React, { useState,useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './signup.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../context/ContextProvider';

const Sign_in = () => {
  const [logdata, setData] = useState({
    email: "",
    password: ""
  })


  const { account, setAccount } = useContext(LoginContext)

  const adddata = (e) => {
    const { name, value } = e.target;
    setData(() => {
      return {
        ...logdata,
        [name]: value
      }
    })

  }
  console.log(logdata);

  const senddata = async (e) => {
    e.preventDefault();

    const {email,password} = logdata;

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
         email, password
      })
    })
    const data = await res.json()
    console.log(data);

    if(res.status==400 || !data){
      console.log("invalid data");
      toast.warn("invalid details",{
        position: "top-center",
        
      })
    }else {
      console.log("data valid");
      setAccount(data)
      toast.success("user valid",{
        position: "top-center",
        
      })
      setData({...logdata,email:"",password:""}) 

    }
  }

  return (
    <>
      <section>
        <div className='sign_container'>
          <div className='sign_header'>
            <img src='/blacklogoamazon.png' alt='amazonlogo' />
          </div>
          <div className='sign_form'>
            < form method='POST'  >
              <h1>Sign-In</h1>
              <div className='form_data'>
                <label htmlFor='email' >Email</label>
                <input
                  onChange={adddata}
                  value={logdata.email}
                  type="text" name="email"
                  id="email" placeholder='Email Id ' />
              </div>
              <div className='form_data'>
                <label htmlFor='password' >Password</label>
                <input
                  onChange={adddata}
                  value={logdata.password}
                  type="password" name="password"
                  id="password" placeholder='At least 6 Char' />
              </div>
              <button className='signin_btn' onClick={senddata}>Continue</button>
            </form>
          </div>
          <div className='create_accountinfo'>
            <p>New To Amazon</p>
            <NavLink to='/register'> <button className=''>Careate Your Amazon Account</button></NavLink>
          </div>
        </div>
        <ToastContainer/>
      </section>
    </>
  )
}

export default Sign_in
