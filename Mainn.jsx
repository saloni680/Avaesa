import React from 'react';
import './App.css';

const Mainn = () => {
  return (
    <div>
      <h1><marquee  direction="right" scrollamount='12'><span>Enroll now!!!</span></marquee></h1>
      <section className='main'>
        <div className="leftmain">
        <h1 >Welcome to Mastering Journalism!</h1>
          <p id='tex'>Unlock the <span style={{ color: '#027EBC' }}><b>secrets of journalism</b></span> with <span style={{ fontStyle: 'italic', color: '#027EBC' }}><b>Mr. Arun</b></span></p>
          <img src="https://static.vecteezy.com/system/resources/previews/021/980/656/original/male-journalist-with-microphone-in-hands-interview-audience-man-reporter-or-host-stretch-mic-to-camera-journalism-and-broadcast-illustration-vector.jpg" alt=""  />
        </div>
        <div className="rightmain" >
          <section className='rightSect' >
            <h2>Register for the Course</h2>
            <form action="">
              <input type="text" placeholder="Enter Name" style={{ marginBottom: '10px', width: '90%', padding: '8px',marginRight:'10px' }} />
              <input type="email" placeholder="Enter Email" style={{ marginBottom: '10px', width: '90%', padding: '8px' }} />
              <input type="password" placeholder="Enter Password" style={{ marginBottom: '10px', width: '90%', padding: '8px' }} />

              <button style={{ width: '90%', padding: '10px', fontSize: '20px', backgroundColor: 'black', color: '#fff', border: 'none' }}>Register</button>
            </form>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Mainn;
