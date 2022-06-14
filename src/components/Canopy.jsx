import React from 'react';
import logo1 from "../images/logo1.jpg";
import { useNavigate } from "react-router-dom";
const Canopy = () => {
  const navigate = useNavigate();
  return (
    <div className='container pt-14 pb-28 pl-7 pr-7'>
      <div className='grid grid-cols-2'>
        <div className='w-96 h-40'>
          <img src={logo1} alt="logo" className='w-full h-full'></img>
        </div>
        <div className='flex items-end'>
          <h1 className='text-3xl'>Canopy Inspection</h1>
        </div>
      </div>
      <div className='pl-10 pr-10 pt-3'>
        <div className='grid grid-cols-2'>
          <div>
            <label>Owner's name</label>
            <input className='border-b focus:outline-none border-black ml-4'></input>
          </div>
          <div>
            <label>Rigger</label>
            <input className='border-b focus:outline-none border-black ml-4'></input>
          </div>
        </div>
        <div className='grid grid-cols-2 mt-3'>
          <div>
            <label>Manufacture</label>
            <input className='border-b focus:outline-none border-black ml-4'></input>
          </div>
          <div>
            <label>Date</label>
            <input className='border-b focus:outline-none border-black ml-4'></input>
          </div>
        </div>
        <div className='mt-3'>
          <div>
            <label>Model</label>
            <input className='border-b focus:outline-none border-black ml-4'></input>
          </div>
        </div>
        <div className='mt-3'>
          <div>
            <label>DOM</label>
            <input className='border-b focus:outline-none border-black ml-4'></input>
          </div>
        </div>
        <div className='mt-3'>
          <div>
            <input className='border-b focus:outline-none border-black placeholder:text-black w-60' placeholder='SER#'></input>
          </div>
        </div>
      </div>
      <div className='pl-10 pr-10 mt-10'>
        <div className='w-full grid grid-cols-3 border border-black border-b-0' >
          <div className='border-r border-black pt-2 pl-3 pb-2'>
            <h1>Risers</h1>
          </div>
          <div className='grid-cols-2'>
          </div>
        </div>
        <div className='w-full grid grid-cols-3 border border-black border-b-0' >
          <div className='border-r border-black pt-2 pl-3 pb-2'>
            <h1>Links</h1>
          </div>
          <div className='grid-cols-2'>
          </div>
        </div>
        <div className='w-full grid grid-cols-3 border border-black border-b-0' >
          <div className='border-r border-black pt-2 pl-3 pb-2'>
            <h1>Lines</h1>
          </div>
          <div className='grid-cols-2'>
          </div>
        </div>
        <div className='w-full grid grid-cols-3 border border-black border-b-0' >
          <div className='border-r border-black pt-2 pl-3 pb-2'>
            <h1>slider</h1>
          </div>
          <div className='grid-cols-2'>
          </div>
        </div>
        <div className='w-full grid grid-cols-3 border border-black border-b-0' >
          <div className='border-r border-black pt-2 pl-3 pb-2'>
            <h1>Top Skin</h1>
          </div>
          <div className='grid-cols-2'>
          </div>
        </div>
        <div className='w-full grid grid-cols-3 border border-black border-b-0' >
          <div className='border-r border-black pt-2 pl-3 pb-2'>
            <h1>Bottom Skin</h1>
          </div>
          <div className='grid-cols-2'>
          </div>
        </div>
        <div className='w-full grid grid-cols-3 border border-black border-b-0' >
          <div className='border-r border-black pt-2 pl-3 pb-2'>
            <h1>Ribbs/Ports</h1>
          </div>
          <div className='grid-cols-2'>
          </div>
        </div>
        <div className='w-full grid grid-cols-3 border border-black border-b-0' >
          <div className='border-r border-black pt-2 pl-3 pb-2'>
            <h1>D Bag</h1>
          </div>
          <div className='grid-cols-2'>
          </div>
        </div>
        <div className='w-full grid grid-cols-3 border border-black border-b-0' >
          <div className='border-r border-black pt-2 pl-3 pb-2'>
            <h1>bridle/pilot-chute</h1>
          </div>
          <div className='grid-cols-2'>
          </div>
        </div>
        <div className='w-full grid grid-cols-3 border border-black' >
          <div className='border-r border-black pt-2 pl-3 pb-2 h-10'>
            <h1></h1>
          </div>
          <div className='grid-cols-2'>
          </div>
        </div>
      </div>
      <div className='pl-10 pr-10 mt-10'>
        <div className='border border-black border-b-0 pt-2 pl-3 pb-2'>
          <h1>
            Riggers coments
          </h1>
        </div>
        <div className='border border-black border-b-0 h-10'></div>
        <div className='border border-black border-b-0 h-10'></div>
        <div className='border border-black border-b-0 h-10'></div>
        <div className='border border-black  h-10'></div>
      </div>
      <div className='flex items-center justify-center mt-20 gap-10'>
        <span onClick={() => navigate("/")} className="cursor-pointer">1</span>
        <span onClick={() => navigate("/page2")} className="cursor-pointer">2</span>
        <span onClick={()=> navigate("/page3")} className="cursor-pointer">3</span>
      </div>
    </div>
  )
}

export default Canopy