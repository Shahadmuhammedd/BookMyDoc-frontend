import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DocCard from './DocCard'

function AllDoc() {
  //1.base_url
  const base_url ='https://bookmydoc-mznb.onrender.com/doctors'

  //state creation for holding array data
  const [docData,setDocData] = useState([])

  //2.creating a function for fetching
  const fetchData = async () => {
    try {
      const response = await axios.get(base_url);
      console.log(response.data);
      setDocData(response.data); // Assign array of data into the state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  //3.create useEffect for calling function.
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div>
      <DocCard docArray={docData}/>
    </div>
  )
}

export default AllDoc