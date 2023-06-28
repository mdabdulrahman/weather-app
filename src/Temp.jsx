import React from 'react'
import sunrise from './sunrise.png'
import sunset from './sunset.png'
function Temp() {
  return (
    <div className="lg:w-1/4 w-full lg:bg-cover bg-no-repeat   bg-contain lg:h-[65rem] bg-[url('./bg.jpg')]">
<div className='flex w-5/6 mb-6 pt-3 mx-auto justify-between'>

<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className='h-8 w-8'  fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
<div className='flex items-center'>
  <div className='h-2 w-6 mr-2 bg-white rounded-lg'>

  </div>
  <div className='h-2 w-2 mr-2 bg-[#9DC3EF] rounded-lg'>

  </div>
  <div className='h-2 w-2 bg-[#9DC3EF] rounded-lg'>

  </div>
</div>
<div>
<label
  className="inline-block text-sm text-white pr-[0.15rem] hover:cursor-pointer"
  for="flexSwitchCheckDefault"
  > ºC </label>
<input
  className="mr-2 bg-white mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem]  before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-white checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-gray-200 dark:after:bg-white dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
  type="checkbox"
  role="switch"
  id="flexSwitchCheckDefault" />
<label
  className="inline-block pl-[0.15rem] text-sm text-white hover:cursor-pointer"
  for="flexSwitchCheckDefault"
  >ºF</label
>
</div>
</div>
<div className='text-white w-5/6 mx-auto   items-center flex justify-between'>
<div>
  <h1 className='flex text-lg items-center mb-2 '>
  <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 pr-2' viewBox="0 0 24 24"  fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.27 6.73l-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33 10.13-4.23M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/></svg>

    Chennai,India</h1>
  <h1>Today 30 Jun</h1>
</div>
<div className=''>
  <h1 className='flex items-center mb-2 justify-center'>
    <img className='w-7 h-7 pr-2' src={sunrise}></img>
    7.15 AM</h1>
  <h1 className='flex items-center justify-center'>
  <img className='w-7 h-7 pr-2' src={sunset}></img>
    6.55 PM</h1>
</div>
</div>
{/* Temperature reading */}
<div className='mt-10'>
<div className='text-white w-5/6 mx-auto  text-8xl items-center flex justify-between'>
<svg xmlns="http://www.w3.org/2000/svg" className="w-9 text-[#E4F1FF] h-9" viewBox="0 0 24 24" fill='#E4F1FF'  ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"/></svg>

    <h1>26º</h1>
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className="w-9 text-[#E4F1FF] h-9" fill='#E4F1FF'  ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.31 6.71c-.39.39-.39 1.02 0 1.41L13.19 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"/></svg>




</div>
<div className="text-white  my-4 w-full mx-auto pr-16 justify-center text-2xl items-center flex ">
<svg xmlns="http://www.w3.org/2000/svg" className="mr-3 w-6 text-[#E4F1FF] h-6"  viewBox="0 0 24 24" fill='#E4F1FF' ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg>
<h1>Sunny</h1>
</div>
</div>
    </div>
  )
}

export default Temp