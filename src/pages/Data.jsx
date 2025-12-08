import React from 'react'
import { Link } from "react-router-dom";
import '../styles/data.css';

export default function Data() {
  return (
    <div className='container'>
      
      <div className="link">
        <Link to="/" >홈</Link> &gt; 자료실
      </div>

      <h2 className='title'>자료실</h2>
    </div>
  )
}