import React, { useState } from 'react'
import Button from '../components/tools/Button'
import { getNewOtp, signup, verifyOtp } from '../apiCalls/user'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [postalCode, setPostalCode] = useState("")

    const [otpPrompt, setOtpPrompt] = useState(false)
    const [otp, setOtp] = useState("")
    const [otpInstruction, setOtpInstruction] = useState("please enter the otp you recieved on your email below")

    const navigate = useNavigate()

    const signUpHandler = async (e)=>{

        e.preventDefault()

        const payload = {
            firstName,
            lastName,
            email,
            password,
            phone,
            country,
            address,
            city,
            state,
            postalCode,
        }

        const allFieldsFilled = Object.values(payload).every(value => value && value.trim() !== '');
        if (!allFieldsFilled) {
            alert("all fields are required")
            return
        }

        try {
            const res = await signup(payload)
            if (res) {
                console.log(res.data);
                setOtpPrompt(true)
                alert(res.data.message)
                return
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response);
                alert(error.response.data.message || error.response.data.error) 
                return;               
            }

            if (error.message) {
                console.log(error.message);
                alert("there was an error login you in. please try again later")
                return
            }

            if (error.request) {
                console.log("request not sent");                
                alert("there was an error login you in. please try again later")
            }
        }
    }

    const verifyEmail = async(e)=>{
        e.preventDefault()

        const payload = {
            email,
            otp
        }

        const requireAllFields = Object.values(payload).every(value => value && value.trim() != "")
        !requireAllFields && (alert("please enter your otp"))

        try {
            const res = await verifyOtp(payload)
            if (res) {
                setOtpPrompt(false)
                alert(res.data.message)
                navigate("/login")
                return
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response);
                alert(error.response.data.message || error.response.data.error) 
                return;               
            }

            if (error.message) {
                console.log(error.message);
                alert("there was an error login you in. please try again later")
                return
            }

            if (error.request) {
                console.log("request not sent");                
                alert("there was an error login you in. please try again later")
            }
        }
    }

    const newOtpHandler = async (e) => {

        e.preventDefault()
        
        !email && (alert("there was a problem requesting a new OTP"))

        try {
            const res = await getNewOtp({email})
            if (res) {
                setOtpInstruction("a new otp have been sent to your email. please check and enter it below")
                return
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response);
                alert(error.response.data.message || error.response.data.error) 
                return;               
            }

            if (error.message) {
                console.log(error.message);
                alert("there was an error login you in. please try again later")
                return
            }

            if (error.request) {
                console.log("request not sent");                
                alert("there was an error login you in. please try again later")
            } 
        }
    }
    

    return (
        <section className=' w-full '>

        {/* otp prompt */}
        <div className={`w-[50vw] h-[50vh] bg-gray-200 fixed top-1/2 left-1/2 ${!otpPrompt && ("hidden")}
                    transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 justify-center z-10 `}>
            <p className=' text-center '>{otpInstruction}</p>
            <input type="" className=' border w-[100px] mx-auto text-center ' onChange={e=>setOtp(e.target.value)} />
            <div className=' flex gap-3 justify-center '>
                {<Button buttonText={"submit"}  performFunction={verifyEmail} />}
                {<Button buttonText={"request new otp"} bground={"gray-500"} performFunction={newOtpHandler} />}
            </div>
        </div>

            <div className='max-w-[1400px] mx-auto py-15 px-2  '>
                <form action="" className=' border p-10 my-10 border-gray-300 text-gray-600 flex flex-col gap-3 '>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 gap-5 '>
                        <div className=' '>
                            <label htmlFor="" className=' capitalize '>firstname</label> <br />
                            <input type="text" className=' border w-full p-3 border-gray-300 '
                                onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div className=' '>
                            <label htmlFor="" className=' capitalize '>lastname</label> <br />
                            <input type="text" className=' border w-full p-3 border-gray-300 '
                                onChange={e => setLastName(e.target.value)} />
                        </div>
                    </div>

                    <div className=' grid grid-cols-1 sm:grid-cols-2 gap-5 '>
                        <div className='  '>
                            <label htmlFor="" className=' capitalize '>email</label> <br />
                            <input type="text" className=' border w-full p-3 border-gray-300 '
                                onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='  '>
                            <label htmlFor="" className=' capitalize '>password</label> <br />
                            <input type="password" className=' border w-full p-3 border-gray-300 '
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>

                    <div className=' grid grid-cols-1 sm:grid-cols-2 gap-5 '>
                        <div className='  '>
                            <label htmlFor="" className=' capitalize '>phone</label> <br />
                            <input type="text" className=' border w-full p-3 border-gray-300 '
                                onChange={e => setPhone(e.target.value)} />
                        </div>
                        <div className='  '>
                            <label htmlFor="" className=' capitalize '>country</label> <br />
                            <input type="text" className=' border w-full p-3 border-gray-300 '
                                onChange={e => setCountry(e.target.value)} />
                        </div>
                    </div>

                    <div className='  '>
                        <label htmlFor="" className=' capitalize '>address</label> <br />
                        <input type="text" className=' border w-full p-3 border-gray-300 '
                            onChange={e => setAddress(e.target.value)} />
                    </div>

                    <div className=' grid grid-cols-1 sm:grid-cols-2 gap-5 '>
                        <div className='  '>
                            <label htmlFor="" className=' capitalize '>city</label> <br />
                            <input type="text" className=' border w-full p-3 border-gray-300 '
                                onChange={e => setCity(e.target.value)} />
                        </div>
                        <div className='  '>
                            <label htmlFor="" className=' capitalize '>state</label> <br />
                            <input type="text" className=' border w-full p-3 border-gray-300 '
                                onChange={e => setState(e.target.value)} />
                        </div>
                        <div className='  '>
                            <label htmlFor="" className=' capitalize '>postal code</label> <br />
                            <input type="text" className=' border w-full p-3 border-gray-300 '
                                onChange={e => setPostalCode(e.target.value)} />
                        </div>
                    </div>

                    <div className=' flex gap-3 '>
                    <Button buttonText={"create account"} width={"fit"} performFunction={signUpHandler} />
                    <Button buttonText={"login"} width={"fit"} bground='gray-500' performFunction={()=>navigate("/login")} />
                    </div>
                </form>
            </div>
        </section>
    )
}
