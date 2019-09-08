import React from 'react'
import './css/footer.css'
import logo from '../images/LOGO.png';
import fb from '../images/FB.png';
import insta from '../images/INSTA.png';



const Footer = props => {
  return (
    <footer className="footer">
        <div class="d-sm-flex justify-content-md-between">
            <div className="">
                <img src={logo} className="logo"/>
            </div>
            <div className="">
                <img src={fb} className="d-inline-flex fb"/>    
                <img src={insta} className="d-inline-flex insta"/>    
            </div>
        </div>
        <p class="text-center copyr">
            Copyright - Golux Technlogies 2019 - Nikola Cvetić
        </p>
    </footer>
  )
}

export default (Footer)