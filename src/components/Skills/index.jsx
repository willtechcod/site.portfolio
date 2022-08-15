import React from 'react'
import { Item, Skill, Sliders } from './style'
import Carousel from "react-elastic-carousel";
import Slider from "infinite-react-carousel";
import images from '../../Data/images.json'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 350, itemsToShow: 2 },
    { width: 500, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 900, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
];

const settings = {
    duration: 10,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesPerRow: 1,
    infinite: true
};

const Skills = () => {
    return (
        <>

            <Skill id='skills'>

                <div className='title_page'>
                    <h1 className="section-title-01" ><i className="fas fa-file-code m-2"></i>SKILLS</h1>
                    <h2 className="section-title-02">MINHAS SKILLS</h2>
                </div>


                <section className='skills'>
                    <Carousel enableAutoPlay autoPlaySpeed={5000} showArrows={false} breakPoints={breakPoints}>
                        <Item><i className='content'><img src={images.IconHTML.link} alt="Icon" />HTML</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconJavascript.link} alt="Icon" />Javascript</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconCSS.link} alt="Icon" />CSS</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconReact.link} alt="Icon" />React.js</i>
                        </Item>
                        
                        <Item><i className='content'><img src={images.IconTypescript.link} alt="Icon" />Typescript</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconPhotoshop.link} alt="Icon" />Photoshop</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconStyled.link} alt="Icon" />Styled</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconNode.link} alt="Icon" />Node.js</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconGit.link} alt="Icon" />GIT</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconFigma.link} alt="Icon" />Figma</i>
                        </Item>
                        <Item><i className='content'><img src={images.IconBootstrap.link} alt="Icon" />Bootstrap</i>
                        </Item>
                        
                       <Item><i className='content'><img src={images.IconSass.link} alt="Icon" />Sass</i>
                        </Item> 
                        
                    </Carousel>
                </section>



                <Sliders>

                    <section className='qualifications'>
                        <div className='differences'>

                            <span>DIFERENCIAIS</span>

                            <Slider {...settings}>

                                <div className='expertise'>
                                    <img src={images.CleanCode.link} alt="icon" />
                                    <div className='title'>Clean Code</div>
                                    <p> Tenho como minha principal diretriz durante o desenvolvimento a qualidade do código seguindo as melhores práticas do mercado.</p>
                                </div>

                                <div className='expertise'>
                                    <img src={images.Responsive.link} alt="icon" />
                                    <div className='title'>Design Responsivo</div>
                                    <p>Criação de Sites com adaptação a todos os dispositivos.</p>
                                </div>

                                <div className='expertise'>
                                    <img src={images.Semantic.link} alt="icon" />
                                    <div className='title'>Código Semântico</div>
                                    <p>Deixe seu site com uma performance e acessibilidade maior.</p>
                                </div>

                                <div className='expertise'>
                                    <img src={images.Seo.link} alt="icon" />
                                    <div className='title'>SEO</div>
                                    <p>Alavanque seus sites com um ótimo posicionamento nas pesquisas.</p>
                                </div>

                            </Slider>

                        </div>
                    </section>


                    <section className='qualifications'>
                        <div className='differences'>

                            <span>CERTIFICADOS</span>

                            <Slider {...settings}>

                                <div className='expertise'>
                                    <img src={images.IconProgBR.link} alt="icon" />
                                    <div className='title'>Certificado De Conclusão</div>
                                    <p>Certificado obtido após a realização de todo o módulo das tecnologias de NodeJS, React, React Native e TypeScript.</p>
                                    <a target="--blank" href="https://www.udemy.com/certificate/UC-af82dc92-1a5c-40c9-9f3b-392b2446051c/">Acessar Certificado <i className='fas fa-certificate'></i></a>
                                </div>

                                <div className='expertise'>
                                    <img src={images.IconDIO.link} alt="icon" />
                                    <div className='title'>Certificado De Conclusão</div>
                                    <p>Obtido após a realização do Curso Completo de Design de Interface. na Ûdemy</p>
                                    <a target="--blank" href="https://www.udemy.com/certificate/UC-50d16602-03f1-41af-8c82-217f5fabdcab/">Acessar Certificado <i className='fas fa-certificate'></i></a>
                                </div>

                                <div className='expertise'>
                                    <img src={images.IconDIO.link} alt="icon" />
                                    <div className='title'>Certificado De Conclusão</div>
                                    <p>Certificado obtido após a realização do Curso Desenvolvimento Web Completo 2022 - 20 cursos + 20 projetos. na Ûdemy</p>
                                    <a target="--blank" href="https://www.udemy.com/certificate/UC-be28b876-11e3-4c59-85fb-10fabd70b843/">Acessar Certificado <i className='fas fa-certificate'></i></a>
                                </div>

                                <div className='expertise'>
                                    <img src={images.IconDIO.link} alt="icon" />
                                    <div className='title'>Certificado De Conclusão</div>
                                    <p>Obtido após a realização do curso de Node.js do Zero a Maestria com diversos Projetos, na Ûdemy.</p>
                                    <a target="--blank" href="https://www.udemy.com/certificate/UC-5e8f8813-8461-4976-b9f8-a4060c8c2c2d/">Acessar Certificado <i className='fas fa-certificate'></i></a>
                                </div>

                            </Slider>

                        </div>
                    </section>

                </Sliders>

            </Skill>

        </>
    )
}

export default Skills