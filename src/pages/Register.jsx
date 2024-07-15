import React, { useState } from 'react'
import { inputDetails } from '../Data/data'
import InputComponent from '../components/InputComponent';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/register.module.css'

function Register() {

    let [user, setuser] = useState({ name: "", age: "", designation: "", gender: "", mobile: "", email: "",password:"",confirmpass:"" })
    let [errors, setErrors] = useState({});
    let navigateToOtp = useNavigate()

    let updateUser = ({ target: { name, value } }) => {
        
        setuser({ ...user, [name]: value })
        setErrors({ ...errors, [name]: "" })
    }

    let getOtp = () => {
        let valid = true;
        let newErrors = {};

        if (!user.name.trim()) {
            newErrors.name = "First name is required";
            valid = false;
        }
        if (!user.age.trim()) {
            newErrors.age = "age is required";
            valid = false;
        }
        if (!user.designation.trim()) {
            newErrors.designation = "desig is required";
            valid = false;
        }
       

        if (!/^[ a-zA-Z\s]*$/.test(user.name)) {
            newErrors.name = "First name cannot contain special characters or numbers";
            valid = false;
        }

        if (user.mobile.length !== 10) {
            newErrors.mobile = "Enter a valid 10-digit phone number";
            valid = false;
        } else if (!/[0-9]+.{9}/.test(user.mobile)) {
            newErrors.mobile = "Enter phone number only";
        }

        if (!user.email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            newErrors.email = "Invalid email address";
            valid = false;
        }

        setErrors(newErrors);
       
        return valid;

    }

    let checkUser = async (e) => {
        e.preventDefault();
        if (getOtp()) {
          try {
            let {data} = await axios.post('http://localhost:4040/employe/addemploye', user,{mode:"cors"});
            if(data.error){
                alert(data.message)
            }
            else{
                alert(data.message)
                navigateToOtp('/otp')
            }
            
          } catch (err) {
            console.log(err);
          }
        }
      }


    return (
        <form onSubmit={checkUser} className='register'>
            {inputDetails.map((input) => (
                <div key={input.id}>
                    <InputComponent {...input} onchange={updateUser} />
                    {errors[input.name] && <span className="error">{errors[input.name]}</span>}
                </div>
            ))}
            <button onClick={getOtp}>Get Otp</button>
        </form>
    )
}

export default Register
