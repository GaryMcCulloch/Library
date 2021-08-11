import React from 'react';
import styled from 'styled-components';
import background3 from '../../images/background3.png';
import backgroundP from '../../images/backgroundP.jpg';
import backgroundpp from '../../images/backgroundpp.jpg';

function Hero() {
    return (
        <HeroStyled>
            <div className="container">
                <img className='hero-image' src={background3} alt="" />
                <img className='hero-image-p' src={backgroundpp} alt="" />
                <div className="welcome">
                    <h1 className="hero-item">HERO SECTION</h1>
                    <p className="hero-item">have a plan for their future and development.  We want to change that.</p>
                    <button className="hero-item">cool button</button>
                </div>
            </div>
        </HeroStyled>
    )
}

const HeroStyled = styled.div`
    .hero-image-p{
        display: none;
    }
    .hero-image{
        width: 100%;
        height: auto;
        position: relative;
    }
    .welcome{
        position: absolute;
        top: 20%;
        right: 20%;
        width: 40%;
        h1{
            font-size: 5vw;
            font-weight: 300;
        }
        p{
            font-size: 2vw;
            text-transform: uppercase;
            color: rgba(0, 0, 0, 0.5);
        }
        button{
            margin-top: 5vh;
            padding: 1rem 2rem;
            font-size: 2vw;
            text-transform: uppercase;
            background: rgba(255, 255, 255, 0.2);
            color: black;
            border: 2px rgb(91,78,253) solid;
        }
        button:hover {
            background: rgb(91,78,253);
            transition: all 1s ease;
        }
    }
    @media(max-width: 1000px){
            .hero-image{
                display: none;
            }
            .hero-image-p{
                display: block;
                width: 100%;
                height: auto;
            }
            .welcome{
                top: 30%;
                right: 10%;
                button{
                    margin-top: 5vh;
                }
            }
        }
        @media(max-width: 800px){
            .welcome{
                width: 50%;
                right: 1%;
                h1{
                    font-size: 6vw;
                }
                p{
                    margin-top: 5vh;
                    font-size: 3vw;
                }
                button{
                    font-size: 3vw;
                    margin-top: 5vh;
                }
            }
        }
        @media(max-width: 400px){
            .welcome{
                top: 20%;
            }
        }
 
`;

export default Hero
