import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { swal } from "../helper/swal";
import { getProfile, setValue } from "../store/userSlicer";

const Navbar = ({ onClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, isLogged } = useSelector((state) => state);

  return (
    <header className="w-full h-auto bg-white px-9 py-6 flex justify-between items-center mb-10 sticky top-0 z-50">
      <div className="flex">
        <ul className="flex justify-between items-center space-x-10 text-2xl font-semibold ">
          <li
            className="px-8 py-3 text-[#3a3b3a] rounded-2xl"
            onClick={() => {
              if (!isLogged) {
                navigate("/login");
              } else {
                navigate("/dasboard");
              }
            }}
          >
            <p>Cinta Coding</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center space-x-5 uppercase text-xl font-semibold text-black">
        {username.length ? (
          <div className="flex flex-row">
            <button
              className="px-8 py-3 bg-[#6c9ef0] text-white rounded-xl mr-4"
              onClick={() => {
                dispatch(
                  setValue({
                    key: "isLogged",
                    value: true,
                  })
                );
                swal.success("Berhasil Logout");
                navigate("/login");
              }}
            >
              Logout
            </button>
            <h3
              className="text-2xl font-semibold text-center text-black"
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(getProfile());
                navigate("/profile");
              }}
            >
              Welcome,
              <span className="text-blue-600">
                <p>{username}</p>
              </span>
            </h3>
          </div>
        ) : (
          <button
            className="px-8 py-3 bg-[#6c9ef0] text-white rounded-xl"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
