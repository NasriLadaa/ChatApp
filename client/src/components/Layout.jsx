import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom'; // For rendering dynamic content
import '../css/LayoutCSS.css';
import '../css/cover.css';


const Layout = () => {

    const location = useLocation(); // Get the current location

    // Function to check if the link is active
    const getActiveClass = (path) => {
        return location.pathname === path ? 'nav-link fw-bold py-1 px-0 active' : 'nav-link fw-bold py-1 px-0';
    };


    return (
        <>
            <header className="mb-auto">
                <div>
                    <h3 className="float-md-start mb-0">ChatApp</h3>
                    <nav className="nav nav-masthead justify-content-center float-md-end">
                        <Link className={getActiveClass('/home')} to="/home">Home</Link>
                        <Link className={getActiveClass('/about')} to="/about">About</Link>
                        <Link className={getActiveClass('/contact')} to="/contact">Contact</Link>
                        <Link className={getActiveClass('/signup')} to="/signup">Sign Up</Link>
                        <Link className={getActiveClass('/login')} to="/login">Login</Link>
                    </nav>
                </div>
            </header>

            <main className="px-3">
                {/* This part can be dynamic, depending on the route */}
                <Outlet />
            </main>

            <footer className="mt-auto text-white-50">
                <p> &copy; &nbsp;<Link to="https://nasriladaa.github.io/" className="text-white">Nasri S. Ladaa.</Link> All Rights Reserved. </p>
            </footer>
        </>
    );
};

export default Layout;
