import React from 'react';
import { Outlet, Link } from 'react-router-dom'; // For rendering dynamic content
import '../css/LayoutCSS.css';
import '../css/cover.css';


const Layout = () => {
    return (
        <>
            <header className="mb-auto">
                <div>
                    <h3 className="float-md-start mb-0">ChatApp</h3>
                    <nav className="nav nav-masthead justify-content-center float-md-end">
                        <Link className="nav-link fw-bold py-1 px-0 active" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link fw-bold py-1 px-0" to="/about">About</Link>
                        <Link className="nav-link fw-bold py-1 px-0" to="/contact">Contact</Link>
                        <Link className="nav-link fw-bold py-1 px-0" to="/login">Login</Link>
                    </nav>
                </div>
            </header>

            <main className="px-3">
                {/* This part can be dynamic, depending on the route */}
                <Outlet />
            </main>

            <footer className="mt-auto text-white-50">
                <p> &copy;<Link to="https://twitter.com/mdo" className="text-white">Nasri S. Ladaa</Link> All Rights Reserved. </p>
            </footer>
        </>
    );
};

export default Layout;
