import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterStyled>
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h2>Story</h2>
                        <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Clients</a></li>
                            <li><a href="#">Testimonials</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h2>Services</h2>
                        <ul>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Consulting</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Design</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h2>Contact</h2>
                        <ul>
                            <li><a href="#">Email</a></li>
                            <li><a href="#">Phone</a></li>
                            <li><a href="#">In Person</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                    <div className="footer-col social">
                        <h2>Social</h2>
                        <ul>
                            <li><i className='fab fa-facebook-f'></i></li>
                            <li><i className='fab fa-twitter'></i></li>
                            <li><i className='fab fa-instagram'></i></li>
                            <li><i className='fab fa-linkedin'></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
    background: linear-gradient(90deg, rgb(110 ,94, 254) 0%, rgba(73, 63,252,1) 100%);
    padding: 70px 0;
    margin-top: 100vh;
    .container {
        max-width: 1170px;
        margin: auto;
    }
    .row {
        display: flex;
        flex-wrap: wrap;
    }
    .footer-col {
        width: 25%;
        padding: 0 15px;
        text-align: center;
    }
    .footer-col h2 {
        font-size: 18px;
        color: #fff;
        text-transform: capitalize;
        margin-bottom: 30px;
        font-weight: 500;
        position: relative;
    }
    .footer-col h2::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -7px;
        background: aqua;
        height: 2px;
        box-sizing: border-box;
        width: 50px;
    }
    .footer-col ul li:not(:last-child) {
        margin-bottom: 10px;
    }
    .footer-col ul li a{
        font-size: 16px;
        text-transform: capitalize;
        color: #fff;
        text-decoration: none;
        font-weight: 300;
        color: #bbbbbb;
        display: block;
        transition: all 0.3s ease;
    }
    .footer-col ul li a:hover {
        color: #fff;
        padding-left: 4px;
    }
    .social ul{
        display: flex;    
        justify-content: center;
    }
    
    .social ul li {
        height: 40px;
        width: 40px;
        background: rgba(255, 255, 255, 0.2);
        margin: 0 10px 10px 0;;
        line-height: 40px;
        border-radius: 50%;
        color: #fff;
        transition: all 0.5s ease;
        cursor: pointer;
    }
    .social ul li:hover {
        color: #24262b;
        background: #fff;
    }
    @media(max-width: 767px) {
        .footer-col {
            width: 50%;
            margin-bottom: 30px;
        }
    }

    @media(max-width: 574px) {
        .footer-col {
            width: 100%;
            margin-bottom: 30px;
        }
    }
`;

export default Footer;



