import React, { useState } from 'react'

const Form = () => {
    const data = [{
        id : "name",
        name : "Name",
        placeholder: "Enter your name",
        type: "text",
        button: "Next"
    },{
        id : "email",
        name : "Email",
        placeholder: "Enter your email",
        type: "email",
        button: "Next"
    },{
        id : "dob",
        name : "Date of Birth",
        placeholder: "Enter your dob",
        type: "DOB",
        button: "Next"
    },{
        id : "password",
        name : "Password",
        placeholder: "Enter your password",
        type: "password",
        button: "Submit"
    }]

    const [formData, setFormData] = useState(data);
    const [index, setIndex] = useState(0);
    const [submittedData, setSubmittedData] = useState({
        name: "", email: "", dob:"", password: ""
    })

    const handleNextClick = (e) => {
        e.preventDefault();
        if(index === formData.length - 1){
            alert("Please Submit the form")
        }else{
        setIndex((idx) => idx+1)
        } 
    }

    const handleBackClick = (e) => {
        e.preventDefault();
        setIndex((idx) => idx-1)
    }

    const handleValueChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        const oldData = {...submittedData}
        oldData[id] = value
        setSubmittedData(oldData);
        console.log(submittedData);
    }

  return (
    <div className='flex content-center items-center h-[100vh] w-[100vw] justify-center'> 
        <form className='flex flex-col items-start'>
            {index > 0 && <a href='/' onClick={handleBackClick}>Back</a>}
            <span className='text-2xl font-bold'>{formData[index].name}</span>
            <input className='w-60 h-8 border border-black outline-none p-2 my-2'
            type={formData[index].type}
            placeholder={formData[index].placeholder}
            id={formData[index].id}
            onChange={(e) => handleValueChange(e)}
            value={submittedData[formData[index].id]}
            />
            <button className='bg-purple-500 p-3 w-20 rounded-md' onClick={(e) => handleNextClick(e)}>{formData[index].button}</button>
        </form>
    </div>
  )
}

export default Form