import React from 'react'
import { Link } from "react-router-dom";
import '../styles/product.css';

export default function Product() {
  return (
    <div className='container'>
      
      <div className="link">
        <Link to="/" >홈</Link> &gt; 제품소개
      </div>

      <h2 className='title'>제품소개</h2>
    </div>
  )
}