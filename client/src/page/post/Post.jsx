import React from 'react'
import "./post.css"
import { useNavigate } from 'react-router-dom'
import FormField from '../../components/formfield/FormField'
import { useState } from 'react';
import Preview from "../../assets/preview.png"
import Load from "../../assets/load.gif"

import { getRandomPrompt } from '../../utils';

const Post = () => {


   const navigate = useNavigate();
   const [ form , setForm ] = useState({
    name: "",
    prompt: "",
    photo: ""
  });

  const [ generatingImg , setGeneratingImg] = useState(false);
  const [ loading , setLoading]  = useState(false)


  const handleSubmit = ()=>{

  }
// changing name of data according to user entered data
  const handleChange = (e)=>{

    setForm({ ...form , [e.target.name]:[e.target.value]})

  }


  const handleSupriseMe = ()=>{
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form , prompt:randomPrompt})
    
  }

  const generateImg =async()=>{

    if(form.prompt){
      try {

        setGeneratingImg(true);
        const response = await fetch("https://dalle-goug.onrender.com/api/v1/dalle",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({ prompt : form.prompt})
        })

        const data = await response.json();
        setForm({...form, photo:`data:image/jpeg;base64,
        ${data.photo}`})
        
      } catch (error) {
        alert(error)
        
      } finally{
        setGeneratingImg(false)
      }
    }
    else{
      alert("Enter a prompt")
    }

  }

  return (
    
    <div className="post">
      <div className="container">
        <h1>
          Create
        </h1>
        <p>
          Create image with the DALLE 
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <FormField
          labelName="Your Name"
          type="Text"
          name="name"
          placeholder="John"
          value={form.name}
          handleChange = {handleChange}
        />


        <FormField
          labelName="prompt"
          type="Text"
          name="prompt"
          placeholder=" Bird flying in the sky "
          value = {form.prompt}
          handleChange = {handleChange}
          isSupriseMe
          handleSupriseMe={handleSupriseMe}
        />
        <div className="image">
            {form.photo ?(
                <img
                src={form.photo}
                alt={form.prompt}
                classname="img1"
                />
            ):(
                <img
                src= {Preview}
                alt='Preview'
                className='img2'
                />


            )}

            { generatingImg && (
              <div className="loading">
                <img src={Load} alt="" />
              </div>
            )}




        </div>
        <div className="generateimg">
          <button 
          type='button'
          onClick={generateImg}
          >

            {generatingImg ? "Generating..." : "Generate"}

          </button>
        </div>

        








      </form>
    </div>
  )
}

export default Post