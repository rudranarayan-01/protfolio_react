import "./Form.css"
import React, { useState } from 'react'

const Form = () => {

  function CreateData() {

    const [input,setInput] = useState({
      name:"",
      email:"",
      subject:"",
      message:""
    });
  }

  function handleChange(event){
    const {name,value} = event.taget;
    
    setInput(prevInput => {
      return{
        ...prevInput,
        [name] : value
      }
    })
    
  }


  function handleClick(event){
    event.preventDefault();
    console.log(input);
  }

  return (

    <div className="form" action="/submit">
        <form action="">
            <label>Your Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" name="" id="" />
            <label>Subject</label>
            <input type="text" />
            <label>Message</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="Type your message here..!"></textarea>
            <button type="submit" className="btn">Submit</button>
        </form>
    </div>
  )
}


export default Form