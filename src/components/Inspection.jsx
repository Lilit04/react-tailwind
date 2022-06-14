import React from 'react'
import App from './../App';
import { useNavigate } from "react-router-dom";
const Inspection = () => {
  const navigate = useNavigate();
  return (
    <div  className='container pt-14 pb-28 pl-7 pr-7'>
      <div className='flex-col items-center flex mr-60'>
        <h1 className='text-lg font-semibold'>Loft Reserve Inspection Checklist</h1>
        <h1 className='text-lg font-semibold'>Fentress, TX. 78622</h1>
      </div>
      <div className='pl-10 pr-10 mt-3'>
        <div className='grid grid-cols-2'>
          <div className='flex items-center'>
            <label>Date:</label>
            <input className='border-b focus:outline-none border-black ml-3'></input>
          </div>
          <div className='flex items-center'>
            <label>Next Pack Due:</label>
            <input className='border-b focus:outline-none border-black ml-3'></input>
          </div>
        </div>
        <div className='grid grid-cols-2 mt-3'>
          <div className='flex items-center'>
            <label>Client:</label>
            <input className='border-b focus:outline-none border-black ml-3'></input>
          </div>
          <div className='flex items-center'>
            <label>Phone:</label>
            <input className='border-b focus:outline-none border-black ml-3'></input>
          </div>
        </div>
        <div className='mt-3'>
          <div className='flex items-center'>
            <label>Address:</label>
            <input className='border-b focus:outline-none border-black ml-3'></input>
          </div>
        </div>
        <div className='grid grid-cols-2 mt-3'>
          <div>
            <input className='border-b focus:outline-none border-black w-60'></input>
          </div>
          <div className='flex items-center'>
            <label>Rigger-initials:</label>
            <input className='border-b focus:outline-none border-black ml-3'></input>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <div className='items-center flex justify-center'>
          <h1 className='text-3xl font-semibold'>Container</h1>
        </div>
        <div className='grid grid-cols-2 pl-10 pr-10 pt-3'>
          <div className='flex items-center'> 
            <label>Manufacturer:</label>
            <input className='border-b focus:outline-none border-black ml-3 w-80'></input>
          </div>
          <div className='flex items-center'>
            <label>Model:</label>
            <input className='border-b focus:outline-none border-black ml-3 w-80'></input>
          </div>
        </div>
        <div className='grid grid-cols-3 pl-10 pr-10 pt-3'>
          <div className='flex items-center'> 
            <label>D.O.M.</label>
            <input className='border-b focus:outline-none border-black ml-3'></input>
          </div>
          <div className='flex items-center'>
            <label>Serial Number</label>
            <input className='border-b focus:outline-none border-black ml-3'></input>
          </div>
          <div className='flex items-center'>
            <label>Type:</label>
            <input className='border-b focus:outline-none border-black ml-3'></input>
          </div>
        </div>
      </div>
      <div className='mt-10 pl-10 pr-10 grid grid-cols-2'>
        <div>
          <div className='flex items-center'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Risers</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Toggles</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Velcro</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Main Lift Web</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Hardware</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Housing</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-A.A.D. Set Up</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Flaps</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Grommets</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Stiffeners</label>
          </div>
        </div>
        <div>
          <div className='flex items-center'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Chest Strap</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Leg Pads</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Pilot Chute</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Bag/Bridal/Safety Stow</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Cutaway Cables/Handle/and Clean</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Replace Closing Loop </label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Main Pllot Chute Pouch</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Ripcord Cable/Pin/Handle</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-Reserve Static Line</label>
          </div>
          <div className='flex items-center mt-1'>
            <input className='border-b focus:outline-none border-black'></input>
            <label>-M.A. R.D (Skyhook/Trap/Boost)</label>
          </div>
        </div>
      </div>
      <div className="mt-10 pl-10 pr-10 grid grid-cols-2 gap-10">
        <div>
          <div className='flex justify-center'>
            <h1 className='text-3xl font-semibold'>Reserve Canopy</h1>
          </div>
          <div className='mt-10'>
            <div className='flex items-center'> 
              <label>Manufacturer:</label>
              <input className='border-b focus:outline-none border-black ml-1 w-full'></input>
            </div>
            <div className='flex items-center mt-2'>
              <label>Model:</label>
              <input className='border-b focus:outline-none border-black ml-1 w-full'></input>
            </div>
            <div className='flex items-center mt-2'>
              <label className='w-72'>Date Of Manufacturer:</label>
              <input className='border-b focus:outline-none border-black  w-full'></input>
            </div>
            <div className='flex items-center mt-2'>
              <label className='w-36'>Serial Number:</label>
              <input className='border-b focus:outline-none border-black w-full'></input>
            </div>
          </div>
        </div>
        <div>
          <div className='flex justify-center'>
            <h1 className='text-3xl font-semibold'>Automatic Activation Device</h1>
          </div>
          <div className='mt-10'>
            <div className='flex items-center'> 
              <label>Manufacturer:</label>
              <input className='border-b focus:outline-none border-black ml-1 w-full'></input>
            </div>
            <div className='flex items-center mt-2'>
              <label>Model:</label>
              <input className='border-b focus:outline-none border-black ml-1 w-full'></input>
            </div>
            <div className='flex items-center mt-2'>
              <label className='w-72'>Date Of Manufacturer:</label>
              <input className='border-b focus:outline-none border-black  w-full'></input>
            </div>
            <div className='flex items-center mt-2'>
              <label className='w-36'>Serial Number:</label>
              <input className='border-b focus:outline-none border-black ml-1 w-full'></input>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10 grid grid-cols-3 pl-10 pr-10 gap-12'>
        <div>
          <div className='flex items-center'>
            <input className='border-b focus:outline-none border-black w-24'></input>
            <label>-Top Skin</label>
          </div>
          <div className='flex items-center mt-2'>
            <input className='border-b focus:outline-none border-black w-24'></input>
            <label>-Stabilizer/Slider Stops</label>
          </div>
          <div className='flex items-center mt-2'>
            <input className='border-b focus:outline-none border-black w-24'></input>
            <label>-Bottom Skin</label>
          </div>
          <div className='flex items-center mt-2'>
            <input className='border-b focus:outline-none border-black w-24'></input>
            <label>-Ribs</label>
          </div>
          <div className='flex items-center mt-2'>
            <input className='border-b focus:outline-none border-black w-24'></input>
            <label>-Lines/Bar Tacks</label>
          </div>
          <div className='flex items-center mt-2'>
            <input className='border-b focus:outline-none border-black w-24'></input>
            <label>-Continuity</label>
          </div>
          <div className='flex items-center mt-2'>
            <input className='border-b focus:outline-none border-black w-24'></input>
            <label>-Slider/Slider Grommets</label>
          </div>
          <div className='flex items-center mt-2'>
            <input className='border-b focus:outline-none border-black w-24'></input>
            <label>-Connector Links</label>
          </div>
        </div>
        <div>
          <div className='flex items-center'>
            <label>Next Service Due:</label>
            <input className='border-b focus:outline-none border-black w-24 ml-2'></input>
          </div>
          <div className='flex items-center mt-2'>
            <input className='border-b focus:outline-none border-black w-24'></input>
            <label>-Processing Unit</label>
          </div>
          <div className='flex items-center mt-2'>
            <input className='border-b focus:outline-none border-black w-24'></input>
            <label>-Control Unit</label>
          </div>
          <div className='flex items-center mt-2'>
            <input className='border-b focus:outline-none border-black w-24'></input>
            <label>-Release Unit</label>
          </div>
          <div className='flex items-center mt-2'>
            <input className='border-b focus:outline-none border-black w-24'></input>
            <label>-Installation</label>
          </div>
          <div className='flex items-center mt-2'>
            <input className='border-b focus:outline-none border-black w-24'></input>
            <label>-Wires</label>
          </div>
          <div className='flex items-center mt-2'>
            <input className='border-b focus:outline-none border-black w-24'></input>
            <label>-Operation</label>
          </div>
        </div>
        <div>
          <div className='flex items-center'>
            <label>Rec.</label>
            <input className='border-b focus:outline-none border-black w-24 ml-2'></input>
          </div>
          <div className='flex items-center mt-2'>
            <label>Man</label>
            <input className='border-b focus:outline-none border-black w-24 ml-2'></input>
          </div>
          <div className='flex items-center mt-2'>
            <label>E.O.L.</label>
            <input className='border-b focus:outline-none border-black w-24 ml-2'></input>
          </div>
        </div>
      </div>
      <div className="mt-10 pl-10 pr-10">
        <div className='grid grid-cols-2 gap-4 pt-3'>
          <div className='flex items-center'> 
            <label>Rigger Signature:</label>
            <input className='border-b focus:outline-none border-black ml-2 w-80'></input>
          </div>
          <div className='flex items-center'>
            <label>Rigger Number/Seal:</label>
            <input className='border-b focus:outline-none border-black ml-2 w-80'></input>
          </div>
        </div>
        <div className='w-full mt-3 flex items-center'>
          <label className='w-44'>RiggerComments/Repairs:</label>
          <input className='border-b focus:outline-none border-black ml-4 w-full'></input>
        </div>
      </div>
      <div className='flex items-center justify-center mt-20 gap-10'>
        <span onClick={() => navigate("/")} className="cursor-pointer">1</span>
        <span onClick={() => navigate("/page2")} className="cursor-pointer">2</span>
        <span onClick={()=> navigate("/page3")} className="cursor-pointer">3</span>
      </div>
    </div>
  )
}

export default Inspection