import React from 'react'
import { Link } from "react-router-dom";

import '../styles/header.css';

export default function Header() {

  const navMenus = [
    { 
      label: "회사소개",
      link: "/About",    
    },
    { 
      label: "브랜드소개",
      link: "/brand"
    },
    { 
      label: "제품소개",
      link: "/product",
      sub: [
        { label: "양변기", link: "#" },
        { label: "세면기", link: "#" },
        { label: "소변기", link: "#" },
        { label: "기타", link: "#" }
      ]
    },
    { 
      label: "자료실",
      link: "/data",
      sub: [
        { label: "제품자료실", link: "#" },
        { label: "인증서", link: "#" },
        { label: "카탈로스/시공수첨", link: "#" },
        { label: "기타", link: "#" }
      ]
    }
  ];
  

  return (
    <header>
        <div className="header_logo">
          <h1 className='logo'><Link to="/" ><img src="images/img_logo2.png" alt="logo" /></Link></h1>
          
          <div id="h_top">
            <ul>
              <li><a href="#">매장찾기</a></li>
              <li><a href="#">가맹신청·문의</a></li>
              <li><a href="#">고객센터</a></li>
              <li><a href="#" className='earth' aria-label='언어 변경'></a></li>
            </ul>
          </div>
        {/* h_top e */}
        </div>
        {/* header_logo e */}


        <div className="header_menu">
          <nav>
            <ul className="gnb">
              {navMenus.map((menu, index) => (
                <li key={index}>
                  <Link to={menu.link}>{menu.label}</Link>

                  {/* 서브 메뉴가 있는 경우 */}
                  {menu.sub && (
                    <ul className="sub">
                      {menu.sub.map((sub, sidx) => (
                      <li key={sidx}>
                          <Link to={sub.link}>{sub.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>  
            <div className="shadow"></div>        
          </nav>
        </div>
      </header>
  )
}
