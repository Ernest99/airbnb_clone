import React from 'react'
import './footer.css'
import {TbWorld} from 'react-icons/tb'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer_left">
            <p>&copy; 2022 Airbnb, Inc. Privacy &middot; Terms &middot; Sitemap &middot; Destination</p>
        </div>
        <div className="lang">
           <TbWorld/>
           &middot;
           <p>ENGLISH <a href="/">US</a></p>
           &middot;
           <p>$ <a href="/">USD</a></p>
           &middot;
           <p>Resource & Support</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
