import React from 'react';
import logo from '../../../../img/Grouplogo.png';

const Nav = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light  container">
  <div className="container-fluid">
  
    <a className="navbar-brand" href="#">
    <img src={logo} alt="" width="50" height="40"/>
    <span className='ml-3'>Navbar</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Price</a>
        <a className="nav-link" href="#">About Us</a>
        
      </div>
    </div>
  </div>
</nav>
    );
};

export default Nav;