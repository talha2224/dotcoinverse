import React, { useRef, useState } from 'react'
import axios from 'axios';
import { AdminJwtDecodeFunction } from '../../../helpers/jwtDecode'
import { ImCross } from 'react-icons/im'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdatePopup = ({ setshowPopup,userdata }) => {

    const [accountId] = useState(AdminJwtDecodeFunction()._id)
    const [data, setData] = useState({ firstname: userdata?.firstname, lastname: userdata?.lastname, email: userdata?.email })
    const [loading, setloading] = useState(false)
    const [image, setImage] = useState([])
    const inputRef = useRef(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0])
    };
    const handleImageClick = () => {
        inputRef.current.click();
    };
    const onChangeInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setloading(true)
        const formData = new FormData()
        formData.append("firstname", data.firstname)
        formData.append("lastname", data.lastname)
        formData.append("image", image)

        axios.put(`/api/v1/admin/update/${accountId}`, formData)
            .then((res) => {
                if (res.status === 200) {
                    setloading(false)
                    toast.success("Profile Updated")
                    setTimeout(() => {
                        setshowPopup(false)
                    }, 3000);
                }
            })
            .catch((e) => {
                setloading(false)
                toast.error("Backend Not Running")

            })
    }


    return (

        <div className='sm:w-[25rem] w-[100%] ml-3 mr-3 sm:m-0 bg-white p-4 font-roboto rounded-md'>

            {/* HEADING AND CLOSE ICON  */}
            <div className='flex justify-between mb-3'>
                <h1 className='text-lg'>Update Profile</h1>
                <ImCross onClick={() => setshowPopup(false)} className='cursor-pointer ' />
            </div>

            {/* FIRST NAME LASTNAME EMAIL INPUT  */}
            <input onChange={onChangeInput} defaultValue={data?.firstname} name='firstname' style={{ border: "1px solid #e9ecef" }} type="text" placeholder='Enter Firstname' className='w-[100%] h-[2.3rem] text-sm outline-none rounded-md pl-2 pr-2 mb-3' />
            <input onChange={onChangeInput} defaultValue={data?.lastname} name='lastname' style={{ border: "1px solid #e9ecef" }} type="text" placeholder='Enter Lastname' className='w-[100%] h-[2.3rem] text-sm outline-none rounded-md pl-2 pr-2 mb-3' />
            <input onChange={onChangeInput} defaultValue={data?.email} name='email' style={{ border: "1px solid #e9ecef" }} type="text" placeholder='Enter Email' className='w-[100%] h-[2.3rem] text-sm outline-none rounded-md pl-2 pr-2 mb-3' />

            {/* CUSTOM IMAGE UPLOAD BUTTON  */}
            <div style={{ border: "1px solid #e9ecef" }} className={`h-[2.2rem] mt-2 flex justify-center items-center rounded-md`}>
                <label htmlFor="file-input">
                    <button className={`text-sm ${image?.length > 0 ? "text-[#eff3fc]" : "text-[gray]"}`} onClick={handleImageClick}>{image?.length === 0 ? "Upload Picture" : " Image Uploaded"}</button>
                </label>
                <input id="file-input" type="file" ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
            </div>

            {/* SUBMIT BUTTON  */}
            <div className=' w-[100%] mt-3' onClick={onSubmit}>
                <button className=' w-[100%] h-[2.3rem] font-cursive text-sm text-white bg-blue-950 rounded-md'>{loading ? "Loading ..." : "Update Profile"}</button>
            </div>



            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />


        </div>


    )
}

export default UpdatePopup
