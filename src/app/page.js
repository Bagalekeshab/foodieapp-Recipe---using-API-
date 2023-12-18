import React from 'react'
import './Page.css'
import Navbar from './Component/Navbar/Navbar'
import Container from './Component/Container/Container'
import Image from 'next/image'



function page() {
  return (
   <div>
    <Navbar/>
    
      <Container/>
    
  </div>
  
  )
  }
export default page
