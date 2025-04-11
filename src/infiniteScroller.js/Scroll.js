import React, { useEffect, useRef, useState } from 'react'

const Scroll = () => {

    const [data, setData] = useState([]);
    const interactionRef = useRef();
    const [page,setPage] = useState(1);
    const [loading,setLoading] = useState(false)

    const getData = async(index) => {
        setLoading(true)
        const fetchData = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=9`);
        const jsonData = await fetchData.json();
        setData((prev) => [...prev, ...jsonData]);
        setLoading(false);
    }

    useEffect(() => {
        getData(page)
    },[page])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const target = entries[0];
            if(target.isIntersecting && !loading){
                setPage((prev) => prev+1);
            }
        })

        if(interactionRef.current){
            observer.observe(interactionRef.current)
        }

        return () => {
            observer.unobserve(interactionRef.current)
        }

    },[loading])


  return (
    <div>Infinite Scroller
        {data?.map((val,key) => {
            return <img
            key={key}
            src={val?.thumbnailUrl}
            alt={val?.title}
            />
        })}
        <div ref={interactionRef}>
            {loading && <p>Loading...</p>}
        </div>
    </div>
  )
}

export default Scroll