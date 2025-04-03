import React, { useRef } from "react";

const InputComponent = () => {
  const emptyArr = ["", "", "", ""];
  const inputRef = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleFirstInputChange = (e, index) => {
    e.target.value = e.target.value.replace(/\D/g, "")
    if ( index < emptyArr.length-1 && e.target.value.length === 1) {
      inputRef[index+1].current.focus(); 
    }
  };

  const handleKeyDown = (e , index) => {
    if(e.key === "Backspace" && index > 0 && e.target.value === ""){
        inputRef[index-1].current.focus();
    }
  }

  return (
    <div className="flex justify-center h-[100vh] w-[100%] items-start">
      <div className="flex flex-col justify-center items-center">
        <p className="my-4">Two Factor Authentication</p>
        <div className="flex my-4">
          {/* <input className='m-2 p-2 w-10 border border-black'ref={inputRef1} onChange={(e) => handleFirstInputChange(e)}></input>
            <input className='m-2 p-2 w-10 border border-black' ref={inputRef2}></input>
            <input className='m-2 p-2 w-10 border border-black'></input>
            <input className='m-2 p-2 w-10 border border-black'></input> */}
          {emptyArr.map((input, index) => (
            <input
              className="m-2 p-2 w-10 border border-black"
              inputMode="numeric"
              pattern="[0-9]"
              key={index}
              ref={inputRef[index]}
              onChange={(e) => handleFirstInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength="1"
            >
            </input>
          ))}
        </div>
        <button className="border-black border bg-purple-600 p-3 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default InputComponent;
