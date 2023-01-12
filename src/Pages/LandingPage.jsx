import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import IllustrationImg from '../assets/illustrastion.jpg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUserList } from '../store/userSlicer'

const LandingPage = () => {
 const navigate = useNavigate()
 const dispatch = useDispatch() 
 
 
 useEffect(() => {
  dispatch(getUserList())
 }, [dispatch])

  return (
    <div>
      <Navbar onClick={() => navigate('/login')}/>
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