import { BiPalette } from "react-icons/bi";
import { BsCursorFill, BsSpeedometer } from 'react-icons/bs';

const Service = () => {
  return (
    <section className='services py-5' id='services'>
        <div className='container-lg'>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="scetion-title text-center">
              <h2 className="fw-bold mb-5">Services</h2>
            </div>
          </div>
        </div>
        <div className='row text-center'>
            <div className='col-md-6 col-lg-4 mb-4'>
                <div className='service-item shadow p-4 rounded bg-white' style={{height: '17rem'}}>
                    <div className='icon my-3 text-danger s-2'>
                        <BiPalette size={40} />
                    </div>
                    <h3 className="fs-5 py-2">Développement Web Créatif </h3>
                    <p className="text-muted"> vise à créer des sites web uniques et esthétiquement attrayants qui captivent l'attention des visiteurs dès la première seconde</p>
                </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-4'>
                <div className='service-item shadow p-4 rounded bg-white'style={{height: '17rem'}}>
                    <div className='icon my-3 text-danger s-2'>
                        <BsCursorFill size={40} />
                    </div>
                    <h3 className="fs-5 py-2">Expériences Utilisateur Intuitives </h3>
                    <p className="text-muted"> vise à créer des interfaces conviviales qui garantissent une navigation fluide et une interaction sans effort pour vos visiteurs</p>
                </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-4'>
                <div className='service-item shadow p-4 rounded bg-white'style={{height: '17rem'}}>
                    <div className='icon my-3 text-danger s-2'>
                        <BsSpeedometer size={40} />
                    </div>
                    <h3 className="fs-5 py-2">Solutions Web Performantes</h3>
                    <p className="text-muted"> se concentre sur la création de sites web rapides, réactifs et optimisés pour garantir des temps de chargement rapides.</p>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Service
