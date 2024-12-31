import { useState } from 'react'
import './App.css'
import Home from './componenets/home'
import AboutUs from './componenets/aboutus'
import Contactus from './componenets/contactus'
import {Link,Route, BrowserRouter as Router, Routes}  from 'react-router-dom';
import Sample from './sample'
import Forms from './Forms'
import Cat from './cat'


function Sathish() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <header style={{ backgroundColor: 'black', padding: '30px 20px',color:'white',display:'flex',justifyContent:'space-between',alignItems:'center' }}>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <Link to="/" style={{display:'flex',alignItems:'center',gap:'10px',textDecoration:'none',color:'white'}}>
            <span style={{fontSize:'16px',fontWeight:'bold'}}>Sathish</span>
            </Link>
          </div>
          <nav>
            <Link to="/" style={{textDecoration:'none',color:'white',margin:'right'}}>Home</Link>
            <Link to="/aboutus" style={{textDecoration:'none',color:'white',margin:'right'}}>About Us</Link>
            <Link to="/contactus" style={{textDecoration:'none',color:'white',margin:'right'}}>Contact Us</Link>
          </nav>
        </header>
        <div id="root" style={{paddingBottom:'50px',marginTop:'60px'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<Contactus />} />
        
          </Routes>
        </div>
      </Router>

      <footer style={{ backgroundColor: 'black',color:'white',textAlign:'center', padding: '10px 0',position:'fixed',bottom:'0',width:'100%' }}> &copy; 2024 Sathish . All Rights Reserved.</footer>
    </>
  );
}


export default Sathish; 