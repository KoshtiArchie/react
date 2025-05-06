import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {

   const data =  useLoaderData()

    // const [data,setData] = useState([]);
    // useEffect(() => {
    //   fetch('https://api.github.com/users/hiteshchoudhary')
    //   .then(response => response.json())
    //   .then(data =>{
    //         console.log(data);
    //         setData(data);
            
    // })
    // }, [])
    
    
  return (
    //{data.followers} -> to take values
    <div className='text-center bg-gray-600 text-white text-3xl m-4'>Github followers: {data.followers} <br/>
    Name: {data.login} <br/> Started:{data.created_at}
        <img src={data.avatar_url} alt='Git pic' width={300} className='ml-110 '></img>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/KoshtiArchie');
    return response.json()
}