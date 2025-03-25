import React, { useEffect, useState } from "react";

const ShoppingComp = () => {
  const [input, setInput] = useState("");
  const [apiResponse, setResponse] = useState([]);
  const [isTick, setIsTick] = useState({});

  const handleTickClick = (list) => {
    setIsTick((prev) => ({
      ...prev,
      [list]: !prev[list],
    }));
    console.log(isTick);
  };

  const handleCrossClick = (list) => {
    const copyResponse = [...apiResponse];
    const newResponse = copyResponse.filter((response) => response !== list);
    setResponse(newResponse);
  };

  const handleTextChange = (e) => {
    const entertedText = e.target.value;
    if (entertedText.length > 1) {
      setInput(entertedText);
    }
    if(entertedText===""){
        setResponse([])
        setInput("")
    }
  };

  useEffect(() => {
    if(input){
    const timer = setTimeout(async() => {
      try {
        const response = await fetch(
          `https://api.frontendeval.com/fake/food/${input}`
        );
        const jsonData = await response.json();
        setResponse(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },200)

    return () => clearTimeout(timer)
  }}, [input]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl my-5">Shopping List</h1>
      <div>
        <input
          type="text"
          className="p-2 border border-black mt-10 mb-1"
          onChange={(e) => handleTextChange(e)}
        />
        <div className="border border-black p-2 flex flex-col">
          {apiResponse.map((list) => {
            return (
              <div className="flex justify-between">
                <div onClick={() => handleTickClick(list)}>✅</div>
                <div className={`${!isTick[list] ? "" : "line-through"}`}>
                  {list}
                </div>
                <div onClick={() => handleCrossClick(list)}>❌</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShoppingComp;
