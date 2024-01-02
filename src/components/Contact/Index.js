import { useEffect, useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import toast from 'react-hot-toast';
import { AiOutlinePhone } from "react-icons/ai";
import axios from 'axios';


const Contact = () => {

  const[nom, setNom] = useState('');
  const[email, setEmail] = useState('');
  const[sujet, setSujet] = useState('');
  const[message, setMessage] = useState('');
  


  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(nom === '' || email === '' || sujet === '' || message === ''){
      toast.error("Veuillez remplir tous les champs", { duration: 2000, });

    }else{
      setNom('');
      setEmail('');
      setSujet('');
      setMessage('');
      const response = await axios.post('https://api-blogdelvia.onrender.com/contact', {nom, email, sujet, message});
      toast.success('Envoye', { duration: 2000, })
    }

  }

  return (
    <section className="contact py-5" id="contact">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="scetion-title text-center">
              <h2 className="fw-bold mb-5">Contact moi</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="contact-item d-flex mb-3">
              <div className="icon fs-4 text-danger">
                <BiEnvelope />
              </div>
              <div className="text ms-3">
                <h3 className="fs-5">Email</h3>
                <p className="text-muted">example@gmail.com</p>
              </div>
            </div>
            <div className="contact-item d-flex">
              <div className="icon fs-4 text-danger">
                <AiOutlinePhone />
              </div>
              <div className="text ms-3">
                <h3 className="fs-5">Telephone</h3>
                <p className="text-muted">91 9654 56 ***</p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <input
                      type="text"
                      placeholder="Votre Nom"
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                      value={nom}
                      onChange={(e)=>setNom(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                  <input
                      type="email"
                      placeholder="Votre Email"
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mb-4">
                    <input
                      type="text"
                      placeholder="Sujet"
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                      value={sujet}
                      onChange={(e)=>setSujet(e.target.value)}
                    />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mb-4">
                    <textarea
                      rows="5"
                      placeholder="Votre message"
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                      value={message}
                      onChange={(e)=>setMessage(e.target.value)}
                    ></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <button type="submit" className="btn btn-danger px-3">Envoyer</button>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
