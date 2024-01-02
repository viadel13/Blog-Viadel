import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
   
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm" style={{position: 'sticky', top: 0, zIndex: 999}}>
    <div className="container-lg">
      <a className="navbar-brand text-danger fw-bold fs-4"  href="#">VIADEL</a>
      <div className="dropdown">
          <button
            className="btn btn-secondary btn-danger px-3"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           
           <AiOutlineMenu />
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="#">Accueil</a>
            </li>
            <li>
              <a className="dropdown-item" href="#about">A propos</a>
            </li>
            <li>
              <a className="dropdown-item" href="#services">Services</a>
            </li>
            <li>
              <a className="dropdown-item" href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a className="dropdown-item" href="#contact">Contact</a>
            </li>
        
          </ul>
        </div>

    </div>
  </nav>
 

    
  );
};

export default Navbar;
