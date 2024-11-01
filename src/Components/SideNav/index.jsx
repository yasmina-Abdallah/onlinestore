import React from 'react'
import Link from 'next/link'



const SideNav = async() => {
  const getAllCategories=async()=>{
    const APIresponse=await fetch('https://dummyjson.com/products/category-list')
    const res=await APIresponse.json()
    return res
    
      }

      const AllCategories=await getAllCategories()
    
    
  return (
    <div className='flex flex-col mt-24 ml-5 font-semibold'>
      <Link href='/categories'>
      <p className='font-bold text-3xl'>Categories</p>
      
      </Link>
      
     <div className='flex gap-3 mt-2'>
      <div className='flex flex-col gap-1'>
      <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
     className='size-6'
    >
      <path d="M112 476h72v72h-72zm182 0h72v72h-72zm364 0h72v72h-72zm182 0h72v72h-72zm-364 0h72v72h-72z" />
    </svg>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      height="1em"
      width="1em"
       className='size-6'
     strokeWidth="1.5" stroke="currentColor"
      
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 23c-.55 0-1-.45-1-1v-9c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H9m1-12c-.55 0-1-.45-1-1V5.25S11 3 11.75 1c1.08.67 2.17 1.33 2.71 2.83S15 7.67 15 10c0 .55-.45 1-1 1h-4z" />
    </svg>
    <svg id="Layer_1" className='size-6'  height="1em"
      width="1em"  strokeWidth="1.5" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.29 122.88"><title>perfume</title><path d="M34.81,43.94a1.84,1.84,0,0,1-.41,0h-.24c-4.1.15-7,.39-7.58.73C17.4,50.25,11,59.31,7.55,69.23c14.06-2,25.76.28,37.28,2.52,14.68,2.86,29.06,5.66,47.45-1.09l-.11-.34C88.74,59.57,81.82,49.87,71.75,44.78c-1.28-.65-12.84-1-24.12-1-4.63,0-9.15.06-12.82.18ZM40.9,0H59.29a2,2,0,0,1,2,2V7.65a7.37,7.37,0,0,1,5.95,7.21V39.69c3.42.25,5.86.57,6.63,1,11.26,5.69,19,16.42,22.74,28.27a55.72,55.72,0,0,1,2.27,23.91c-1,7.83-3.94,15-8.83,20.44s-11.77,9-20.66,9.59l-.33,0H29.78a30.11,30.11,0,0,1-19.32-8.4C5,109.15,1.76,101.81.54,93.72A55.4,55.4,0,0,1,2.81,68.79c3.67-11.3,10.88-21.71,21.38-28.06.89-.54,3.84-.94,7.89-1.2V14.86a7.37,7.37,0,0,1,6-7.21V2.86A2.87,2.87,0,0,1,40.9,0ZM24.72,21.57a1.89,1.89,0,0,1,0,3.77H8a1.89,1.89,0,0,1,0-3.77Zm-.61,9.36a1.88,1.88,0,0,1,1.22,3.56L11.9,39.1a1.88,1.88,0,1,1-1.22-3.56l13.43-4.61Zm1.22-18.51A1.88,1.88,0,0,1,24.11,16L10.68,11.37A1.88,1.88,0,1,1,11.9,7.81l13.43,4.61Zm21.49,6.34a2.83,2.83,0,1,1,5.65,0V27.4a2.83,2.83,0,0,1-5.65,0V18.76ZM6.11,74.14A49.74,49.74,0,0,0,5.13,93c1.07,7.14,3.9,13.56,8.57,18.13A25.55,25.55,0,0,0,30,118.23H69.06c7.59-.47,13.4-3.49,17.53-8.06s6.76-11,7.68-17.94a50.42,50.42,0,0,0-.8-17.08c-19.41,7-34.31,4.12-49.52,1.15C32.23,74,20.31,71.7,6.11,74.14ZM62.57,39.42V14.86a2.73,2.73,0,0,0-2.71-2.7H39.43a2.71,2.71,0,0,0-1.91.8,2.66,2.66,0,0,0-.79,1.9V39.3c3.36-.13,7.12-.19,10.9-.19,5.17,0,10.46.11,14.94.31Z"/>
    
    </svg>

    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      className='size-6'
      
    >
      <path d="M19 9V6a2 2 0 00-2-2H7a2 2 0 00-2 2v3" />
      <path d="M3 11v5a2 2 0 002 2h14a2 2 0 002-2v-5a2 2 0 00-4 0v2H7v-2a2 2 0 00-4 0zM5 18v2M19 18v2" />
    </svg>

    <svg
      viewBox="0 0 24 24"
      fill="none"
      height="1em"
      width="1em"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className='size-6'
     
    >
      <path d="M20 10c2 3-3 12-5 12s-2-1-3-1-1 1-3 1-7-9-5-12 5-3 7-2V5C5.38 8.07 4.11 3.78 4.11 3.78S6.77.19 11 5V3h2v5c2-1 5-1 7 2z" />
    </svg>

    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className='size-6'
     
    >
      <path d="M0 64C0 28.7 28.7 0 64 0h288c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm160 288c0-17.7 14.3-32 32-32v-16c0-44.2 35.8-80 80-80h144c17.7 0 32-14.3 32-32V69.5c37.3 13.2 64 48.7 64 90.5v32c0 53-43 96-96 96H272c-8.8 0-16 7.2-16 16v16c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V352z" />
    </svg>

    <svg
      viewBox="0 0 24 24"
      fill="none"
      height="1em"
      width="1em"
     className='size-6'
     strokeWidth="1.5" stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 19c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-7H3v-2h18v2h-2v7z" />
    </svg>

    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      className='size-6'
      
    >
      <path d="M956.9 845.1L896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608l8.1-37h150.3l8.1 37H428.7zm224 0l-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z" />
    </svg>
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
     className='size-6'
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M15 4l6 2v5h-3v8a1 1 0 01-1 1H7a1 1 0 01-1-1v-8H3V6l6-2a3 3 0 006 0" />
    </svg>
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className='size-6'
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="M21.5 9V8h-1l-1 1H15l-1-1h-1l-6 4H4a2 2 0 00-2 2v2h8l3-1h2v1h6.5v-2s.5-1 .5-2.5-.5-2.5-.5-2.5z" />
    </svg>

    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      className='size-6'
    >
      <path d="M8.5 5a.5.5 0 00-1 0v2.5H6a.5.5 0 000 1h2a.5.5 0 00.5-.5V5z" />
      <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 012 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 011.918 3.48.502.502 0 01.582.493v1a.5.5 0 01-.582.493A5.99 5.99 0 0112 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 103 8a5 5 0 0010 0z" />
    </svg>

    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      className='size-6'
    >
      <path d="M3 18v-6a9 9 0 0118 0v6" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
    </svg>

    <svg
      viewBox="0 0 640 512"
      fill="currentColor"
      height="1em"
      width="1em"
   className='size-6'
    >
      <path d="M280 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h57.7l16.4 30.3L256 192l-45.3-45.3c-12-12-28.3-18.7-45.3-18.7H64c-17.7 0-32 14.3-32 32v32h96c88.4 0 160 71.6 160 160 0 11-1.1 21.7-3.2 32h70.4c-2.1-10.3-3.2-21-3.2-32 0-52.2 25-98.6 63.7-127.8l15.4 28.6C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6l-55.1-102H480c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32h-20.4c-7.5 0-14.7 2.6-20.5 7.4l-47.4 39.5-14-26c-7-12.9-20.5-21-35.2-21H280zm182.7 279.2l28.2 52.2c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-28.2-52.2c2.3-.3 4.7-.4 7.1-.4 35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64c0-15.5 5.5-29.7 14.7-40.8zM187.3 376c-9.5 23.5-32.5 40-59.3 40-35.3 0-64-28.7-64-64s28.7-64 64-64c26.9 0 49.9 16.5 59.3 40h66.4c-11.2-59.2-63.2-104-125.7-104C57.3 224 0 281.3 0 352s57.3 128 128 128c62.5 0 114.5-44.8 125.8-104h-66.5zm-59.3 8c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
    </svg>

    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
     className='size-6'
    >
      <path d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 00-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 10-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 00-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 102 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 104 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 102-3.464c-.229-.132-.603-.216-1.04-.268zM9 4a1.468 1.468 0 01-.045.205c-.039.132-.1.295-.183.484a12.88 12.88 0 01-.637 1.223L8 6.142a21.73 21.73 0 01-.135-.23 12.88 12.88 0 01-.637-1.223 4.216 4.216 0 01-.183-.484A1.473 1.473 0 017 4a1 1 0 112 0zM3.67 5.5a1 1 0 011.366-.366 1.472 1.472 0 01.156.142c.094.1.204.233.326.4.245.333.502.747.742 1.163l.13.232a21.86 21.86 0 01-.265.002 12.88 12.88 0 01-1.379-.06 4.214 4.214 0 01-.51-.083 1.47 1.47 0 01-.2-.064A1 1 0 013.67 5.5zm1.366 5.366a1 1 0 01-1-1.732c.001 0 .016-.008.047-.02.037-.013.087-.028.153-.044.134-.032.305-.06.51-.083a12.88 12.88 0 011.379-.06c.09 0 .178 0 .266.002a21.82 21.82 0 01-.131.232c-.24.416-.497.83-.742 1.163a4.1 4.1 0 01-.327.4 1.483 1.483 0 01-.155.142zM9 12a1 1 0 01-2 0 1.476 1.476 0 01.045-.206c.039-.131.1-.294.183-.483.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223.083.19.144.352.183.484A1.338 1.338 0 019 12zm3.33-6.5a1 1 0 01-.366 1.366 1.478 1.478 0 01-.2.064c-.134.032-.305.06-.51.083-.412.045-.898.061-1.379.06-.09 0-.178 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4.1 4.1 0 01.327-.4c.046-.05.085-.086.114-.11.026-.022.04-.03.041-.032a1 1 0 011.366.366zm-1.366 5.366a1.494 1.494 0 01-.155-.141 4.225 4.225 0 01-.327-.4A12.88 12.88 0 019.74 9.16a22 22 0 01-.13-.232l.265-.002c.48-.001.967.015 1.379.06.205.023.376.051.51.083.066.016.116.031.153.044l.048.02a1 1 0 11-1 1.732zM8 9a1 1 0 110-2 1 1 0 010 2z" />
    </svg>

    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      className='size-6'
    >
      <path d="M11 1a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V2a1 1 0 011-1h6zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" />
      <path d="M8 14a1 1 0 100-2 1 1 0 000 2z" />
    </svg>


    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
     className='size-6'
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M21 12 A9 9 0 0 1 12 21 A9 9 0 0 1 3 12 A9 9 0 0 1 21 12 z" />
      <path d="M6 5.3a9 9 0 010 13.4M18 5.3a9 9 0 000 13.4" />
    </svg>

    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
       className='size-6'
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
       
        d="M224 232a32 32 0 0164 0M448 200h16M64 200H48M64 200c0 96 16 128 80 128s80-32 80-128c0 0-16-16-80-16s-80 16-80 16zM448 200c0 96-16 128-80 128s-80-32-80-128c0 0 16-16 80-16s80 16 80 16z"
      />
    </svg>

    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
  className='size-6'
    >
      <path d="M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm-8 824H232V136h560v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z" />
    </svg>

    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      className='size-6'
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M314.56 48s-22.78 8-58.56 8-58.56-8-58.56-8a31.94 31.94 0 00-10.57 1.8L32 104l16.63 88 48.88 5.52a24 24 0 0121.29 24.58L112 464h288l-6.8-241.9a24 24 0 0121.29-24.58l48.88-5.52L480 104 325.13 49.8a31.94 31.94 0 00-10.57-1.8zM333.31 52.66a80 80 0 01-154.62 0"
      />
    </svg>

    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    className='size-6'
    >
      <path d="M4 9a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0zM6 8a1 1 0 000 2h4a1 1 0 100-2H6zM4.862 4.276L3.906 6.19a.51.51 0 00.497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 00.497-.731l-.956-1.913A.5.5 0 0010.691 4H5.309a.5.5 0 00-.447.276z" />
      <path
        fillRule="evenodd"
        d="M2.52 3.515A2.5 2.5 0 014.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 01.049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 00.381-.404l.792-1.848zM4.82 3a1.5 1.5 0 00-1.379.91l-.792 1.847a1.8 1.8 0 01-.853.904.807.807 0 00-.43.564L1.03 8.904a1.5 1.5 0 00-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0015 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 00-.43-.563 1.807 1.807 0 01-.853-.904l-.792-1.848A1.5 1.5 0 0011.18 3H4.82z"
      />
    </svg>

    <svg
      viewBox="0 0 512 512"
      fill="CurrentColor"
      height="1em"
      width="1em"
    className='size-6'
    >
      <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176z" />
    </svg>

    <svg
      viewBox="0 0 320 512"
      fill="currentColor"
      height="1em"
      width="1em"
      className='size-6'
    >
      <path d="M160 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1l38.3-114.8-33.9 56.4c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-16v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96z" />
    </svg>

    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className='size-6'
    >
      <path d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z" />
    </svg>


    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className='size-6'
    >
      <path d="M3 18h8.7l5.3-4h1v4h2v-4s1-2 1-4-.5-4-.5-4h-2L18 7l-8 7H8l-5 2v2z" />
    </svg>

    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
    className='size-6'
    >
      <path d="M18 12 A6 6 0 0 1 12 18 A6 6 0 0 1 6 12 A6 6 0 0 1 18 12 z" />
      <path d="M12 10v2l1 1M16.13 7.66l-.81-4.05a2 2 0 00-2-1.61h-2.68a2 2 0 00-2 1.61l-.78 4.05M7.88 16.36l.8 4a2 2 0 002 1.61h2.72a2 2 0 002-1.61l.81-4.05" />
    </svg>


      </div>
      
        
      
          <div className='flex flex-col gap-1 '>
           
            <Link className=' text-start  hover:text-green-600 ' href={`/products`}>All</Link>
            {
        AllCategories.length>0?
        
        AllCategories.map(category=>
        
  
        <Link className=' hover:text-green-600 ' href={`/categories/${category}`}>{category}</Link>
        
       

        ):<p>No categories to show</p>
      }
       </div>
    
    </div>
    </div>
  )
}

export default SideNav
