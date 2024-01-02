import { useEffect, useState } from "react";
import imageProjet from "../../datas/imagesProjet";
import ImageWithSkeleton from "../Skeleton/Index";

const Portfolio = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  
  useEffect(() => {
    // Créez un tableau pour stocker les images chargées
    const loadedImages = [];
  
    // Parcourez les projets et chargez les images
    imageProjet.forEach((project) => {
      const img = new Image();
      img.onload = () => {
        setImageLoaded(true);
        loadedImages.push(project.image);
      };
      img.src = project.image;
    });
  }, [imageLoaded]);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="scetion-title text-center">
              <h2 className="fw-bold mb-5">Derniers travaux</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {imageProjet.map((projet, index) => {
            return (
              <div
                key={index}
                className="col-md-6 col-lg-4 d-flex justify-content-center"
              >
                <div className="portfolio-item">
                  {imageLoaded && (
                    <>
                     <img
                      src={projet.image}
                      alt={projet.title}
                      className="p-1"
                      width={320}
                      height={190}
                      style={{
                        border: "1px solid rgb(83, 83, 83)",
                        borderRadius: "2%",
                      }}
                    />
                        
                  <h3 className="text-capitalize fs-5 my-2">{projet.title}</h3>
                  <p className="mb-4">
                    <a
                      href={projet.demoLink}
                      className="text-danger text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir la demo
                    </a>
                  </p>
                    </>
                   
                  )}
           
                  {!imageLoaded && <ImageWithSkeleton />}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
