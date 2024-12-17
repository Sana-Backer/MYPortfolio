import React, { useState } from 'react'
import '../styles/contact.css'

const Contact = () => {


  const [viewerData,setViewerData] = useState({
    name:'',email:'',phone:'',message:''
  })
  console.log(viewerData);

  const handleSaveMessage = async ()=>{
    const {name,email,phone,message}= viewerData
    console.log(name,email,phone,message);

    if(name,email,phone,message){
      const reqBody = new FormData();
      reqBody.append("name", name);
      reqBody.append("email", email);
      reqBody.append("phone", phone);
      reqBody.append("message", message);

    } else {
      alert("Please fill the form completely.");
    }
    
    setViewerData({
      name:'',email:'',phone:'',message:''
    })
  }
   
  
  
  return (
<div className="container my-5" id='contact'>
  <div className="row justify-content-center">
    <div className="col-lg-8">
    <div className="card">
  <div className="card-body border shadow text-center p-4">
    <h2 
      className="text-center d-inline-block px-4 py-2 " 
      style={{
        border: '2px solid #000', 
        display: 'inline-block',
        borderRadius: '8px',
        fontWeight: 'bold'
      }}>
      Get in Touch
    </h2>
    <p className='mb-4'>Have question or wantto connect ? feel free to reach out to me!</p>
    <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
      <input type="text" value={viewerData.name} onChange={e=>setViewerData({...viewerData,name:e.target.value})} className='inputs form-control w-50' placeholder='Your Name' />
      <input type="email" value={viewerData.email} onChange={e=>setViewerData({...viewerData,email:e.target.value})} className='inputs form-control w-50' placeholder='Your Email'/>
      <input type="text" value={viewerData.phone} onChange={e=>setViewerData({...viewerData,phone:e.target.value})} className='inputs form-control w-50' placeholder='Your Number'/>
      <textarea type='text' value={viewerData.message} onChange={e=>setViewerData({...viewerData,message:e.target.value})}className='inputs form-control w-50 p-3' placeholder='Message'></textarea>
      <button className='btn p-2 w-25 mt-2' onClick={handleSaveMessage}>Submit</button>
    </div>
  </div>
</div>

    </div>
  </div>
</div>
  )
}

export default Contact