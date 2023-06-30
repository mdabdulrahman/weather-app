import React from 'react'
import rain from './rainy.png'
function MoreDetails() {

let ten=[
    {
    w:"w-full",
    v:0
    },
    {
        w:"w-[70%]",
        v:10
        },
        {
            w:" w-0",
            v:20
            },
            {
                w:" w-0",
                v:30
                },
                {
                    w:" w-0",
                    v:40
                    },
                    {
                        w:" w-0",
                        v:50
                        },
                        {
                            w:" w-0",
                            v:60
                            },

                            {
                                w:" w-0",
                                v:70
                                },
                                {
                                    w:" w-0",
                                    v:80
                                    },
                                    {
                                        w:" w-0",
                                        v:90
                                        }

]
let five=[
    {
        w:"w-full",
        v:"0-2"
    },
    {
        w:"w-[60%]",
        v:"3-5"
    },
    {
        w:"w-0",
        v:"6-7"
    },
    {
        w:"w-0",
        v:"8-10"
    },
    {
        w:"w-0",
        v:"11+"
    }
]
let feelsLike=[
    {w:"w-full",
    v:"0º"
    },
    {w:"w-full",
    v:"25º"
    },
    {w:"w-0",
    v:"50º"
    }
]
let cr=[
    "0%","25%","50%","75%","100%"
]
  return (
    <div className='w-11/12  mx-auto'>
        <h1 className='font-bold text-lg my-11'>More details of today's weathers</h1>

{/* first row */}
<div className='lg:flex justify-between items-center'>

        {/* humidity */}
        <div className='details-box'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold'>Humidity</h1>
              <div className='w-11 px-3 py-2 rounded-xl  bg-[#60A5FA]'>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" className='w-6 mx-auto h-6 '  fill="#fff"><rect fill="none" height="24" width="24"/><path d="M12,2c-5.33,4.55-8,8.48-8,11.8c0,4.98,3.8,8.2,8,8.2s8-3.22,8-8.2C20,10.48,17.33,6.55,12,2z M12,20c-3.35,0-6-2.57-6-6.2 c0-2.34,1.95-5.44,6-9.14c4.05,3.7,6,6.79,6,9.14C18,17.43,15.35,20,12,20z M7.83,14c0.37,0,0.67,0.26,0.74,0.62 c0.41,2.22,2.28,2.98,3.64,2.87c0.43-0.02,0.79,0.32,0.79,0.75c0,0.4-0.32,0.73-0.72,0.75c-2.13,0.13-4.62-1.09-5.19-4.12 C7.01,14.42,7.37,14,7.83,14z"/></svg>
               </div>
               </div>
<h1 className='text-4xl text-center font-bold'>82% <span className='text-sm font-semibold'>bad</span></h1>
            {/* three levels */}
            <div className='flex items-center my-3 justify-between'>
            <div className='w-[30%] text-sm font-extralight text-[#ccc]'>
                <h1>good</h1>
            <div className="h-2 rounded-2xl w-full bg-[#ccc] dark:bg-[#ccc]">
  <div className="h-2 w-full rounded-2xl bg-[#60A5FA]" ></div>
</div>
</div>
<div className='w-[30%] text-sm font-extralight text-[#ccc]'>
<h1>normal</h1>
<div className="h-2  w-full rounded-2xl bg-[#ccc] dark:bg-[#ccc]">
  <div className="h-2 w-full rounded-2xl bg-[#60A5FA]" ></div>
</div>
</div>
<div className='w-[30%] text-sm font-extralight text-[#ccc]'>
<h1>bad</h1>
<div className="h-2  w-full rounded-2xl bg-[#ccc] dark:bg-[#ccc]">
  <div className="h-2 w-[30%] rounded-2xl bg-[#60A5FA]" ></div>
</div>
</div>
        
            </div>
          
        </div>


{/* wind*/}
<div className='details-box'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold'>Wind</h1>
              <div className='w-11 px-3 py-2 rounded-xl  bg-[#60A5FA]'>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"  viewBox="0 0 24 24" className='w-6 mx-auto h-6 ' fill="#fff"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M14.5,17c0,1.65-1.35,3-3,3s-3-1.35-3-3h2c0,0.55,0.45,1,1,1s1-0.45,1-1s-0.45-1-1-1H2v-2h9.5 C13.15,14,14.5,15.35,14.5,17z M19,6.5C19,4.57,17.43,3,15.5,3S12,4.57,12,6.5h2C14,5.67,14.67,5,15.5,5S17,5.67,17,6.5 S16.33,8,15.5,8H2v2h13.5C17.43,10,19,8.43,19,6.5z M18.5,11H2v2h16.5c0.83,0,1.5,0.67,1.5,1.5S19.33,16,18.5,16v2 c1.93,0,3.5-1.57,3.5-3.5S20.43,11,18.5,11z"/></g></g></svg>
               </div>
               </div>

            {/* three levels */}
            <div>
                <div className='w-48 mx-auto h-24 border-t-8 border-l-8 border-r-8 border-t-[#ccc] border-l-[#60A5FA] border-r-[#ccc] rounded-t-full'>

                <h1 className='text-3xl pt-8 text-center font-bold'>8 km/h</h1>
                </div>
            </div>
          
        </div>


{/* precipitation */}
<div className='details-box'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold'>Precipitation</h1>
              <div className='w-11 px-3 py-2 rounded-xl  bg-[#60A5FA]'>
             <img className='w-6 mx-auto h-6 ' src={rain}/>
               </div>
               </div>
<h1 className='text-4xl text-center font-bold'>1.4 <span className=' font-semibold'>cm</span></h1>
            {/* ten levels */}
            <div className='flex items-center my-3 justify-between'>
    {ten.map((data)=>{
        return (
            <div className='ten-progress-bar'>
<h1>{data.v}</h1>
<div className="h-2  w-full rounded-2xl bg-[#ccc] dark:bg-[#ccc]">
  <div className={"h-2  rounded-2xl bg-[#60A5FA] "+ ` ${data.w}`} ></div>
</div>
</div>
        )
    })}
        
            </div>
          
        </div>



</div>
{/* second row */}
<div className='lg:flex justify-between mt-11 items-center'>

        {/* UV index */}
        <div className='details-box'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold'>UV index</h1>
              <div className='w-11 px-3 py-2 rounded-xl  bg-[#60A5FA]'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-6 mx-auto h-6 ' viewBox="0 0 24 24"  fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg>
               </div>
               </div>
<h1 className='text-4xl text-center font-bold'>4 <span className='text-sm font-semibold'>medium</span></h1>
            {/* five levels */}
            <div className='flex items-center my-3 justify-between'>
    {five.map((data)=>{
        return (
            <div className='five-progress-bar'>
<h1>{data.v}</h1>
<div className="h-2  w-full rounded-2xl bg-[#ccc] dark:bg-[#ccc]">
  <div className={"h-2  rounded-2xl bg-[#60A5FA] "+ ` ${data.w}`} ></div>
</div>
</div>
        )
    })}
        
            </div>
          
        </div>


{/* feels like*/}
<div className='details-box'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold'>Feels like</h1>
              <div className='w-11 px-3 py-2 rounded-xl  bg-[#60A5FA]'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-6 mx-auto h-6 ' viewBox="0 0 24 24"  fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z"/></svg>
               </div>
               </div>
<h1 className='text-4xl text-center font-bold'>30º</h1>
            {/* feelsLike levels */}
            <div className='flex my-1 justify-between items-center'>
{feelsLike.map((data)=><h1 className=' text-sm font-extralight text-[#ccc]'>{data.v}</h1>)}
           </div>
            <div className="h-2 my-2 rounded-2xl w-full bg-[#ccc] dark:bg-[#ccc]">
  <div className="h-2 w-3/4 rounded-2xl bg-[#60A5FA]" ></div>
</div>
          
        </div>


{/* chance of rain */}
<div className='details-box'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold'>Chance of rain</h1>
              <div className='w-11 px-3 py-2 rounded-xl  bg-[#60A5FA]'>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"  viewBox="0 0 24 24" className='w-6 mx-auto h-6 '  fill="#fff"><g><rect fill="none" height="24" width="24"/><path d="M14.5,6.92L13,5.77V3.88V3.4c0-0.26,0.22-0.48,0.5-0.48c0.28,0,0.5,0.21,0.5,0.48V4h2V3.4C16,2.07,14.88,1,13.5,1 C12.12,1,11,2.07,11,3.4v0.48v1.89L9.5,6.92L6,6.07l5.05,15.25C11.2,21.77,11.6,22,12,22s0.8-0.23,0.95-0.69L18,6.07L14.5,6.92z M13.28,8.5l0.76,0.58l0.92-0.23L13,14.8V8.29L13.28,8.5z M9.96,9.09l0.76-0.58L11,8.29v6.51L9.03,8.86L9.96,9.09z"/></g></svg>
               </div>
               </div>
<h1 className='text-4xl text-center font-bold'>42% </h1>
            {/* progress */}
           <div className='flex my-1 justify-between items-center'>
{cr.map((data)=><h1 className=' text-sm font-extralight text-[#ccc]'>{data}</h1>)}
           </div>
            <div className="h-2 my-2 rounded-2xl w-full bg-[#ccc] dark:bg-[#ccc]">
  <div className="h-2 w-1/2 rounded-2xl bg-[#60A5FA]" ></div>
</div>
</div>
          
        



</div>
    </div>
  )
}

export default MoreDetails