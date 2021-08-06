import React from 'react'

interface Props {
  href: string
  subject: string
}

const FooterLink: React.FC<Props> = ({ href, subject }) => {
  return <li className="footer-link-item">
    <a href={href} className="footer-link">
      <span>{subject}</span>
    </a>
  </li>
}

export default FooterLink