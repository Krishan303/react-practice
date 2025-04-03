import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([]);
  const [redoList, setRedoList] = useState([]);

  const maintainHistory = (val, prevValue, newValue) => {
    const obj = {
      action: val,
      prevValue,
      newValue,
    };
    const copyHistory = [...history];
    copyHistory.unshift(obj);
    setHistory(copyHistory);
  };

  const handleClick = (buttonValue) => {
    const val = parseInt(buttonValue);
    maintainHistory(buttonValue, value, value + val);
    setValue((prev) => prev + val);
  };

  const handleUndo = () => {
    if(history.length){
    const copyHistory = [...history];
    const firstElement = copyHistory.shift();
    setHistory(copyHistory);
    console.log(firstElement);
    setValue(firstElement?.prevValue);
    const copyRedoList = [...redoList];
    copyRedoList.push(firstElement);
    setRedoList(copyRedoList);
    }
  }

  const handleRedo = () => {
    const copyRedo = [...redoList];
    console.log(copyRedo);
    const poppedValue = copyRedo.pop();
    setRedoList(copyRedo);
    const {action , prevValue, newValue} = poppedValue;
    setValue(newValue);
    maintainHistory(action, prevValue, newValue)
    // setHistory(copyRedo)
}
  return (
    <div className="flex flex-col justify-center text-center">
      <h1 className="text-lg font-bold">Undoable Counter</h1>
      <div>
        <button className="m-2 p-2 bg-gray-400 border border-black" onClick={handleUndo}>
          Undo
        </button>
        <button className="m-2 p-2 bg-gray-400 border border-black" onClick={handleRedo}>
          Redo
        </button>
      </div>
      <div className="flex justify-center text-center items-center">
        <div>
          {[-100, -10, -1].map((btn) => {
            return (
              <button
                className="m-2 p-2 bg-gray-400 border border-black h-15 w-20"
                onClick={() => handleClick(btn)}>
                {btn}
              </button>
            );
          })}
        </div>
        <div className="mx-6">{value}</div>
        <div>
          {["+100", "+10", "+1"].map((btn) => {
            return (
              <button
                className="m-2 p-2 bg-gray-400 border border-black h-15 w-20"
                onClick={() => handleClick(btn)}>
                {btn}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-20">
        <span>History</span>
        <div className="h-60 w-60 border border-black">
          {history.map((val) => {
            return (
              <div>
                {val.action} ({val.prevValue} -> {val.newValue})
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Counter;
