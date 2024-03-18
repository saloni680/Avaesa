import React from 'react'
import { useEffect,useState } from 'react'
import './App.css'

const Navbar = () => {
    const[isdark,setisDark]=useState(false)
    const[open,setOpen]=useState(false)


  useEffect(()=>{
    if(isdark){
      document.body.style.background = 'black'
      document.body.style.color = 'white'
      }else{
        document.body.style.background = 'white'
        document.body.style.color = 'black'
      }
  })
  function handleDark(){
    setisDark(!isdark)
  }
  function handleOpen() {
    setOpen(!open); 
  }

  return (
    <div className='Navbar'>
        <div className="left  ">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#" onClick={handleOpen} className='Read' >Read More</a>
        </div>
        <div className="right">
            <button className='darkLight' onClick={handleDark}>{(isdark?'☀️':'🌚')}</button>
        </div>
        {open && (
            <div  className="dropdown-content" >
                <h1>Gain Practical Experience</h1><br />
                <h3>Mr. Arun is a retired Journalist, who has retired recently. He has a plethora of experiences which he wants to share with the world. With this intent, he has designed a 2 week online course for the aspirant journalists, to get practical insights about the field.</h3>
                <br />
                <ul>
                  <li>2 Weeks online course</li>
                  <li>Gain Practical Insights</li>
                  <li>From Decade years expeience</li>
                  <li>Certified course</li>
                </ul>
                <br />
                <button onClick={()=>setOpen(false)} style={{alignItems:'center'}}>Closee</button>
            </div>
            
        )}
    </div>
  )
}
export default Navbar

