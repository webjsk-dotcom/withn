import React from 'react'
import { Link } from "react-router-dom";
import '../styles/brand.css';

export default function Brand() {
  return (
    <div className='container'>
      
      <div className="link">
        <Link to="/" >홈</Link> &gt; 브랜드소개
      </div>

      <h2 className='title'>브랜드소개</h2>
    </div>
  )
}
