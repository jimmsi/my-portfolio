import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="navbar bg-opacity-70 bg-base-100 fixed top-0 w-full z-50 shadow-md">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" href="#">Min Portfolio</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#cv">CV</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

