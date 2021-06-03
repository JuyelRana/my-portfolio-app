import React from 'react';
import Header from "../Sidebar/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"/></a>
        </>
    );
};

export default Layout;
