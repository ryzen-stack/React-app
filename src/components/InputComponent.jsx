import React from 'react'

function InputComponent({ type, name, placeholder, onchange,labels,value }) {
    return (
        <div>
            <label>{labels}</label>
            <input type={type} name={name} placeholder={placeholder} onChange={onchange} value={value} />
        </div>
    )
}

export default InputComponent
