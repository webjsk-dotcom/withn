import React from 'react'
import { Link } from "react-router-dom";
import '../styles/about.css';

export default function About() {
  return (
    <div className='container'>      
      <div className="link">
        <Link to="/" >홈</Link> &gt; 회사소개
      </div>

      <h2 className='title'>회사소개</h2>

      <div className="ab_visual"></div>


      <section className="ab_sec1 ab_sec">
        <div className="ab_sec1_1">
          고객의 일상에<br/> 
          실용적인 가치를 더하다.
        </div>
        <div className="ab_sec1_2">
          2018년 설립된 서진통상은 고객 여러분의 쾌적한 욕실<br/>
          생활공간 창출을 위해 노력하는 위생도기 전문기업입니다.
        </div>
        <p className='s1_rot'><img src="./images/about/about_txt.png" alt="" /></p>
        <p className='s1_plus'><img src="./images/about/about_plus.png" alt="" /></p>
      </section>


      <section className="ab_sec2 ab_sec">
        <div className="ab_sec2_1"></div>
        <div className="ab_sec2_2 s3_back">
          '합리적인 가격으로 최고의 만족을'이라는 경영철학을 바탕으로,<br/>
          우수한 품질의 제품을 경제적인 가격에 제공하여 고객 여러분의<br/>
          실생활에 실질적인 가치를 더하고자 합니다.
        </div>
      </section>


      <section className="ab_sec3 ab_sec">
        <div className="ab_sec3_1 s3_back">
          합리적인 가격을 유지하면서도 엄격한 기준과<br/>
          꼼꼼한 검수를 통해, 고객님께 자신있게 선보일 수 있는<br/>
          제품만을 출고하고 있습니다.
        </div>
        <div className="ab_sec3_2"></div>
      </section>


      <section className="ab_sec4 ab_sec">
        <div className="ab_sec4_1"></div>
        <div className="ab_sec4_2 s3_back">
          또한 끊임없는 연구개발과 시장조사를 통해 고객의 니즈를 파악하고,<br/>
          이를 제품에 반영하여 실용성과 심미성을 동시에<br/>
          갖춘 제품을 선보이겠습니다.
        </div>
      </section>
      

      <section className="ab_sec5 ab_sec">
        
          <h2>핵심가치</h2>
          <p className="s5_txt">
            이 네가지 핵심가치를 바탕으로, 고객 여러분의 믿음직한 파트너가 되어 드리겠습니다.<br/>
            당신의 일상에 가치를 더하는 기업, 서진통상이 함께 하겠습니다.
          </p>
       

        <ul>
          <li><a href="#"><img src="./images/about/about_icon01.png" alt="" />
            <p>합리적인 가격정책</p>
            <div className="cap1">
              <span className="s5-1"></span>
              <span className="s5-2"></span>
              <span className="s5-3"></span>
              <span className="s5-4"></span>
            </div>
          </a></li>
          <li><a href="#"><img src="./images/about/about_icon02.png" alt="" />
            <p>철저한 품질관리</p>
          </a></li>
          <li><a href="#"><img src="./images/about/about_icon03.png" alt="" />
            <p>지속적인 제품 혁신</p>
          </a></li>
          <li><a href="#"><img src="./images/about/about_icon04.png" alt="" />
            <p>신속한 고객 서비스</p>
          </a></li>
        </ul>
      </section>

    </div>
    // container e
  )
}
