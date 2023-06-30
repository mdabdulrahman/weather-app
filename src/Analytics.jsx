import React, { useState } from 'react'
import profile from './profile.png'
import { UserData } from "./Data";
import LineChart from "./components/LineChart";
import MoreDetails from './MoreDetails';
function Analytics() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.temp),
    datasets: [
      {
       
        data: UserData.map((data) => data.percent),
        backgroundColor: 'rgba(96,165,250,0.8)',
        borderColor: "black",
        borderWidth: 0,
        
        pointRadius: 0, // Hide the dots
        fill: true,
        borderCapStyle: 'round',
      },
    ],
  });
  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: {
        right:0,
         // adjust this value to add more or less space
      }
    },
    scales: {
      x: {
        position: 'bottom', // Display x-axis at the bottom
        grid: {
          color: 'rgba(0, 0, 0, 1)', // Set the color of the x-axis grid lines
          lineWidth: 1, // Set the width of the x-axis grid lines
          
        },
        ticks: {
          font: {
            family: 'Montserrat',
            size: 12,
            weight: 'bold',
          },
          callback: (value,i) => `${UserData[i].percent}%`,
        },
        
      },
      y: {
        beginAtZero: false,
        display:false,
        position: 'top', // Display y-axis at the bottom
        ticks: {
          padding: 50, // Add padding to make room for the labels
        },
        grid: {
          display: false, // Hide x-axis label lines
        }
      },
    },
    plugins: {
      legend: {
        display: false, // Display legend on top
      },
    },
  };
  let timings=(data)=>{
    return (
      <div className='flex-col flex items-center align-middle'>
        <h1 className='text-sm'>
          {data.time}
        </h1>
        <h1 className='py-3'>
          {data.weather=="sunny"?<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4z"/></svg>}
        </h1>
        <h1 className='font-semibold text-md'>
          {data.temp+"°"}
        </h1>
      </div>
    )
  }
  return (
    <div className="lg:w-3/4 w-full h-full lg:h-[65rem] rounded-l-[3.2rem] lg:rounded-r-[0rem] rounded-r-[3.2rem]  bg-[#E4F1FF]" 
    >
      {/* user info */}
<div className='flex w-11/12 py-11 lg:py-0 my-8 mx-auto justify-between'>
<div>
<h1 className='font-bold mb-1 text-lg'>Welcome back Rahman !</h1>
<h1 className='font-semibold'>Check out today's weather information</h1>
</div>

<div className='flex items-center '>
<svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 0 24 24" width="26px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
<img className='ml-6 hidden lg:block bg-[#CBE2FF] p-1 rounded-lg w-12' src={profile}/>
</div>
</div>

<div className='bg-white lg:h-[32%] h-96 w-11/12 mx-auto rounded-[2rem]'>
  <div className='lg:flex pb-11 items-center pt-6 w-full pl-11 justify-between'>
    <h1 className='font-semibold text-lg'>Upcoming hours</h1>
    <div className='flex lg:w-2/4 w-full pt-4 lg:pt-0 justify-end'>
    <h1 className='flex lg:pr-6 text-xs lg:text-sm px-2 py-1  bg-[#ccc] rounded-xl items-center'>Rain precipitation
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 pl-2 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

    </h1>
    <h1 className='flex ml-4 mr-11 px-2 py-1 text-sm font-semibold bg-[#ccc] rounded-xl items-center'>Next days
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 pl-2 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

    </h1>
    </div>
  </div>
  <div className='w-11/12  lg:h-28 h-24  mx-auto'>
  <div className="w-full h-full">

    {/* timings */}
    <div className='flex pb-3 px-1 justify-between items-center'>
      {UserData.map((data)=>timings(data))}
    </div>
    {/* chart */}
<LineChart chartData={userData} options={options}/>
</div>
</div>

</div>

{/*  more details*/}

<div>
  <MoreDetails/>
</div>
    </div>
  )
}

export default Analytics