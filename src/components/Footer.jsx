import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="foot_in">
      <div className="foot1">
        상호 : 서진통상 주식회사<br/>
        사업자등록번호 : 658-87-01207 대표자 : 유상정<br/>
        주소 : 경상북도 구미시 옥계2공단로 293-1(구포동) 개인정보보호책임자 : 한국희
      </div>

      <div className="foot2">
        <a href="#">개인정보처리방침</a><br/>
        Copyright c 2024 서진통상. All rights reserved.
      </div>
    </div>
  </footer>
  )
}
