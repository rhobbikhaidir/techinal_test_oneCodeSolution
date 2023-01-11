import React from 'react'
import Navbar from '../components/Navbar'
import IllustrationImg from '../assets/illustrastion.jpg'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex items-center justify-center">
        <img
          src={IllustrationImg}
          alt="illustration"
          className="w-2/4 h-2/4 ml-12"
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
    </div>
  );
}

export default LandingPage