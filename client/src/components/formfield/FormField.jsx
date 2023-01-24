import React from 'react'
import "./formfield.css"

 
const FormField = ({
    labelName , type, name, placeholder, value, handleChange, isSupriseMe, handleSupriseMe
}) => {
  return (
    <div className="form">
        <div className="first">
        <label htmlFor="name"
        className='field'>

            {labelName}

        </label>

        {isSupriseMe && (
            <button
            type='button'
            onClick={handleSupriseMe}
            className='btn'
            >
                Suprise Me
            </button>
        )}

        </div>

        <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={handleChange}
        required
        className='inputBox'
        />
        
        
    </div>
  )
}

export default FormField