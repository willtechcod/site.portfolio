import React, { useState } from 'react'
import { Headers } from './style'
import images from '../../Data/images.json'

const MenuTwo = () => {

    const [classOn, setClassOn] = useState(false);

    return (

        <>

            <Headers>

                <div className={classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
                    <div id="menu" className={classOn ? "fas fa-times" : "fas fa-bars"}></div>
                    <header id="header">
                        <div className="d-flex flex-column">
                            <div className="profile">
                                <img src={images.MenuImage.link} alt="" className="img-fluid rounded-circle" />
                                <h1 className="text-light">William Pereira</h1>
                                <div className="social-links mt-3 text-center">
                                    <a href="https://github.com/willtechcod" ><i className="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/willtechcode/"><i className="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/william-pereira-da-concei%C3%A7%C3%A3o-ba4496127/" ><i className="fab fa-linkedin"></i></a>
                                    <a href="mailto:dev.pereira2019@gmail.com"><i className="fas fa-envelope"></i></a>
                                </div>
                            </div>
                            <nav id="navbar" className="nav-menu navbar">
                                <ul>
                                    <li><a href="https://site-portfolio-taupe.vercel.app/home" className="nav-link"><i className="bx bx-home"></i> <span>Home</span></a></li>
                                    <li><a href="https://site-portfolio-taupe.vercel.app/sobre" className="nav-link"><i className="bx bx-user"></i> <span>Sobre mim</span></a></li>
                                    <li><a href="https://site-portfolio-taupe.vercel.app/skills" className="nav-link"><i className="bx bx-file"></i> <span>Skills</span></a></li>
                                    <li><a href="https://site-portfolio-taupe.vercel.app/resume" className="nav-link"><i className="bx bx-file-blank"></i> <span>Resumo</span></a></li>
                                    <li><a href="https://site-portfolio-taupe.vercel.app/portofolio" className="nav-link"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                                    <li><a href="https://site-portfolio-taupe.vercel.app/footer" className="nav-link"><i className="bx bx-envelope"></i> <span>Contato</span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </div>

            </Headers>

        </>

    )
}

export default MenuTwo
