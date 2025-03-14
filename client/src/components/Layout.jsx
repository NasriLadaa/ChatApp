import React from 'react';
import { Outlet } from 'react-router-dom'; // For rendering dynamic content
import '../scss/LayoutCSS.css';
import '../scss/cover.css';


const Layout = () => {
    return (
        <>
            <header className="mb-auto">
                <div>
                    <h3 className="float-md-start mb-0">ChatApp</h3>
                    <nav className="nav nav-masthead justify-content-center float-md-end">
                        <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="/home">Home</a>
                        <a className="nav-link fw-bold py-1 px-0" href="/about">About</a>
                        <a className="nav-link fw-bold py-1 px-0" href="contact">Contact</a>
                    </nav>
                </div>
            </header>

            <main className="px-3">
                {/* This part can be dynamic, depending on the route */}
                <Outlet />
            </main>

            <footer className="mt-auto text-white-50">
                <p> &copy;<a href="https://twitter.com/mdo" className="text-white">Nasri S. Ladaa</a> All Rights Reserved. </p>
            </footer>
        </>
    );
};

export default Layout;
