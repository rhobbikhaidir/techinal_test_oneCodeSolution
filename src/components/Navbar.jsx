import React from 'react'

const Navbar = ({onClick}) => {
  return (
    <header className="w-full h-auto bg-white px-9 py-6 flex justify-between items-center mb-10 sticky top-0 z-50">
      <div className="flex">
        <ul className="flex justify-between items-center space-x-10 text-2xl font-semibold ">
          <li className="px-8 py-3 text-[#3a3b3a] rounded-2xl">
            <p >Cinta Coding</p>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center space-x-5 uppercase text-xl font-semibold text-black">
        <button className="px-8 py-3 bg-[#6c9ef0] text-white rounded-xl" onClick={onClick}>
          Login
        </button>
      </div>
    </header>
  );
}

export default Navbar