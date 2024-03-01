// frontend/components/Navbar.jsx
import React from 'react';
import Link from 'next/link'; // Use Next.js Link for client-side navigation

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">BallByBall</a>
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/signup">
                            <a className="nav-link">Signup</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/login">
                            <a className="nav-link">Login</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;