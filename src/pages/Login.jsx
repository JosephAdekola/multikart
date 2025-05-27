import React, { useState } from 'react'
import Button from '../components/tools/Button'
import { getToken, newPwSetter, passwordReset } from '../apiCalls/user'
import { useNavigate } from 'react-router-dom'
import { authAtom } from '../atoms/auth/authAtoms'
import { useSetRecoilState } from 'recoil'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [resetPwPrompt, setResetPwPromp] = useState(false)
    const [veryEmail, setVeriEmail] = useState("")
    const [sendNewPassword, setSendNewPassword] = useState(false)
    const [otp, setOtp] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPasswordAgain, setNewPasswordAgain] = useState("")
    const setAuth = useSetRecoilState(authAtom)

    const navigate = useNavigate()

    const notify = (msg, type = "info") => toast[msg ? type : "error"](msg || "Something went wrong.")

    const loginHandler = async (e) => {
        e.preventDefault()

        if (!email || !password) {
            notify("All fields are required", "error")
            return
        }

        try {
            const res = await getToken({ email, password })

            if (res) {
                setAuth({
                    token: res.data.token,
                    user: res.data.user
                })
                notify(res.data.message, "success")
                window.location.reload()
            }

        } catch (error) {
            if (error.response) {
                notify(error.response.data.message || error.response.data.error, "error")
            } else if (error.message) {
                notify("There was an error logging you in. Please try again later", "error")
            } else if (error.request) {
                notify("Request not sent. Please try again later", "error")
            }
        }
    }

    const veriEmailSender = async (e) => {
        e.preventDefault()

        if (!veryEmail) {
            notify("Please provide your registered email address", "error")
            return
        }

        try {
            const res = await passwordReset({ email: veryEmail })
            if (res.status === 200) {
                notify(res.data.message, "success")
                setSendNewPassword(true)
            }
        } catch (error) {
            if (error.response) {
                notify(error.response.data.message || error.response.data.error, "error")
            } else if (error.message) {
                notify("There was an error sending reset link. Please try again later", "error")
            } else if (error.request) {
                notify("Request not sent. Please try again later", "error")
            }
        }
    }

    const sendNewPasswordToBack = async (e) => {
        e.preventDefault()

        const payload = {
            email: veryEmail,
            otp,
            password: newPassword
        }

        const allField = Object.values(payload).every(value => value || value.trim() !== "")
        if (!allField) {
            notify("All fields are required", "error")
            return
        }

        if (newPassword !== newPasswordAgain) {
            notify("Passwords do not match. Please verify and try again", "error")
            return
        }

        try {
            const res = await newPwSetter(payload)
            if (res) {
                setSendNewPassword(false)
                setResetPwPromp(false)
                notify(res.data.message, "success")
                navigate("/login")
            }
        } catch (error) {
            if (error.response) {
                notify(error.response.data.message || error.response.data.error, "error")
            } else if (error.message) {
                notify("There was an error updating your password. Please try again later", "error")
            } else if (error.request) {
                notify("Request not sent. Please try again later", "error")
            }
        }
    }

    return (
        <section className='w-full'>
            <ToastContainer />

            {/* email prompt */}
            <div className={`w-[50vw] h-[50vh] bg-gray-200 fixed top-1/2 left-1/2 ${!resetPwPrompt ? "hidden" : ""}
                            transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 justify-center z-10`}>
                <p className='text-center'>Please provide your email</p>
                <input type="email" className='border w-[200px] mx-auto text-center' onChange={e => setVeriEmail(e.target.value)} />
                <div className='flex gap-3 justify-center'>
                    <Button buttonText={"Submit"} performFunction={veriEmailSender} />
                </div>
            </div>

            {/* new password form */}
            <div className={`w-[50vw] h-[50vh] bg-gray-200 fixed top-1/2 left-1/2 ${!sendNewPassword ? "hidden" : ""}
                            transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 justify-center z-10`}>
                <p className='text-center'>Please provide your new password</p>
                <input type="text" placeholder='OTP' className='border w-[200px] mx-auto text-center' onChange={e => setOtp(e.target.value)} />
                <input type="password" placeholder='New password' className='border w-[200px] mx-auto text-center' onChange={e => setNewPassword(e.target.value)} />
                <input type="password" placeholder='Confirm new password' className='border w-[200px] mx-auto text-center' onChange={e => setNewPasswordAgain(e.target.value)} />
                <div className='flex gap-3 justify-center'>
                    <Button buttonText={"Submit"} performFunction={sendNewPasswordToBack} />
                </div>
            </div>

            <main className='max-w-[1400px] mx-auto py-15 px-2 grid sm:grid-cols-2 gap-5'>
                <div>
                    <h1 className='text-2xl uppercase font-bold'>Login</h1>

                    <form className='border p-10 my-10 border-gray-300 text-gray-600 flex flex-col gap-3'>
                        <div>
                            <label className='capitalize'>Email</label>
                            <input type="email" className='border w-full p-3 border-gray-300' onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <label className='capitalize'>Password</label>
                            <input type="password" className='border w-full p-3 border-gray-300' onChange={e => setPassword(e.target.value)} />
                        </div>

                        <div className='flex gap-3'>
                            <Button buttonText={"Login"} width={"fit"} performFunction={loginHandler} />
                            <Button bground='gray-500' buttonText={"Forgot Password"} width={"fit"} performFunction={(e) => { e.preventDefault(); setResetPwPromp(true) }} />
                        </div>
                    </form>
                </div>

                <div>
                    <h1 className='text-2xl uppercase font-bold'>New Customer?</h1>
                    <div className='border p-10 my-10 border-gray-300 text-gray-600'>
                        <h1 className='uppercase mb-3 text-gray-800'>Create an Account</h1>
                        <p className='py-3'>
                            Sign up for a free account at our store. Registration is quick and easy.
                            It allows you to order from our shop. To start shopping, click register.
                        </p>
                        <Button buttonText={"Create an Account"} performFunction={() => navigate("/signup")} />
                    </div>
                </div>
            </main>
        </section>
    )
}
