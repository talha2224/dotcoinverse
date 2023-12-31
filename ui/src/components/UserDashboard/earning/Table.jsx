import React, { useState } from 'react'

const Table = ({ th, data }) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const [SearchValue, setSearchValue] = useState('')
    const readAbleDate = (date) => {
        const dateObject = new Date(date);
        const readableDate = dateObject.toLocaleString('en-US', options);
        return readableDate
    }

    return (
        <div className={``}>

            <div className='mb-5'>
                <input onChange={(e) => setSearchValue(e.target.value)} style={{ border: "0.1px solid lightgray" }} type="text" placeholder='Search' className='w-[18rem] placeholder:text-sm h-[2.5rem] rounded-md pl-4 pr-4 mt-8 outline-none ' />
            </div>

            {/* TABLE  */}
            <div className='w-full overflow-x-scroll md:overflow-x-auto bg-white'>
                {
                    data && data.length > 0 ?
                        <table className='w-full'>

                            <thead>
                                <tr className=''>
                                    {
                                        th.map((item, index) => {
                                            return (
                                                <th key={item.title} className='pb-2 pt-2 pl-4 pr-4 text-lg text-start font-normal whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item.title}</th>
                                            )
                                        })
                                    }
                                </tr>
                            </thead>

                            <tbody className=''>
                                {
                                    data?.filter((item) => {
                                        return  SearchValue ? item?._id.includes(SearchValue) || item?.depositId?.amount ===Number(SearchValue) || item?.withdrawId?.amount===Number(SearchValue)|| item?.userId?.firstname.toLowerCase().includes(SearchValue.toLowerCase()) 
                                        || item?.withdrawId?._id.includes(SearchValue) || item?.depositId?._id.includes(SearchValue)
                                        :true
                                        // || item?.depositId?.amount ===Number(SearchValue) || item?.withdrawId?.amount===Number(SearchValue)|| item?.userId?.firstname.toLowerCase().includes(SearchValue.toLowerCase())|| item.withdrawId ?item.withdrawId?._id.includes(SearchValue):item.depositId?._id.includes(SearchValue) || item?.withdrawId ? readAbleDate(item?.withdrawId.withdrawDate).toLowerCase().includes(SearchValue.toLowerCase()):readAbleDate(item?.depositId.depositDate).toLowerCase().includes(SearchValue.toLowerCase())

                                    })?.map((item) => {
                                        return (
                                            <tr key={item._id} className='cursor-pointer'>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?._id}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.withdrawId ? item?.withdrawId?._id : "-"}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.depositId ? item?.depositId?._id : "-"}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{item?.userId?.firstname}</td>
                                                <td className='p-4 text-sm text-gray-600  whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>$ {item?.depositId ? item?.depositId?.amount : item?.withdrawId?.amount}</td>
                                                <td className='p-4 text-sm text-gray-600 whitespace-nowrap border-2 border-[#E9EBED] tracking-wider'>{readAbleDate(item?.withdrawId ? item?.withdrawId?.withdrawDate : item?.depositId?.depositDate)}</td>
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
