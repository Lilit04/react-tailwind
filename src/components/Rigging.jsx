import React from 'react';
import logo from "../images/logo1.jpg";
import { useNavigate } from "react-router-dom";
const Rigging = () => {
  const navigate = useNavigate();
  return (
    <div className='container pt-14 pb-28 pl-7 pr-7'>
      <div className='border border-black rounded-2xl pt-3 pb-3 pr-5 pl-5'>
        <div className='grid grid-cols-2'>
          <div className=' h-32'>
            <img src={logo} alt="logo" className='w-full h-full'></img>
          </div>
          <div>
            <h1 className='text-2xl font-bold italic flex justify-center'>Rigging Loft Work Order</h1>
            <div className='flex items-center mt-4'>
              <label>Name:</label>
              <input className='border-b focus:outline-none border-black ml-3 w-full'></input>
            </div>
            <div className='grid grid-cols-2 mt-4 gap-8'>
              <div className='flex items-center'> 
                <label className='w-24'>Dropoff Date</label>
                <input className='border-b focus:outline-none border-black w-36'></input>
              </div>
              <div className='flex items-center'>
                <label className='w-24'>Pickup date</label>
                <input className='border-b focus:outline-none border-black w-36'></input>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 w-full gap-20'>
          <div className='flex items-center w-full'> 
            <label>Address:</label>
            <input className='border-b focus:outline-none border-black ml-3 w-full'></input>
          </div>
          <div className='flex items-center w-full'>
            <label>Phone:</label>
            <input className='border-b focus:outline-none border-black ml-3 w-full'></input>
          </div>
        </div>
        <div className='grid grid-cols-2 w-full gap-20 mt-3'>
          <div className='flex items-center w-full'> 
            <label>City/State/Zip:</label>
            <input className='border-b focus:outline-none border-black ml-3 w-full'></input>
          </div>
          <div className='flex items-center w-full'>
            <label>Email:</label>
            <input className='border-b focus:outline-none border-black ml-3 w-full'></input>
          </div>
        </div>
        <div className='flex items-center w-full mt-3'> 
          <label className='w-72'>Gear manufacturer/description</label>
          <input className='border-b focus:outline-none border-black grid-cols-2 w-full'></input>
        </div>
        <div className='grid grid-cols-3 justify-center items-center mt-5'>
          <div className='flex justify-end items-center'>
            <input type="checkbox"></input>
            <label className='ml-3'>Deliver to Pro Shop</label>
          </div>
          <div className='flex justify-center'>
            <h1 className='text-xl font-bold italic'>OR</h1>
          </div>
          <div className='flex justify-start items-center'>
            <input type="checkbox"></input>
            <label className='ml-3'>Customer Pich-up</label>
          </div>
        </div>
      </div>
      <div className='mt-14'>
        <h1 className='text-2xl font-bold'>Important Notes</h1>
        <ul className='list-disc list-inside mt-3'>
          <li className=''>Equipment left more than 30 days after the intended pickup date will be charged $30 plus $1/day storage fee for each day over 3O days (cash).</li>
          <li>
            If you leave a system with a main, we nrill retu:rn your system with the main packed and charge you for
            the main pack job in addition to the work requested.
          </li>
          <li>
            Equipment left more than 1 year after the intended pickup date vlill be assumed to have been abandoned and
            become the property of Cookies Rigging Services.
          </li>
          <li>
            If no pi.ckup date is specified, the pickup date will be determined by the date the service is completed.
            • Prices are subject to change
          </li>
          <li>
            Automatic activation device (AAD) service requirements are mandatory and will be done if the service will be
            due \Nithin the next 180 days.
          </li>
          <li>
            We reserve the right to refuse to accept equipment with incompatible components or equipment older than 10 years.
          </li>
          <li>
            Ain.vorthiness Directives, Service Bulletins, and minor repairs will be performed as deemed necessary for the airworthiness of the equipment lf additional charges exceed $30, we \.vill contact you before performing the work
          </li>
          <li>
            Applicable sales taxes will be added to parts. Listed prices do not include sales tax.
          </li>
        </ul>
      </div>
      <div className='mt-5'>
        <div className='flex justify-center items-center'>
          <h1 className='text-xl font-semibold'>
            I AGREE TO THESE TERMS AND REQUEST' THE CHECKED SERVICES. 
          </h1>
        </div>
        <div className='grid grid-cols-2 w-full mt-4'>
          <div className='flex items-center w-full justify-center pl-24'> 
            <label>Signature</label>
            <input className='border-b focus:outline-none border-black ml-3 w-96'></input>
          </div>
          <div className='flex items-center w-full pl-16'>
            <label>Date:</label>
            <input className='border-b focus:outline-none border-black ml-3 w-80'></input>
          </div>
        </div>
        <div className='flex justify-center items-center mt-5'>
          <h1 className='text-lg font-semibold'>
            Please check each work item you would like performed.
          </h1>
        </div>
      </div>
      <table className='border border-black w-full mt-5'>
        <tr className='p-1 flex'>
          <th className='text-xl'>
            Rush Fees (add to total)
          </th>
        </tr>
        <tr className='grid grid-cols-3'>
            <td className='border-t border-r border-black p-1'>
              <div className='flex items-center'>
                <input type="checkbox"></input>
                <label className='ml-3'>Short notice (5-7 days) $40</label>
              </div>
            </td>
            <td className='border-t border-r border-black p-1'>
              <div className='flex items-center'>
                <input type="checkbox"></input>
                <label className='ml-3'>Shorter notice (2-5 days) $60</label>
              </div>
            </td>
            <td className='border-t border-black p-1'>
              <div className='flex items-center'>
                <input type="checkbox"></input>
                <label className='ml-3'>Right the heck now! Next in line $100</label>
              </div>
            </td>
        </tr>
      </table>
      <table className='border border-black w-full mt-10'>
        <tr className='flex p-1'>
          <th className='text-xl'>
            Container/Reserve Inspections, Repacks, and Assemblies
          </th>
        </tr>
        <tr>
          <td className='p-1 flex justify-between border-t border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Reserve repack or emergency rig inspection & repack</label>
            </div>
            <div>
              <h1>85$</h1>
            </div>
          </td>
        </tr>
        <tr>
          <td className='p-1 flex justify-between border-t border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Assemble and pack complete rig (including main inspection and repack)</label>
            </div>
            <div>
              <h1>130$</h1>
            </div>
          </td>
        </tr>
        <tr>
          <td className='p-1 flex justify-between border-t border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Assemble and pack container/resenre only</label>
            </div>
            <div>
              <h1>100$</h1>
            </div>
          </td>
        </tr>
        <tr>
          <td className='p-1 flex justify-between border-t border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Wash container ( allow one 1,,veek turnaround, includes assembly /repack)</label>
            </div>
            <div>
              <h1>170$</h1>
            </div>
          </td>
        </tr>
        <tr>
          <td className='p-1 flex justify-between border-t border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Re-dose/install A</label>
            </div>
            <div>
              <h1>25$</h1>
            </div>
          </td>
        </tr>
        <tr>
          <td className='p-1 flex justify-between border-t border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Scotch-Guard container</label>
            </div>
            <div>
              <h1>30$</h1>
            </div>
          </td>
        </tr>
      </table>
      <table className='border border-black w-full mt-10'>
        <tr className='flex p-1'>
          <th className='text-xl'>
            Main Parachute Inspections, Packs, and Assemblies
          </th>
        </tr>
        <tr className='border-t border-black grid grid-cols-2	'>
          <td className='p-1 flex justify-between	border-r border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Canopy Inspection</label>
            </div>
            <div>
              <h1>15$</h1>
            </div>
          </td>
          <td className='p-1 flex justify-between	'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>De-tangle canopy</label>
            </div>
            <div>
              <h1>10$</h1>
            </div>
          </td>
        </tr>
        <tr className='border-t border-black grid grid-cols-2	'>
          <td className='p-1 flex justify-between	border-r border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Assemble canopy</label>
            </div>
            <div>
              <h1>15$</h1>
            </div>
          </td>
          <td className='p-1 flex justify-between	'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Pack main</label>
            </div>
            <div>
              <h1>11$</h1>
            </div>
          </td>
        </tr>
      </table>
      <table className='border border-black w-full mt-10'>
        <tr className='flex p-1'>
          <th className='text-xl'>
            Container/Reserve Repairs, Maintenance, and Enhancements
          </th>
        </tr>
        <tr className='border-t border-black grid grid-cols-2	'>
          <td className='p-1 flex justify-between	border-r border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Reserve Slinks (soft links)</label>
            </div>
            <div>
              <h1>38$</h1>
            </div>
          </td>
          <td className='p-1 flex justify-between	'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Install leg pads</label>
            </div>
            <div>
              <h1>30$</h1>
            </div>
          </td>
        </tr>
        <tr className='border-t border-black grid grid-cols-2	'>
          <td className='p-1 flex justify-between	border-r border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Tack Slinks</label>
            </div>
            <div>
              <h1>10$</h1>
            </div>
          </td>
          <td className='p-1 flex justify-between	'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Install butt bungee loops</label>
            </div>
            <div>
              <h1>10$</h1>
            </div>
          </td>
        </tr>
        <tr className='border-t border-black'>
          <td className='p-1 flex justify-between	'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Replace BOC pouch</label>
            </div>
            <div>
              <h1>$40 plus parts(varies by container)</h1>
            </div>
          </td>
        </tr>
      </table>

      <table className='border border-black w-full mt-10'>
        <tr className='flex p-1'>
          <th className='text-xl'>
            Main Canopy Repairs, Maintenance, and Enhancements
          </th>
        </tr>
        <tr className='border-t border-black grid grid-cols-2	'>
          <td className='p-1 flex justify-between	border-r border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Main Slinks(soft links)</label>
            </div>
            <div>
              <h1>38$</h1>
            </div>
          </td>
          <td className='p-1 flex justify-between	'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Install line set(line set not included)</label>
            </div>
            <div>
              <h1>150$</h1>
            </div>
          </td>
        </tr>
        <tr className='border-t border-black grid grid-cols-2	'>
          <td className='p-1 flex justify-between	border-r border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Tack Slinks</label>
            </div>
            <div>
              <h1>10$</h1>
            </div>
          </td>
          <td className='p-1 flex justify-between	'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Replace brake lines complete from cascade</label>
            </div>
            <div>
              <h1>40$ ea</h1>
            </div>
          </td>
        </tr>
        <tr className='border-t border-black grid grid-cols-2	'>
          <td className='p-1 flex justify-between	border-r border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Replace kill line on pilot chute</label>
            </div>
            <div>
              <h1>30$</h1>
            </div>
          </td>
          <td className='p-1 flex justify-between	'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Replace lover brake lines</label>
            </div>
            <div>
              <h1>20$ ea</h1>
            </div>
          </td>
        </tr>
        <tr className='border-t border-black grid grid-cols-2	'>
          <td className='p-1 flex justify-between	border-r border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Convert to collapsible slider</label>
            </div>
            <div>
              <h1>40$</h1>
            </div>
          </td>
          <td className='p-1 flex justify-between	'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Patch canopy</label>
            </div>
            <div>
              <h1>Starting at 40$ each</h1>
            </div>
          </td>
        </tr>
        <tr className='border-t border-black grid grid-cols-2	'>
          <td className='p-1 flex justify-between	border-r border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Install slider pocket</label>
            </div>
            <div>
              <h1>40$</h1>
            </div>
          </td>
        </tr>
      </table>
      <table className='border border-black w-full mt-10'>
        <tr>
          <th className='flex p-1 text-xl'>Other Services/Parts</th>
        </tr>
        <tr className=''>
          <td className='p-1 flex justify-between	border-t border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Butt patch on jumpsuits/paints</label>
            </div>
            <div>
              <h1>Starting at 20$ each</h1>
            </div>
          </td>
          <td className='p-1 flex justify-between	border-t border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Complete extra set of keepers (3) and closing loop</label>
            </div>
            <div>
              <h1>$5</h1>
            </div>
          </td>
          <td className='p-1 flex justify-between	border-t border-black'>
            <div className='flex items-center'>
              <input type="checkbox"></input>
              <label className='ml-3'>Custom work (please describe below)</label>
            </div>
            <div>
              <h1>$60/hour plus parts </h1>
            </div>
          </td>
        </tr>
      </table>

      <table className='border border-black w-full mt-10'>
        <tr>
          <th className='flex p-1 text-xl'>Rigger Comments</th>
        </tr>
        <tr className=''>
          <td className='p-1 flex justify-between	border-t border-black h-8'>

          </td>
          <td className='h-8 p-1 flex justify-between	border-t border-black'>
          </td>
          <td className='p-1 flex justify-between	border-t border-black h-8'>
          </td>
          <td className='p-1 flex justify-between	border-t border-black h-8'>
            <div className='grid grid-cols-2 w-full gap-20'>
              <div className='flex items-center w-full'> 
                <label>Address:</label>
                <input className='border-b focus:outline-none border-black ml-3 w-full'></input>
              </div>
              <div className='flex items-center w-full'>
                <label>Phone:</label>
                <input className='border-b focus:outline-none border-black ml-3 w-full'></input>
              </div>
            </div>
          </td>
        </tr>
      </table>
      <div className="mt-10">
        <div className='grid grid-cols-3 gap-4 pt-3'>
          <div className='flex items-center'> 
            <label className='w-28'>Picked up by:</label>
            <input className='border-b focus:outline-none border-black ml-2 w-64'></input>
          </div>
          <div className='flex items-center'>
            <label>Signature:</label>
            <input className='border-b focus:outline-none border-black ml-2 w-80'></input>
          </div>
          <div className='flex items-center'>
            <label>Date:</label>
            <input className='border-b focus:outline-none border-black ml-2 w-80'></input>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center mt-10'>
        <h1 className='text-xl font-bold italic'>Thank you for your business! Questions? Call us at 512-488-2214!</h1>
      </div>
      <div className='flex items-center justify-center mt-20 gap-10'>
        <span onClick={() => navigate("/")} className="cursor-pointer">1</span>
        <span onClick={() => navigate("/page2")} className="cursor-pointer">2</span>
        <span onClick={()=> navigate("/page3")} className="cursor-pointer">3</span>
      </div>
    </div>
  )
}

export default Rigging