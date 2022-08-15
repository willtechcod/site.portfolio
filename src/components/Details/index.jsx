import { All, Techs, Detail} from './style'
import details from '../../Data/details.json'
import Slider from "infinite-react-carousel";
import { useParams } from 'react-router-dom'

const Details = () => {

  const settings = {

    duration: 20,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesPerRow: 1,
    infinite: true,
    centerMode: true

  };

  const { id } = useParams()
  const { title, description, link, technologies, icon, images, description2} = details.DetailsIdentification[id].Details

  return (
    <>

      <All>

        <Slider {...settings}>

          {
            images.map((mockup) => {
              return (
                <div className="images">
                  <img className={mockup.class} src={mockup.image} alt="Images" />
                </div>
              )
            })
          }

        </Slider>

      </All>

      <Detail>

        <div className="details">
          <div className='titles'><img src={icon} alt="Icon" />
            <div className='buttons'>
              <h1>{title}</h1>
              <a href={link} target="--blank" ><i className='fas fa-link'></i> Acessar Site</a>
            </div>
          </div>
          <br />
          <br />
          <span>{description}</span>
          <br />
          <br />
          <span>{description2 ? { description2 } : ""}</span>
          <Techs>
            <section className='all-techs'>
              <h5 className='title'><i className="fas fa-code"></i> Tecnologias Utilizadas:</h5>
              {
                technologies.map((techs) => {
                  return (

                    <div style={{ background: techs.color }} className='techs'>
                      {techs.name}
                    </div>

                  )
                })
              }
            </section>
          </Techs>
          <br />
          <br />
        </div>

      </Detail>
    </>
  )
}


export default Details