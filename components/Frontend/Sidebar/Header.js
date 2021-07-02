import React from 'react';

const Header = () => {

    return (
        <>
            {/*Mobile nav toggle button*/}
            <i className="bi bi-list mobile-nav-toggle d-xl-none"/>

            {/*Header*/}
            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src="/img/profile_img.png" alt="" className="img-fluid rounded-circle"/>
                        <h1 className="text-light"><a href="/">Md. Juyel Rana</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="https://www.linkedin.com/in/mohammad-juyel-rana-39b51a118/" target='_blank'
                               className="linkedin"><i className="fab fa-linkedin-in"/></a>
                            <a href="mailto:contact@mjuyelrana.com" target='_blank'
                               className="email"><i className="fas fa-envelope"/></a>
                            <a href="https://github.com/JuyelRana" className="github" target="_blank"><i
                                className="fab fa-github"/></a>

                            <a href="https://stackoverflow.com/users/4043779/md-juyel-rana" className="github" target="_blank"><i
                                className="fab fa-stack-overflow"/></a>
                            <a href="#" className="facebook"><i className="fab fa-facebook"/></a>
                            <a href="skype:juyel.rana30?text" className="skype" target="_blank"><i
                                className="fab fa-skype"/></a>

                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"/>
                                <span>Home</span></a>
                            </li>
                            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"/>
                                <span>About</span></a>
                            </li>
                            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"/>
                                <span>Resume</span></a>
                            </li>
                            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"/>
                                <span>Portfolio</span></a></li>
                            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"/>
                                <span>Services</span></a>
                            </li>
                            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"/>
                                <span>Contact</span></a>
                            </li>
                        </ul>
                    </nav>
                    {/*nav-menu */}
                </div>
            </header>
            {/*End Header */}
        </>
    );
};

export default Header;
