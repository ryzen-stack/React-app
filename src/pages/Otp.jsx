import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Otp() {


   let [email,setdata] = useState('')
   let [error,setError] = useState(false)
   let [num,setnum] = useState('')
   let [otp,setotp] = useState('')
   let btn = useRef()
   let navigateToLog = useNavigate()

    let updateEmail = ({target:{value}}) =>{
        setdata(value)
        
    }

    let sendMail = async () =>{
      if(email ===''){
        return alert('fill the email field')
      }
        try {
            
          let {data} = await axios.post('http://localhost:4040/employe/getotp',{email},{mode:"cors"})
          setotp(data.data)
          alert(data.message)
          setError(true)
         
        } catch (error) {
          alert(error.response.data.message)
          setError(false)
            
        }
    }

    let otpUp = ({target:{value}}) =>{
      setnum(value)
     

    }

    let update = () =>{
     if(num !== otp){
      return alert('otp did not matched')
     }
     navigateToLog('/records')

    }

  return (
    <div>
      <input type="email" placeholder='enter your Email'  onChange={updateEmail}/>
      <button onClick={sendMail} ref={btn}>getotp</button>
      {error && <div>
        <input type="number" placeholder="Enter otp" onChange={otpUp}/>
        <button onClick={update}>send</button>
        </div>}
    </div>
  )
}

export default Otp
