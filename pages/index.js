import React from 'react';
import Layout from "../components/Frontend/Layout/Layout";
import About from "../components/Frontend/Pages/About";
import Facts from "../components/Frontend/Pages/Facts";
import Skills from "../components/Frontend/Pages/Skills";
import Resume from "../components/Frontend/Pages/Resume";
import Portfolio from "../components/Frontend/Pages/Portfolio";
import Service from "../components/Frontend/Pages/Service";
import Contact from "../components/Frontend/Pages/Contact";

const Home = () => {
    return (
        <>

            <Layout>
                {/*Hero Section*/}
                <section
                    id="hero"
                    className="d-flex flex-column justify-content-center align-items-center"
                    style={{
                        backgroundImage: `url('/img/hero.jpg')`
                    }}>

                    <div className="hero-container" data-aos="fade-in">
                        <h1>Md Juyel Rana</h1>
                        <p>I'm a Full Stack Developer</p>
                    </div>
                </section>
                {/*End Hero */}


                <main id="main">

                    {/*About Section*/}
                    <About/>
                    {/*End About Section*/}


                    {/*Facts Section*/}
                    <Facts/>
                    {/*End Facts Section*/}

                    {/*Skills Section*/}
                    <Skills/>
                    {/*End Skills Section*/}

                    {/*Resume Section*/}
                    <Resume/>
                    {/*End Resume Section*/}

                    {/*Portfolio Section*/}
                    <Portfolio/>
                    {/*End Portfolio Section*/}

                    {/*Services Section*/}
                    <Service/>
                    {/*End Services Section*/}

                    {/*Testimonials Section*/}

                    {/*<Testimonials/>*/}

                    {/*End Testimonials Section*/}

                    {/*Contact Section*/}
                    <Contact/>
                    {/*End Contact Section*/}

                </main>
                {/*End #main*/}

            </Layout>
        </>
    );
};

export default Home;
