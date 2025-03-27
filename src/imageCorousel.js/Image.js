import React, { useEffect, useState } from 'react'

const Image = ({data}) => {
  const [imageUrl, setImageUrl] = useState([])
  const [index, setIndex] = useState(0);
    // const thumbnail = data?.data?.thumbnail;
    // console.log(thumbnail);
    console.log(data[index]);
    

    useEffect(() => {
      const interval = setInterval(()=>{
        setIndex((prev) => (prev+1) % data.length) 
      },3000)

      return () => clearInterval(interval);
    },[])
    
    
  return (
    <div className=''>
      <img className=""src={data[index]}/>
    </div>
  )
}

export default Image