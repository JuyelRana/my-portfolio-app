import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

                    <title>Md Juyel Rana | Personal Portfolio - Home</title>
                    <meta name="keywords"
                          content="Md. Juyel Rana, A Full Stack Developer, React Js (Next Js, Redux, Flux, Material UI, React-bootstrap), Vue Js(Nuxt Js, Vuex), PHP (Laravel, Codeigniter), Node Js (Express Js), Native (Java, Android, Swift), Cross Platform (React Native, Ionic), MySQL, MongoDB, Firebase"/>
                    <meta name="description"
                          content="Very passionate about learning new technologies, breaking down complex problems, and learning from other developers and He always keep himself updated with the latest platforms, frameworks, libraries, and technologies. React Js (Next Js, Redux, Flux, Material UI, React-bootstrap), Vue Js(Nuxt Js, Vuex), PHP (Laravel, Codeigniter), Node Js (Express Js), Native (Java, Android, Swift), Cross Platform (React Native, Ionic), MySQL, MongoDB, Firebase, Digital Ocean,AWS, Cloud, Linux (Apache, Mysql Server), Docker, Kubernetes, Jenkins, Git, Bitbucket, Github, Gitlab, Trello, Jira, ClickUp."/>
                    <meta property="og:title"
                          content="Md. Juyel Rana, A Full Stack Developer."/>
                    <meta content='241110544128' property='fb:app_id'/>
                    <meta property="og:url" content="https://mjuyelrana.com/"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:image" content="/img/profile_img.png"/>
                    <meta property="og:image:width" content="600"/>
                    <meta property="og:image:height" content="600"/>
                    <meta property="og:site_name" content="Md. Juyel Rana | Personal Portfolio"/>
                    <meta property="og:description"
                          content="Very passionate about learning new technologies, breaking down complex problems, and learning from other developers and He always keep himself updated with the latest platforms, frameworks, libraries, and technologies. React Js (Next Js, Redux, Flux, Material UI, React-bootstrap), Vue Js(Nuxt Js, Vuex), PHP (Laravel, Codeigniter), Node Js (Express Js), Native (Java, Android, Swift), Cross Platform (React Native, Ionic), MySQL, MongoDB, Firebase, Digital Ocean,AWS, Cloud, Linux (Apache, Mysql Server), Docker, Kubernetes, Jenkins, Git, Bitbucket, Github, Gitlab, Trello, Jira, ClickUp."/>

                    <link href="/manifest.json" rel="manifest"/>

                    {/*<link href="/img/fav.png" rel="icon"/>*/}
                    {/*<link href="/img/fav-apple.png" rel="apple-touch-icon"/>*/}

                    <link rel="icon" type="image/svg+xml" href="/img/favicons/default.svg"/>
                    <link rel="apple-touch-icon" sizes="192x92" href="/img/favicons/favicon-192x192.png"/>
                    <link rel="icon" type="image/png" sizes="192x92" href="/img/favicons/favicon-192x192.png"/>
                    <link rel="apple-touch-icon" sizes="57x57" href="/img/favicons/favicon-57x57.png"/>
                    <link rel="apple-touch-icon" sizes="60x60" href="/img/favicons/favicon-60x60.png"/>
                    <link rel="apple-touch-icon" sizes="72x72" href="/img/favicons/favicon-72x72.png"/>
                    <link rel="apple-touch-icon" sizes="76x76" href="/img/favicons/favicon-76x76.png"/>
                    <link rel="apple-touch-icon" sizes="114x114"
                          href="/img/favicons/favicon-114x114.png"/>
                    <link rel="apple-touch-icon" sizes="120x120"
                          href="/img/favicons/favicon-120x120.png"/>
                    <link rel="apple-touch-icon" sizes="144x144"
                          href="/img/favicons/favicon-144x144.png"/>
                    <link rel="apple-touch-icon" sizes="152x152"
                          href="/img/favicons/favicon-152x152.png"/>
                    <link rel="apple-touch-icon" sizes="180x180"
                          href="/img/favicons/favicon-180x180.png"/>
                    <link rel="icon" type="image/png" sizes="16x16"
                          href="/img/favicons/favicon-16x16.png"/>
                    <link rel="icon" type="image/png" sizes="32x32"
                          href="/img/favicons/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="36x36"
                          href="/img/favicons/favicon-36x36.png"/>
                    <link rel="icon" type="image/png"
                          sizes="48x48"
                          href="/img/favicons/favicon-48x48.png"/>
                    <link rel="icon" type="image/png"
                          sizes="96x96"
                          href="/img/favicons/favicon-96x96.png"/>
                    <link rel="icon" type="image/png"
                          sizes="128x128"
                          href="/img/favicons/favicon-128x128.png"/>
                    <link rel="icon"
                          type="image/png"
                          sizes="512x512"
                          href="/img/favicons/favicon-512x512.png"/>

                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                        rel="stylesheet"/>

                    <link
                        href="/vendor/aos/aos.css"
                        rel="stylesheet"/>
                    <link
                        href="/vendor/bootstrap/css/bootstrap.min.css"
                        rel="stylesheet"/>
                    <link
                        href="/vendor/bootstrap-icons/bootstrap-icons.css"
                        rel="stylesheet"/>
                    <link
                        href="/vendor/boxicons/css/boxicons.min.css"
                        rel="stylesheet"/>
                    <link
                        href="/vendor/glightbox/css/glightbox.min.css"
                        rel="stylesheet"/>

                    <link
                        href="/vendor/fontawesome/css/all.css"
                        rel="stylesheet"/>

                    <link
                        href="/vendor/swiper/swiper-bundle.min.css"
                        rel="stylesheet"/>

                    <link href="/css/style.css"
                          rel="stylesheet"/>
                </Head>

                {/*<Head/>*/}

                <body>

                <Main/>

                <NextScript/>

                {/*Vendor JS Files */}
                <script src="/vendor/aos/aos.js"/>
                <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
                <script src="/vendor/fontawesome/js/all.js"/>
                <script src="/vendor/glightbox/js/glightbox.min.js"/>
                <script src="/vendor/isotope-layout/isotope.pkgd.min.js"/>
                <script src="/vendor/php-email-form/validate.js"/>
                <script src="/vendor/purecounter/purecounter.js"/>
                <script src="/vendor/swiper/swiper-bundle.min.js"/>
                <script src="/vendor/typed.js/typed.min.js"/>
                <script src="/vendor/waypoints/noframework.waypoints.js"/>

                {/*Template Main JS File */}
                <script src="/js/main.js"></script>

                </body>
            </Html>
        )
    }
}

export default MyDocument
