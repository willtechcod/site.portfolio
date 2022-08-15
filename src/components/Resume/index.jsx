import React from 'react'
import { Resumes } from './style'

const Resume = () => {
    return (
        <>

            <Resumes id='resume'>

                <div className='title_page'>
                    <h1 className="section-title-01" ><i className="bx bx-file-blank"></i>RESUMO</h1>
                    <h2 className="section-title-02">EDUCAÇÃO E EXPERIÊNCIA</h2>
                </div>


                <section className="ftco-section ftco-no-pb" id="resume-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="resume-wrap ftco-animate">
                                    <div className='title'>
                                        <i className="fa fa-briefcase"></i>
                                        <span className="date">2022-PRESENTE</span>
                                    </div>
                                    <h2>Frellacer</h2>
                                    <span className="position">Autônomo</span>
                                    <p className="mt-4">- Criação de websites <br /> - Atualização de websites <br /> - Criação de Artes <br /> - Criação de BOTS <br /></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="resume-wrap ftco-animate">
                                    <div className='title'>
                                        <i className="fa fa-graduation-cap"></i>
                                        <span className="date">2020-2022</span>
                                    </div>
                                    <h2>Ensino Superior</h2>
                                    <span className="position">Estácio de Sá</span>
                                    <p className="mt-4">Análise e desenvolvimento de Sistemas, trancada por motivo do início da pamdemia. Mais busco sempre estar atualizado com cursos e workshops, sempre atraz de conhecimento.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </Resumes>

        </>
    )
}

export default Resume