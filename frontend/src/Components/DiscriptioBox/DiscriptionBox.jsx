import React from 'react'
import './DiscriptionBox.css'

const DiscriptionBox = () => {
  return (
    <div className='discriptionbox'>
      <div className="discriptionbox-navigator">
        <div className="discriptionbox-nav-box">Description</div>
        <div className="discriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="discriptionbox-discription">
        <p> E-commerce is buying and selling goods using the internet,
            and transferring money and data to complete those transactions.
            All stores that sell products online can be classified as e-commerce.
            This could be anything from online marketplaces like Amazon and Etsy,
            to food delivery platforms and B2B services.</p>
           
            <p>E-commerce (electronic commerce) is the activity of electronically buying
            or selling products on online services or over the Internet. E-commerce draws
            on technologies such as mobile commerce, electronic funds transfer, 
            supply chain management, Internet marketing, online transaction processing, 
            electronic data interchange (EDI), inventory management systems, and automated data collection systems. </p>
      </div>
    </div>
  )
}

export default DiscriptionBox
