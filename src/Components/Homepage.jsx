import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { SingleCard } from './SingleCard';
export const Homepage = () => {

    const [data,setData] = useState([])
    const [da,setDa] = useState([])
    const [val,setVal] = useState(3)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(r=>{
            return r.json()
        })
        .then(d =>{
          setDa([...d])
        })
    }, [])

useEffect(() => {
    let newData = da?.filter((el,ind)=>{
        if(ind<=2) {
            return el
        }
    })
    setData([...newData])
}, [da])

 const handleClick = (ind) =>{
    // console.log(ind)
    setVal(prev=>prev-1)
    let newData = data.filter((el,index)=>{
        return index!==ind
    })
   setData(newData)
 }

const handleAdd =()=>{
    if(val<10){
        setVal(prev => prev+1)
    }

    let newData = da.filter((el,ind)=>{
        if(ind<=val) {
            return el
        }
    })
    setData([...newData])
}

  return (
    <>
    <button style={{margin:"30px",padding:"15px",color:"white",backgroundColor:"green"}} onClick={handleAdd}>ADD</button>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"30px",width:"90%",margin:"auto"}}>
    {
        data.map((el,ind)=>(
        <SingleCard el={el} ind ={ind} handleClick={handleClick} setVal={setVal} len={data.length} />
        ))
        }
    </div>
    </>
  )
}