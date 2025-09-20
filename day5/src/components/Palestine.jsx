import React from "react";

const Palestine = () => {
  return (
     <div className='bg-gray-300 w-88 h-56 flex justify-center items-center'>
      <div className="relative w-80 h-48 shadow-lg border overflow-hidden">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 bg-black" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#009743]" />
        </div>
        <div
          className="absolute left-0 top-0 h-full z-10"
          style={{
            width: "25%",                  
            background: "#EE2A35",         
            clipPath: "polygon(0 0, 100% 50%, 0 100%)", 
          }}
        />
      </div>
    </div>
  );
};

export default Palestine;
