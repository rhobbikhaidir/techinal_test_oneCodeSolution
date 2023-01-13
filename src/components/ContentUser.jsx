import React from 'react'
import Comment from '../assets/comments.png';

const ContentUser = (props) => {
  return (
      <div className="w-[500px] bg-white flex flex-row py-4">
        <p className="text-2xl text-black font-semibold pr-8 flex-1">{props.name}</p>
        <div className="flex-0">
          <p className="text-lg font-normal text-left text-gray-600">
            {props.desc}
          </p>
          <div className="flex items-center gap-10 mt-6">
          {props.withCount &&  <div className="flex items-center gap-4">
              <img
                src={Comment}
                alt="icon-comment"
                className="w-[24px] h-[24px] object-contain"
              />
              <p className="text-blue-600 text-lg font-semibold">
                {props.count}
              </p>
            </div>}
           {props.withBtn && <p className="text-blue-600 text-lg font-semibold" style={{cursor: 'pointer'}} onClick={props.onClick} >Detail</p>}
          </div>
        </div>
      </div>
  );
}

export default ContentUser;