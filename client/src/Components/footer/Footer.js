import React from 'react'
import './footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
    console.log(year);
  return (
   <footer>
    <div className='footer_container'>
        <div className='.footr_details_one'>
             <h3>Get to know US</h3>
             <p>About US</p>
             <p>Career</p>
             <p>Press Release</p>
             <p>Amazon Cares</p>
        </div>
        <div className='.footr_details_one'>
             <h3>Connect with Us</h3>
             <p>Facebook</p>
             <p>Twitter</p>
             <p>Instagram</p>
             
        </div>
        <div className='.footr_details_one forres'>
             <h3>Make Money with Us</h3>
             <p>Facebook</p>
             <p>Twitter</p>
             <p>Instagram</p>
             
        </div>
        <div className='.footr_details_one forres'>
             <h3>Make Money with Us</h3>
             <p>Facebook</p>
             <p>Twitter</p>
             <p>Instagram</p>
             
        </div>
    </div>
    <div className='lastdetails'>
           <img src='/amazon_PNG25.png' alt='' />
           <p>Condition of Use & Sale &nbsp; &nbsp; &nbsp;  PrivacyNotice &nbsp; &nbsp; &nbsp; Interest-Based Ads &nbsp; &nbsp; &nbsp; © 1996-{year}, &nbsp; Amazon.com,Inc. or its affiliates </p>
    </div>
   </footer>
  )
}

export default Footer
