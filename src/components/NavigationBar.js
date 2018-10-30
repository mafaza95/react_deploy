import React from 'react';
import logo from './icon.svg';

const NavigationBar = () => (
  <nav className="navbar navbar-expand navbar-light fixed-top bg-light">
  <div className="container">
      <div id="navbarCollapse">
          <span className="navbar-text ml-auto py-0 px-lg-2">
            <form className="form-inline">
              <h1 className="mb-0 logo"><a href="#"><img src={logo} width="150"/></a></h1>
              <input className="form-control mr-sm-2 search-text" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn my-2 my-sm-0 search-button" type="submit"><i class="fas fa-search"></i></button>
              <ul className="navbar-nav mb-auto mt-0 ml-auto align-middle">
                <li className="nav-item">
                    <a className="nav-link py-0 createStory" href="#">Login/Sign Up</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link py-0 createStory" href="#"><i class="fas fa-plus-circle"></i> Create Story</a>
                </li>
              </ul>
            </form>
          </span>
          <ul className="navbar-nav mb-auto mt-0 ml-auto downmenu">
              <li className="nav-item active">
                  <a className="nav-link py-0" href="#">Video</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link py-0" href="#">Honor</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link py-0" href="#">News</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link py-0" href="#">Sepak Bola</a>
              </li>

              <li className="nav-item">
                  <a className="nav-link py-0" href="#">Ekonomi</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link py-0" href="#">Politik</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link py-0" href="#">Hiburan</a>
              </li>
          </ul>
      </div>
  </div>
</nav>
);
export default NavigationBar;
