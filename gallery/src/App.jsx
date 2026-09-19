import axios from 'axios'
import React, { useDebugValue, useEffect, useState } from 'react'


const App = () => {
  const [userData, setUserData] = useState([]);
  const [num, setNum] = useState(1);

  const getData = async ()=>{

    const response = await axios.get(`https://picsum.photos/v2/list?page=${num}&limit=10`)
    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  },[num])

  let  printUserData = <div className='flex items-center justify-center h-full w-full text-gray-400'>Loading...</div>

  if(userData.length > 0){
    printUserData = userData.map(function(elm, idx){
      return <div>
        <a href={elm.url} target='_blank'>
          <img className = "h-45 w-58 rounded-xl overflow-hidden" src={elm.download_url} alt="" />
          <h2 className='font-bold text-lg'>{elm.author}</h2>
        </a>
      </div>
    })

  }
  function prevPage(){
    if(num>1)setNum(num-1)
    setUserData([])
  }
  function NextPage(){
    setNum(num+1)
     setUserData([])
  }
  return (
    <div className='bg-gray-800 h-screen overflow-auto  text-white p-29 '>
      <div className='flex flex-wrap gap-7 mb-8'>{printUserData}</div>
      <div  className='flex justify-center gap-6 text-lg font-bold'>
        <button onClick={()=>{prevPage()}} className='bg-amber-400 py-1 px-5 text-xl font-bold text-black rounded'>Prev</button>
        <h4>Page {num}</h4>
        <button onClick={()=>{NextPage()}} className='bg-amber-400 py-1 px-5 text-xl font-bold text-black rounded'>Next</button>
      </div>
    </div>
  )
}

export default App
