import { BiLogoFacebook } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import cv from '../../assets/doc/cv.pdf'

const About = () => {
  return (
    <section className="about py-5 mt-5" id="about">
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="scetion-title text-center">
              <h2 className="fw-bold mb-5">A propos de moi</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 px-4">
            <div className="about-text">
              <h3 className="fs-4 mb-3">Passionné par la création web</h3>
              <p className="text-muted">
                En tant que développeur web full stack, je m'efforce de créer
                des expériences en ligne captivantes et fonctionnelles. Mon
                parcours professionnel m'a permis de maîtriser des technologies
                telles que JavaScript, React, Node.js et bien plus encore.
                J'aime combiner mon expertise technique avec un sens esthétique
                pour offrir des sites web performants et esthétiquement
                agréables.
              </p>
            </div>
            <div className="row text-center text-uppercase my-3">
              <div className="col-sm-4">
                <div className="fact-item">
                  <h4 className="fs-1 fw-bold">100</h4>
                  <p className="text-muted">Projets Complets</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="fact-item">
                  <h4 className="fs-1 fw-bold">90</h4>
                  <p className="text-muted">Clients satisfaits</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="fact-item">
                  <h4 className="fs-1 fw-bold">95</h4>
                  <p className="text-muted">Avis positifs</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex align-items-center">
                <a href="#about" className="btn px-3 btn-danger me-5">
                  Telecharger CV
                </a>
                <div className="social-inks">
                  <a href="#" className="text-dark me-2">
                    <BiLogoFacebook size={25} />
                  </a>

                  <a href="#" className="text-dark me-2">
                    <BsWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <div className="skill-item mb-4">
              <h3 className="fs-6">Html</h3>
              <div className="progress" style={{height: '5px'}}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-label="Example 20px high"
                  style={{width: '80%'}}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">Css</h3>
              <div className="progress" style={{height: '5px'}}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-label="Example 20px high"
                  style={{width: '50%'}}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">JavaScript</h3>
              <div className="progress" style={{height: '5px'}}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-label="Example 20px high"
                  style={{width: '65%'}}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">React</h3>
              <div className="progress" style={{height: '5px'}}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-label="Example 20px high"
                  style={{width: '80%'}}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">Node(express)</h3>
              <div className="progress" style={{height: '5px'}}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-label="Example 20px high"
                  style={{width: '55%'}}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
