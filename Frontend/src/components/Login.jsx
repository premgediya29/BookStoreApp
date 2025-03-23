import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    const [data, setData] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Loging Successfully!!');
                    document.getElementById("my_modal_3").close();
                    setTimeout(() => {
                        window.location.reload();
                        localStorage.setItem("Users", JSON.stringify(res.data.user));
                    }, 1000);
                }
              
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                    setTimeout(() => {
                        
                    }, 2000);
                }
            })
    }
    return (
        <div>
            <dialog id="my_modal_3" className="modal" name="my_modal_3">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
                        <h3 className="font-bold text-lg">Login</h3>
                        {/* E-mail */}
                        <div className='mt-4 space-y-3'>
                            <span>Email</span><br />
                            <label className="input validator ">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                                <input type="email" className="py-1" placeholder="Enter your email" {...register("email", { required: true })} /><br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </label>
                        </div>
                        {/* Password */}
                        <div className='mt-4 space-y-3'>
                            <span>Password</span><br />
                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                                <input type="password" className="py-1" required placeholder="Password" {...register("password", { required: true })} /><br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </label>
                        </div>
                        {/* Button */}
                        <div className='flex justify-between mt-4 '>
                            <button className="btn  btn-secondary w-23 h-9 ">Login</button>
                            <p>Not registered? <Link to="/Signup" className='underline text-pink-500 cursor-pointer'> Signup </Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login