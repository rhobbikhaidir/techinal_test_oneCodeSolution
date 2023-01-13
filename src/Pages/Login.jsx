import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { swal } from "../helper/swal";
import { getUserList, setValue } from "../store/userSlicer";

const Login = () => {
  const { userList, email, password } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const valueChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(
      setValue({
        key: name,
        value: value,
      })
    );
  };

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);


  const loginHandler = (e) => {
    e.preventDefault();
    userList.find((item) => {
      if (item.email === (email && password)) {
        sessionStorage.setItem('isLogged', true)
        dispatch(
          setValue({
            key: "username",
            value: item.username,
          })
        );
        dispatch(
          setValue({
            key: "idUser",
            value: item.id,
          })
        );
        dispatch(
          setValue({
            key: "isLogged",
            value: true,
          })
        );

        swal.success("berhasil Login");
        return item;
      } else if (item.email !== (email && password)) {
        return swal.error("Email atau password yang anda masukan salah");
      }
      return item
    });

   


    navigate('/dashboard')
  };

  return (
    <div className="text-center my-28 w-2/4 px-48 mx-auto ">
      <h1 className="text-2xl font-bold py-14">Login Page</h1>
      <div className="shadow-lg rounded-lg w-full  p-4 h-[300px]">
        <form onSubmit={loginHandler}>
          <div className="pt-4">
            <input
              value={email}
              onChange={valueChangeHandler}
              type="text"
              name="email"
              placeholder="email"
              className="border w-9/12  border-[#6c9ef0] rounded-2xl p-2  text-center "
            />
          </div>
          <div className="my-12">
            <input
              value={password}
              onChange={valueChangeHandler}
              placeholder="password"
              name="password"
              type="password"
              className="border w-9/12 border-[#6c9ef0] rounded-2xl p-2  text-center "
            />
          </div>
          <button
            className="bg-[#6c9ef0] w-9/12 rounded-2xl p-2 text-white"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
