import React from 'react'
import Navbar from '../components/Navbar';
import ContentUsers from "../components/ContentUser";
import { useSelector } from 'react-redux';


const DetailPost = () => {
  const {postDetail, comentList} = useSelector(state => state)
  return (
    <div className="w-full h-screen bg-white">
    <Navbar />
    <div className="flex flex-col justify-center items-center">
   
      {postDetail?.map((val, i) => {
        return (
          <ContentUsers
            key={i}
            withCount
            name={val.title}
            desc={val.body}
            // sudah di cek post/{id}/coment  semuda data berisi hanya 5 jadi di hardcode
            count={5}
          />
        );
      })}
    </div>
    <div className="flex flex-col justify-center items-center mt-8">
        <h1>All comments</h1>
        {comentList?.map((val, i) => {
        return (
          <ContentUsers
            key={i}
            name={val.email}
            desc={val.name}

          />
        );
      })}
    </div>
  </div>
  )
}

export default DetailPost