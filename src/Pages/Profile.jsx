import React from 'react'
import { useSelector } from 'react-redux';
import ArrowLeft from '../assets/arrowLeft.jpg'
import Navbar from '../components/Navbar';

const Profile = () => {
  const {userLogin} = useSelector(state => state)
  const dataUsers = [
    {
      askFirst: 'Username :',
      answerAsk: userLogin?.name,
    },
    {
      askFirst: 'Email :',
      answerAsk: userLogin?.email,
    },
    {
      askFirst: 'Addres :',
      answerAsk: `${userLogin?.address?.street} - ${userLogin?.address?.suite} ${userLogin?.address?.city}`,
    },
    {
      askFirst: 'Phone :',
      answerAsk: userLogin?.phone,
    }
  ];



  return (
      <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-start items-center w-[600px] mt-10">
          <img
            src={ArrowLeft}
            alt="logo-arrow"
            className="w-[30px] h-[30px] object-contain"
          />
        </div>
        <div className="flex flex-col px-8 py-8 mt-10">
          {dataUsers.map((val, i) => {
            return (
              <div key={i} className="flex justify-between space-x-10">
                <h2 className="text-2xl text-gray-600 font-semibold text-center mr-10 mb-6">
                  {val.askFirst}
                </h2>
                <p className="text-xl text-gray-600 font-semibold text-center leading-relaxed">
                  {val.answerAsk}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Profile