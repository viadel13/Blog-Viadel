import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import profil from "../../assets/images/prof.jpeg";

const Body = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = profil;
  }, [])
  
  return (
    <section className="home" id="home">
      <div className="container-lg">
        <div className="row d-flex align-items-center justify-content-center"  >
          <div className="col-md-6 mt-5 mt-md-0 ">
            <div className="home-img text-center">
              {!imageLoaded && (
                <SkeletonTheme>
                  <Skeleton height={380} width={290} borderRadius={10} />
                </SkeletonTheme>
              )}
              {imageLoaded && (
                <img
                  src={profil}
                  alt="profil"
                  style={{ borderRadius: "10%" }}
                  width={290}
                  height={300}
                  loading="lazy"
                />
              )}
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0 order-md-first">
            <div className="home-text">
              <p className="text-muted mb-1">Salut je suis</p>
              <h1 className="text-danger text-upperacase fs-1 fw-bold">
                Développeur Web Full Stack
              </h1>
              <h1 className="fs-4">Nlend Viadel</h1>
              <p className="mt-4 text-muted">
                Passionné par la création d'expériences web exceptionnelles, je
                suis un développeur web full stack avec une expertise solide en
                technologies telles que JavaScript, React, Node.js et plus
                encore. J'aime transformer des idées en réalité en combinant des
                designs élégants avec des fonctionnalités robustes. Mon objectif
                est de produire des applications web performantes, intuitives et
                esthétiques, tout en gardant à l'esprit l'expérience de
                l'utilisateur final.
              </p>
              <a href="#portfolio" className="btn btn-danger px-3 mt-3">
                Mon Travail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
