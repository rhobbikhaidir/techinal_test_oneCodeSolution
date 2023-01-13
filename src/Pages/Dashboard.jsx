import React, { useEffect, useState } from "react";
import Search from "../assets/search.png";
import ContentUsers from "../components/ContentUser";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getComent, getListPosts, getPostDetail } from "../store/userSlicer";
import { useNavigate } from "react-router-dom";
// import Navbar from '../components/Navbar'



const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {totalCount, postList} = useSelector(state => state)
  const [activePage, setActivePage] = useState(1);
  
  
  const limit = 10;
  let totalPost = totalCount / limit;
  console.log(totalPost, 'test')


  const paginate = (pageNumber) => setActivePage(pageNumber);
  const paginateFront = () => setActivePage(activePage + 1);
  const paginateBack = () => setActivePage(activePage - 1);

  useEffect(() => {
    dispatch(getListPosts({_page: activePage, _limit: limit}))
    
  }, [dispatch, activePage]);

  const handleDetail = (e) => {
    console.log(e, 'iddd')
    dispatch(getPostDetail(e));
      dispatch(getComent(e));
      navigate(`/detail/${e}`)
  }
  

  return (
    <div className="w-full h-screen bg-white">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="flex fles-wrap items-center mb-4">
          <input
            type="text"
            placeholder="search"
            className="w-[400px] h-[40px] px-6 py-3 outline-none rounded-l-full bg-gray-200 text-center"
          />
          <button className="bg-gray-200 px-2 py-2 rounded-r-full">
            <img
              src={Search}
              alt="logo-search"
              className="w-[24px] h-[24px] object-contain"
            />
          </button>
        </div>
        {postList?.map((val, i) => {
          return (
            <ContentUsers
              key={i}
              name={val.title}
              withCount
              desc={val.body}
              withBtn
              // sudah di cek post/{id}/coment  semuda data berisi hanya 5 jadi di hardcode
              count={5}
              onClick={handleDetail.bind(null, val.id)}
            />
          );
        })}
      </div>
      <div className="flex justify-evenly items-end mt-8">
        <Pagination
          postsPerPage={limit}
          totalPosts={totalPost}
          totalCount={totalCount}
          paginate={paginate}
          currentPage={activePage}
          paginateBack={paginateBack}
          paginateFront={paginateFront}
          />
      </div>
    </div>
  );
};

export default Dashboard;
