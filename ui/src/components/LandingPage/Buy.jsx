import React from 'react'

const Buy = () => {
  return (
    <div data-aos='fade-left' id='buy' className={`font-roboto pl-10 pr-10 mt-10`}>

      {/* Buy Now TEXT  */}

      <div className='flex justify-center items-center flex-col'>
        <h1 className={`font-cursive text-4xl font-medium text-white`}>How To Buy</h1>
        <div className='w-[3.7rem] h-[4px] bg-gradient-to-tl from-[#ec1183] to-[#7e257f] mt-2 ml-[8.7rem]'></div>
      </div>

      <div className='flex justify-center items-center'>

        <div className='flex gap-x-3 justify-center sm:justify-start items-center flex-wrap sm:flex-nowrap sm:overflow-x-auto'>

          <div className='min-w-[17rem] w-[17rem] h-[9rem] bg-[#FFFFFF0D] rounded-md mt-8 p-3 pt-0 flex justify-center items-center flex-col'>
            <h1 className='text-white text-lg tracking-wider font-semibold'>Step 1</h1>
            <p className='text-[#91949a] text-center text-sm mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i </p>
          </div>

          <div className='min-w-[17rem] w-[17rem] h-[9rem] bg-[#FFFFFF0D] rounded-md mt-8 p-3 pt-0 flex justify-center items-center flex-col'>
            <h1 className='text-white text-lg tracking-wider font-semibold'>Step 2</h1>
            <p className='text-[#91949a] text-center text-sm mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i </p>
          </div>

          <div className='min-w-[17rem] w-[17rem] h-[9rem] bg-[#FFFFFF0D] rounded-md mt-8 p-3 pt-0 flex justify-center items-center flex-col'>
            <h1 className='text-white text-lg tracking-wider font-semibold'>Step 3</h1>
            <p className='text-[#91949a] text-center text-sm mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i </p>
          </div>

          <div className='min-w-[17rem] w-[17rem] h-[9rem] bg-[#FFFFFF0D] rounded-md mt-8 p-3 pt-0 flex justify-center items-center flex-col'>
            <h1 className='text-white text-lg tracking-wider font-semibold'>Step 4</h1>
            <p className='text-[#91949a] text-center text-sm mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i </p>
          </div>

        </div>

      </div>


    </div>
  )
}

export default Buy
