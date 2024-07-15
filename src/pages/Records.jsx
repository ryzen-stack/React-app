import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../CSS/records.css'
import { FaUserEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

function Records() {
    let [user, setusers] = useState([])

    let getdata = async () => {
        
        try {
            let { data } = await axios.get('http://localhost:4040/employe/getemployes', { mode: 'cors' });
            setusers(data.data);
        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect (()=>{
        getdata()
      },[])
      console.log(user)

      let deleteItem = (id) =>{
        console.log(id)

      }
    return (
        <section>
            <h1>Records</h1>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>gender</th>
                        <th>designation</th>
                        <th>mobile</th>
                        <th>email</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {user.map((item,id)=>{
                    return <tr key={id}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>{item.designation}</td>
                        <td>{item.mobile}</td>
                        <td>{item.email}</td>
                        <td><button className='edit'><FaUserEdit /></button></td>
                        <td><button className='delete' onClick={()=>deleteItem(item._id)}><TiDeleteOutline /></button></td> 
                    </tr>
                })}
                </tbody>
            </table>
            
            
        </section>
    )
}

export default Records
