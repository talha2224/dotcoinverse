import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'


const Table = ({showLeftSideBar, setshowLeftSideBar, data }) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const [SearchValue, setSearchValue] = useState('')
  const readAbleDate = (date) => {
      const dateObject = new Date(date);
      const readableDate = dateObject.toLocaleString('en-US', options);
      return readableDate
  }
  return (

    <div className={`font-roboto w-[100%] h-[100%] flex flex-col p-5 overflow-y-auto`}>

      <div className='flex justify-between items-center'>

        {/* TITLE  */}
        <div>
          <h1 className='text-xl tracking-[1.2px]'>Bonus History</h1>
        </div>

        {/* RESPONSIVE HAMBURGER AND ADD BUTTON  */}
        <div className='bg-[#181f3f] text-[#fff] p-2 rounded-md md:hidden block'>
          <GiHamburgerMenu onClick={() => setshowLeftSideBar(!showLeftSideBar)} className='cursor-pointer text-xl' />
        </div>
      </div>

      <div>
        <input onChange={(e) => setSearchValue(e.target.value)} style={{ border: "0.1px solid lightgray" }} type="text" placeholder='Search' className='w-[18rem] placeholder:text-sm h-[2.5rem] rounded-md pl-4 pr-4 mt-8 outline-none ' />
      </div>

      {/* TABLE  */}
      <div className='w-full overflow-x-scroll md:overflow-x-auto bg-white mt-[3rem]'>
        {
          data && data.length > 0 ?
            <table className='w-full'>

              <thead>

                <tr className=''>
                  <th className='pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>Id</th>
                  <th className='pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>User Id</th>
                  <th className='pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>Level</th>
                  <th className='pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>Bonus Percentage</th>
                  <th className='pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>Bonus Amount</th>
                  <th className='pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>Date</th>
                </tr>

              </thead>

              <tbody className=''>
                {
                  data?.filter((item) => {
                    return SearchValue ? item._id.includes(SearchValue) ||item.userId._id.includes(SearchValue)|| item.level===Number(SearchValue) || item.bonusPercentage===Number(SearchValue) || item.bonusAmount===Number(SearchValue) || readAbleDate(item?.createdAt).toLowerCase().includes(SearchValue.toLowerCase()):true
                  })
                    ?.map((item) => {
                      return (
                        <tr key={item._id} className='cursor-pointer'>
                          <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?._id}</td>
                          <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.userId?._id}</td>
                          <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.level}</td>
                          <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.bonusPercentage}%</td>
                          <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>${item?.bonusAmount}</td>
                          <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{readAbleDate(item?.createdAt)}</td>
                        </tr>
                      )
                    })
                }
              </tbody>

            </table>

            : <h1 className='text-xl text-center font-cursive font-medium '>No Data Found</h1>

        }
      </div>



    </div>
  )
}

export default Table
